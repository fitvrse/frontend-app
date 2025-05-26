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
    setIsLoading: (isLoading: boolean) => void
}

interface PersonalTrainerRegisterData {
    email: string
    password: string
    phone: string
    username: string
    firstName: string
    lastName: string
    cpf: string
    cnpj: string
    professionalId: string
    setIsLoading: (isLoading: boolean) => void
    router: any
    setFieldErrors: (errors: Record<string, string>) => void
    setErrorMessage: (message: string) => void
    setHasError: (hasError: boolean) => void
}

export async function registerUserClient({
    email,
    password,
    firstName,
    setFieldErrors,
    setErrorMessage,
    setHasError,
    setIsLoading,
    router }: UserClient) {

    const user = {
        email: email.trim(),
        senha: password,
        nome: sanitize(firstName),
    };

    setIsLoading(true);

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
    } finally {
        setIsLoading(false);
    }
}

export async function registerPersonalTrainer({
    email,
    password,
    phone,
    username,
    firstName,
    lastName,
    cpf,
    cnpj,
    professionalId,
    setIsLoading,
    router,
    setFieldErrors,
    setErrorMessage,
    setHasError
}: PersonalTrainerRegisterData) {
    const user = {
        email: email.trim(),
        senha: password,
        telefone: sanitize(phone), // Remove caracteres não numéricos
        url: username,
        nome: sanitize(firstName),
        sobrenome: sanitize(lastName),
        cpf: sanitize(cpf),
        cnpj: cnpj ? sanitize(cnpj) : null,
        cref: sanitize(professionalId),
    }

    setIsLoading(true)

    try {
        const response = await api.post("/usuarios/cadastrar/personal_trainer", user)

        if (response.status === 201) {
            router.push("/login")
        }
    } catch (error: any) {
        const message = error.response?.data?.message || "Erro desconhecido"

        const newFieldErrors: Record<string, string> = {}
        if (message.includes("Email")) {
            newFieldErrors.email = message
        } else if (message.includes("senha")) {
            newFieldErrors.password = message
        } else if (message.includes("usuário")) {
            newFieldErrors.username = message
        } else if (message.includes("CPF")) {
            newFieldErrors.cpf = message
        } else if (message.includes("CNPJ")) {
            newFieldErrors.cnpj = message
        }

        setFieldErrors(newFieldErrors)
        setErrorMessage(message)
        setHasError(true)
    }finally {
        setIsLoading(false)
    }
}