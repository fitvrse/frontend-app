import { sanitize } from "@/utils/sanitize.utils";
import { api } from "./api";


interface UserClient {
    email: string;
    password: string;
    firstName: string;
    router: any;
    setFieldErrors: (errors: Record<string, string>) => void;
    setErrorMessage: (message: string) => void;
    setHasError: (hasError: boolean) => void;
}

export async function registerUserClient({
    email,
    password,
    firstName,
    setFieldErrors,
    setErrorMessage,
    setHasError,
    router }: UserClient) {

    const user = {
        email: email.trim(),
        senha: password,
        nome: sanitize(firstName),
    };


    try {
        const response = await api.post("/usuarios/cadastrar/cliente", user);

        if (response.status === 201) {
            router.push("/login");
        }

    } catch (error: any) {
        const message = error.response?.data?.message || "Erro desconhecido";
        
        const newFieldErrors: Record<string, string> = {};
        if (message.includes("Email")) {
            newFieldErrors.email = message;
        } else if (message.includes("senha")) {
            newFieldErrors.password = message;
        }

        setFieldErrors(newFieldErrors);
        setErrorMessage(message);
        setHasError(true);
    }
}