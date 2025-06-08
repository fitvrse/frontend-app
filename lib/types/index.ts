// Tipos para Workouts
export interface Workout {
  id: string
  name: string
  description: string
  exercises: WorkoutExercise[]
  duration: number
  difficulty: "beginner" | "intermediate" | "advanced"
  createdAt: Date
  updatedAt: Date
}

export interface WorkoutExercise {
  id: string
  exerciseId: string
  exercise: Exercise
  sets: number
  reps: number
  weight?: number
  restTime: number
  notes?: string
}

// Tipos para Exercises
export interface Exercise {
  id: string
  name: string
  description: string
  muscleGroup: string
  equipment: string
  instructions: string[]
  image?: string
  video?: string
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
  type: "client" | "personal" | "nutritionist" | "gym"
  avatar?: string
}

// Tipos para Dashboard
export interface DashboardStats {
  totalStudents: number
  activeWorkouts: number
  completedSessions: number
  revenue: number
}

// Tipos para Student
export interface Student {
  id: string
  name: string
  email: string
  phone?: string
  birthDate?: Date
  goals: string[]
  currentWorkout?: Workout
  avatar?: string
}
