// Tipos para Workouts
export interface Workout {
  id: string
  name: string
  description: string
  type: "personalizado" | "template"
  difficulty: "Iniciante" | "Intermediário" | "Avançado"
  duration: string
  exercises: Exercise[]
  notes?: string
  createdAt: Date
  updatedAt: Date
}

// Tipos para Exercises
export interface Exercise {
  id: string
  name: string
  category: string
  muscleGroup: string
  equipment?: string
  instructions: string[]
  imageUrl?: string
  videoUrl?: string
  sets?: ExerciseSet[]
}

export interface ExerciseSet {
  reps: number
  weight?: number
  restTime?: string
  notes?: string
}

// Tipos para Exercise Info
export interface ExerciseInfoData {
  series: number
  repetitions: number
  weight: number
  restTime: string
  feedback: string
}

// Tipos para User
export interface User {
  id: string
  name: string
  email: string
  type: "gym" | "personal" | "nutritionist" | "client"
  avatar?: string
}

// Tipos para Dashboard
export interface DashboardStats {
  totalStudents: number
  activeWorkouts: number
  completedSessions: number
  revenue: number
}
