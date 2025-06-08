"use client"

import { useState, useCallback } from "react"

interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: any) => string | null
}

interface ValidationRules {
  [key: string]: ValidationRule
}

interface ValidationErrors {
  [key: string]: string
}

export function useFormValidation<T extends Record<string, any>>(initialValues: T, rules: ValidationRules) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({})

  const validateField = useCallback(
    (name: string, value: any): string | null => {
      const rule = rules[name]
      if (!rule) return null

      if (rule.required && (!value || (typeof value === "string" && value.trim() === ""))) {
        return "Este campo é obrigatório"
      }

      if (rule.minLength && typeof value === "string" && value.length < rule.minLength) {
        return `Mínimo de ${rule.minLength} caracteres`
      }

      if (rule.maxLength && typeof value === "string" && value.length > rule.maxLength) {
        return `Máximo de ${rule.maxLength} caracteres`
      }

      if (rule.pattern && typeof value === "string" && !rule.pattern.test(value)) {
        return "Formato inválido"
      }

      if (rule.custom) {
        return rule.custom(value)
      }

      return null
    },
    [rules],
  )

  const validateAll = useCallback((): boolean => {
    const newErrors: ValidationErrors = {}
    let isValid = true

    Object.keys(rules).forEach((name) => {
      const error = validateField(name, values[name])
      if (error) {
        newErrors[name] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }, [values, rules, validateField])

  const setValue = useCallback(
    (name: string, value: any) => {
      setValues((prev) => ({ ...prev, [name]: value }))

      if (touchedFields[name]) {
        const error = validateField(name, value)
        setErrors((prev) => ({
          ...prev,
          [name]: error || "",
        }))
      }
    },
    [touchedFields, validateField],
  )

  const handleTouch = useCallback(
    (name: string) => {
      setTouchedFields((prev) => ({ ...prev, [name]: true }))

      const error = validateField(name, values[name])
      setErrors((prev) => ({
        ...prev,
        [name]: error || "",
      }))
    },
    [values, validateField],
  )

  const reset = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setTouchedFields({})
  }, [initialValues])

  return {
    values,
    errors,
    touched: touchedFields,
    setValue,
    setTouched: handleTouch,
    validateAll,
    reset,
    isValid: Object.keys(errors).length === 0,
  }
}
