"use client"

import { useState } from "react"

interface NutritionGoals {
  calories: number
  protein: number
  carbs: number
  fat: number
  water: number
}

interface NutritionProgress {
  calories: number
  protein: number
  carbs: number
  fat: number
  water: number
}

export function useNutritionTracking(goals: NutritionGoals) {
  const [progress, setProgress] = useState<NutritionProgress>({
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    water: 0,
  })

  const addCalories = (amount: number) => {
    setProgress((prev) => ({ ...prev, calories: prev.calories + amount }))
  }

  const addProtein = (amount: number) => {
    setProgress((prev) => ({ ...prev, protein: prev.protein + amount }))
  }

  const addCarbs = (amount: number) => {
    setProgress((prev) => ({ ...prev, carbs: prev.carbs + amount }))
  }

  const addFat = (amount: number) => {
    setProgress((prev) => ({ ...prev, fat: prev.fat + amount }))
  }

  const addWater = (amount: number) => {
    setProgress((prev) => ({ ...prev, water: prev.water + amount }))
  }

  const getPercentage = (current: number, target: number) => {
    return Math.min(Math.round((current / target) * 100), 100)
  }

  const percentages = {
    calories: getPercentage(progress.calories, goals.calories),
    protein: getPercentage(progress.protein, goals.protein),
    carbs: getPercentage(progress.carbs, goals.carbs),
    fat: getPercentage(progress.fat, goals.fat),
    water: getPercentage(progress.water, goals.water),
  }

  const reset = () => {
    setProgress({
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      water: 0,
    })
  }

  return {
    progress,
    percentages,
    goals,
    addCalories,
    addProtein,
    addCarbs,
    addFat,
    addWater,
    reset,
  }
}
