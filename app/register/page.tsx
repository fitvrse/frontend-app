"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dumbbell, Users, Apple, User, ArrowLeft, ArrowRight, Loader2 } from "lucide-react"
import { MaskedInput } from "@/components/ui/masked-input"
import { onlyLetters } from "@/utils/sanitize.utils"
import FormError from "./formError"
import { registerUserClient, registerPersonalTrainer } from "@/service/userService"
import { set } from "date-fns"

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");

  const [userType, setUserType] = useState(typeParam || "client");
  const [currentStep, setCurrentStep] = useState(1);
  const [documentType, setDocumentType] = useState<"cpf" | "cnpj">("cpf");
  const [isLoading, setIsLoading] = useState(false);

  // Step 1 fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [document, setDocument] = useState("");
  const [phone, setPhone] = useState("");
  const [gymName, setGymName] = useState("");
  const [professionalId, setProfessionalId] = useState("");
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState<string>("");
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [gender, setGender] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Step 2 fields
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNextStep = () => {
    // Basic validation for step 1
    // if (currentStep === 1) {
    //   let isValid = true

    //   if (userType === "client") {
    //     isValid = !!firstName && !!lastName && !!email && !!document && !!phone
    //   } else if (userType === "gym") {
    //     isValid = !!gymName && !!email && !!document && !!phone
    //   } else {
    //     // Personal or Nutritionist
    //     isValid = !!firstName && !!lastName && !!email && !!professionalId && !!document && !!phone
    //   }

    //   if (!isValid) {
    //     alert("Por favor, preencha todos os campos obrigatórios.")
    //     return
    //   }
    // }

    setCurrentStep(2)
  }

  const resetFormFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setDocument("");
    setPhone("");
    setGymName("");
    setProfessionalId("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setGender("");
    setFieldErrors({});
    setHasError(false);
    setErrorMessage("");
  };

  const handlePreviousStep = () => {
    setCurrentStep(1)
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation for step 2
    if (!username || !password || !confirmPassword) {
      alert("Por favor, preencha todos os campos obrigatórios.")
      return
    }

    if (password !== confirmPassword) {
      alert("As senhas não coincidem")
      return
    }

    // Redirecionar para o dashboard apropriado
    switch (userType) {
      case "gym":
        router.push("/gym/dashboard")
        break
      case "personal":
        router.push("/personal/dashboard")
        break
      case "nutritionist":
        router.push("/nutritionist/dashboard")
        break
      case "client":
        router.push("/client/dashboard")
        break
    }
  }

  // Format input for CPF/CNPJ and phone
  const formatDocument = (value: string) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, "")
    return numericValue
  }

  const formatPhone = (value: string) => {
    // Remove non-numeric characters
    return value.replace(/\D/g, "")
  }

  function registerClient(event: React.FormEvent) {
    event.preventDefault();

    if (password !== confirmPassword) {
      setFieldErrors((prev) => ({
        ...prev,
        confirmPassword: "As senhas não coincidem",
      }));
      return;
    }

    return registerUserClient({
      email,
      password,
      firstName,
      setFieldErrors,
      setErrorMessage,
      setHasError,
      setIsLoading,
      router
    });
  }

  function registerPersonal(event: React.FormEvent) {
    event.preventDefault();

    if (password !== confirmPassword) {
      setFieldErrors((prev) => ({
        ...prev,
        confirmPassword: "As senhas não coincidem",
      }));
      return;
    }

    return registerPersonalTrainer({
      email,
      password,
      phone,
      username,
      firstName,
      lastName,
      professionalId,
      cpf,
      cnpj,
      setIsLoading,
      router,
      setFieldErrors,
      setErrorMessage,
      setHasError
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Criar conta no FitConnect</CardTitle>
          <CardDescription>{currentStep === 1 ? "Informações pessoais" : "Informações de acesso"}</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={userType}
            value={userType}
            onValueChange={(value) => {
              setUserType(value as "client" | "gym" | "personal" | "nutritionist");
              setCurrentStep(1);
              resetFormFields();
            }}>
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="client" className="flex flex-col items-center gap-1 py-2">
                <User className="h-4 w-4" />
                <span className="text-xs">Aluno</span>
              </TabsTrigger>
              <TabsTrigger value="personal" className="flex flex-col items-center gap-1 py-2">
                <Users className="h-4 w-4" />
                <span className="text-xs">Personal</span>
              </TabsTrigger>
              <TabsTrigger value="nutritionist" className="flex flex-col items-center gap-1 py-2">
                <Apple className="h-4 w-4" />
                <span className="text-xs">Nutri</span>
              </TabsTrigger>
              <TabsTrigger value="gym" className="flex flex-col items-center gap-1 py-2">
                <Dumbbell className="h-4 w-4" />
                <span className="text-xs">Academia</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="client">
              <form onSubmit={registerClient}>
                <div className="grid gap-4">
                  <div className="grid grid-cols-full gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="firstName-client">Primeiro nome</Label>
                      <Input
                        id="firstName-client"
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(onlyLetters(e.target.value));
                        }}
                        maxLength={30}
                        placeholder="Nome"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email-client">Email</Label>
                    <Input
                      id="email-client"
                      type="email"
                      placeholder="nome@exemplo.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setFieldErrors((prev) => ({ ...prev, email: "" }));
                      }}
                      className={fieldErrors.email ? "border-red-500" : ""}
                      required
                    />
                    {fieldErrors.email && <FormError message={fieldErrors.email} />}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password-client">Senha</Label>
                    <Input
                      id="password-client"
                      type="password"
                      value={password}
                      className={fieldErrors.password ? "border-red-500" : ""}
                      onChange={
                        (e) => {
                          setPassword(e.target.value)
                          setFieldErrors((prev) => ({ ...prev, password: "" }));
                        }
                      }
                      required
                    />
                    {fieldErrors.password && <FormError message={fieldErrors.password} />}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirm-password-client">Confirmar Senha</Label>
                    <Input
                      id="confirm-password-client"
                      type="password"
                      value={confirmPassword}
                      className={fieldErrors.confirmPassword ? "border-red-500" : ""}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value)
                        setFieldErrors((prev) => ({ ...prev, confirmPassword: "" }));
                      }}
                    />
                    {fieldErrors.confirmPassword && <FormError message={fieldErrors.confirmPassword} />}
                  </div>
                  <div className="grid grid-cols-full">
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Cadastrando...
                        </>
                      ) : (
                        "Cadastrar"
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </TabsContent>

            {/* Personal Trainer Registration Form */}
            <TabsContent value="personal">
              <form onSubmit={registerPersonal}>
                <div className="grid gap-4">
                  {currentStep === 1 ? (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="firstName-personal">Nome</Label>
                          <Input
                            id="firstName-personal"
                            value={firstName}
                            onChange={(e) => {
                              setFirstName(onlyLetters(e.target.value));
                            }}
                            maxLength={30}
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="lastName-personal">Sobrenome</Label>
                          <Input
                            id="lastName-personal"
                            value={lastName}
                            onChange={(e) => setLastName(onlyLetters(e.target.value))}
                            maxLength={30}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email-personal">Email</Label>
                        <Input
                          id="email-personal"
                          type="email"
                          placeholder="nome@exemplo.com"
                          value={email}
                          className={fieldErrors.email ? "border-red-500" : ""}
                          onChange={(e) => { 
                            setEmail(e.target.value)
                            setFieldErrors((prev) => ({ ...prev, email: "" }));
                          }}
                          required
                          maxLength={100}
                        />
                        {fieldErrors.email && <FormError message={fieldErrors.email} />}
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="cref-personal">CREF</Label>
                        <MaskedInput
                          placeholder="000000-G/UF"
                          mask="000000-A/aa"
                          definitions={{
                            'A': /[A-Za-z]/,
                            'a': /[A-Za-z]/,
                          }}
                          id="cref-personal"
                          value={professionalId}
                          className={fieldErrors.professionalId ? "border-red-500" : ""}
                          onChange={(e: any) => setProfessionalId(e.target.value)}
                          required
                        />
                        {fieldErrors.professionalId && <FormError message={fieldErrors.professionalId} />}
                      </div>
                      <div className="grid gap-2">
                        <Label>CPF/CNPJ</Label>
                        <Tabs defaultValue="cpf" onValueChange={(value) => {
                          setDocumentType(value as "cpf" | "cnpj");
                        }}>
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="cpf">CPF</TabsTrigger>
                            <TabsTrigger value="cnpj">CNPJ</TabsTrigger>
                          </TabsList>
                          <TabsContent value="cpf" className="mt-2">
                            <MaskedInput
                              placeholder="CPF"
                              mask="000.000.000-00"
                              value={cpf}
                              onAccept={(value: string) => {
                                setCpf(value)
                                // setFieldErrors((prev) => ({ ...prev, cpf: "" }))
                              }}
                              className={fieldErrors.cpf ? "border-red-500" : ""}
                              required
                            />
                            {fieldErrors.cpf && <FormError message={fieldErrors.cpf} />}
                          </TabsContent>

                          <TabsContent value="cnpj" className="mt-2">
                            <MaskedInput
                              placeholder="CNPJ"
                              mask="00.000.000/0000-00"
                              value={cnpj}
                              className={fieldErrors.cnpj ? "border-red-500" : ""}
                              onAccept={(value: string) => { 
                                setCnpj(value)
                                // setFieldErrors((prev) => ({ ...prev, cnpj: "" }))
                              }}
                            />
                          </TabsContent>
                          {fieldErrors.cnpj && <FormError message={fieldErrors.cnpj} />}
                        </Tabs>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="phone-personal">Telefone (apenas números)</Label>
                        <MaskedInput
                          id="phone-personal"
                          placeholder="(00) 00000-0000"
                          mask="(00) 00000-0000"
                          value={phone}
                          onAccept={(value: string) => setPhone(value)}
                          required
                        />
                        {fieldErrors.phone && <FormError message={fieldErrors.phone} />}
                      </div>
                      <Button type="button" onClick={handleNextStep} className="w-full">
                        Próximo <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <>
                      <div className="grid gap-2">
                        <Label htmlFor="username-personal">Nome de usuário</Label>
                        <Input
                          id="username-personal"
                          placeholder="Ex: personaltrainerpedro"
                          value={username}
                          onChange={(e) => {
                            setUsername(e.target.value)
                            setFieldErrors({ ...fieldErrors, username: "" })
                          }}
                          className={fieldErrors.username ? "border-red-500" : ""}
                          maxLength={30}
                          required
                        />
                        {fieldErrors.username && <FormError message={fieldErrors.username} />}
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="password-personal">Senha</Label>
                        <Input
                          id="password-personal"
                          type="password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value)
                            setFieldErrors({ ...fieldErrors, password: "" })
                          }}
                          className={fieldErrors.password ? "border-red-500" : ""}
                          required
                        />
                        {fieldErrors.password && <FormError message={fieldErrors.password} />}
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="confirm-password-personal">Confirmar Senha</Label>
                        <Input
                          id="confirm-password-personal"
                          type="password"
                          value={confirmPassword}
                          onChange={(e) =>{ 
                            setConfirmPassword(e.target.value)
                            setFieldErrors({ ...fieldErrors, confirmPassword: "" })
                          }}
                          className={fieldErrors.confirmPassword ? "border-red-500" : ""}
                          required
                        />
                        {fieldErrors.confirmPassword && <FormError message={fieldErrors.confirmPassword} />}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <Button type="button" variant="outline" onClick={handlePreviousStep}>
                          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
                        </Button>

                        <Button type="submit" disabled={isLoading}>
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Cadastrando...
                            </>
                          ) : (
                            "Cadastrar"
                          )}
                        </Button>
                        {errorMessage && <FormError message={errorMessage} />}
                      </div>
                    </>
                  )}
                </div>
              </form>
            </TabsContent>

            {/* Nutritionist Registration Form */}
            <TabsContent value="nutritionist">
              <form onSubmit={currentStep === 2 ? handleRegister : (e) => e.preventDefault()}>
                <div className="grid gap-4">
                  {currentStep === 1 ? (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="firstName-nutritionist">Nome</Label>
                          <Input
                            id="firstName-nutritionist"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="lastName-nutritionist">Sobrenome</Label>
                          <Input
                            id="lastName-nutritionist"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email-nutritionist">Email</Label>
                        <Input
                          id="email-nutritionist"
                          type="email"
                          placeholder="nome@exemplo.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="crn-nutritionist">CRN</Label>
                        <Input
                          id="crn-nutritionist"
                          value={professionalId}
                          onChange={(e) => setProfessionalId(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label>CPF/CNPJ</Label>
                        <Tabs defaultValue="cpf" onValueChange={(value) => setDocumentType(value as "cpf" | "cnpj")}>
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="cpf">CPF</TabsTrigger>
                            <TabsTrigger value="cnpj">CNPJ</TabsTrigger>
                          </TabsList>
                          <TabsContent value="cpf" className="mt-2">
                            <Input
                              placeholder="CPF (apenas números)"
                              value={document}
                              onChange={(e) => setDocument(formatDocument(e.target.value))}
                              maxLength={11}
                              required
                            />
                          </TabsContent>
                          <TabsContent value="cnpj" className="mt-2">
                            <Input
                              placeholder="CNPJ (apenas números)"
                              value={document}
                              onChange={(e) => setDocument(formatDocument(e.target.value))}
                              maxLength={14}
                              required
                            />
                          </TabsContent>
                        </Tabs>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="phone-nutritionist">Telefone (apenas números)</Label>
                        <Input
                          id="phone-nutritionist"
                          value={phone}
                          onChange={(e) => setPhone(formatPhone(e.target.value))}
                          maxLength={11}
                          required
                        />
                      </div>
                      <Button type="button" onClick={handleNextStep} className="w-full">
                        Próximo <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <>
                      <div className="grid gap-2">
                        <Label htmlFor="username-nutritionist">Nome de usuário</Label>
                        <Input
                          id="username-nutritionist"
                          placeholder="Ex: joananutri"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="password-nutritionist">Senha</Label>
                        <Input
                          id="password-nutritionist"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="confirm-password-nutritionist">Confirmar Senha</Label>
                        <Input
                          id="confirm-password-nutritionist"
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <Button type="button" variant="outline" onClick={handlePreviousStep}>
                          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
                        </Button>
                        <Button type="submit">Cadastrar</Button>
                      </div>
                    </>
                  )}
                </div>
              </form>
            </TabsContent>

            {/* Gym Registration Form */}
            <TabsContent value="gym">
              <form onSubmit={currentStep === 2 ? handleRegister : (e) => e.preventDefault()}>
                <div className="grid gap-4">
                  {currentStep === 1 ? (
                    <>
                      <div className="grid gap-2">
                        <Label htmlFor="gymName">Nome da Academia</Label>
                        <Input id="gymName" value={gymName} onChange={(e) => setGymName(e.target.value)} required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email-gym">Email</Label>
                        <Input
                          id="email-gym"
                          type="email"
                          placeholder="academia@exemplo.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="cnpj-gym">CNPJ (apenas números)</Label>
                        <Input
                          id="cnpj-gym"
                          value={document}
                          onChange={(e) => setDocument(formatDocument(e.target.value))}
                          maxLength={14}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="phone-gym">Telefone (apenas números)</Label>
                        <Input
                          id="phone-gym"
                          value={phone}
                          onChange={(e) => setPhone(formatPhone(e.target.value))}
                          maxLength={11}
                          required
                        />
                      </div>
                      <Button type="button" onClick={handleNextStep} className="w-full">
                        Próximo <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <>
                      <div className="grid gap-2">
                        <Label htmlFor="username-gym">Nome de usuário</Label>
                        <Input
                          id="username-gym"
                          placeholder="Ex: smartfitvilavelha"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="password-gym">Senha</Label>
                        <Input
                          id="password-gym"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="confirm-password-gym">Confirmar Senha</Label>
                        <Input
                          id="confirm-password-gym"
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <Button type="button" variant="outline" onClick={handlePreviousStep}>
                          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
                        </Button>
                        <Button type="submit">Cadastrar</Button>
                      </div>
                    </>
                  )}
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="text-sm text-center text-muted-foreground">
            Já tem uma conta?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Faça login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div >
  )
}
