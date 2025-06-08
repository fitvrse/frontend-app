export const validationRules = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Email inválido",
  },
  phone: {
    pattern: /^$$\d{2}$$\s\d{4,5}-\d{4}$/,
    message: "Telefone deve estar no formato (11) 99999-9999",
  },
  cpf: {
    pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    message: "CPF deve estar no formato 000.000.000-00",
  },
  password: {
    minLength: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    message: "Senha deve ter pelo menos 8 caracteres, incluindo maiúscula, minúscula e número",
  },
}

export function validateEmail(email: string): boolean {
  return validationRules.email.pattern.test(email)
}

export function validatePhone(phone: string): boolean {
  return validationRules.phone.pattern.test(phone)
}

export function validateCPF(cpf: string): boolean {
  return validationRules.cpf.pattern.test(cpf)
}

export function validatePassword(password: string): boolean {
  return password.length >= validationRules.password.minLength && validationRules.password.pattern.test(password)
}

export function formatPhone(value: string): string {
  const numbers = value.replace(/\D/g, "")
  if (numbers.length <= 10) {
    return numbers.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3")
  }
  return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
}

export function formatCPF(value: string): string {
  const numbers = value.replace(/\D/g, "")
  return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}
