import { sanitize } from "@/utils/sanitize.utils";
import { api } from "./api";


interface UserClient {
    email: string;
    username: string;
    password: string;
    phone: string;
    firstName: string;
    lastName: string;
    document: string;
    router: any;
    setFieldErrors: (errors: Record<string, string>) => void;
    setErrorMessage: (message: string) => void;
    setHasError: (hasError: boolean) => void;
}

export async function registerUserClient({
    email,
    username,
    password,
    phone,
    firstName,
    lastName,
    document,
    setFieldErrors,
    setErrorMessage,
    setHasError,
    router }: UserClient) {

    const user = {
        email: email.trim(),
        url: sanitize(username),
        senha: password,
        telefone: sanitize(phone),
        nome: sanitize(firstName),
        sobrenome: sanitize(lastName),
        cpf: sanitize(document),
    };

    try {
        const response = await api.post("/usuarios/cadastrar/cliente", user);

        if (response.status === 201) {
            router.push("/login");
        }

    } catch (error: any) {
        const message = error.response?.data?.message || "Erro desconhecido";
        const newFieldErrors: Record<string, string> = {};

        if (message.includes("CPF")) {
            newFieldErrors.cpf = message;
        } else if (message.includes("usuário")) {
            newFieldErrors.username = message;
        } else if (message.includes("Email")) {
            newFieldErrors.email = message;
        } else if (message.includes("Telefone")) {
            newFieldErrors.phone = message;
        }

        setFieldErrors(newFieldErrors);
        setErrorMessage(message);
        setHasError(true);
    }
}