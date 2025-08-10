"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useHydration } from "@/hooks/useHydration"

interface User {
  id: string
  name: string
  email: string
  phone: string
  avatar?: string
  address: string
  dateOfBirth: string
  gender: string
  bio: string
  joinDate: string
  verified: boolean
  membershipLevel: "Bronze" | "Silver" | "Gold" | "Platinum"
  role?: "admin" | "user"
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (userData: Partial<User>) => Promise<void>
  logout: () => void
  updateProfile: (userData: Partial<User>) => Promise<void>
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const isHydrated = useHydration()

  const mockUser: User = {
    id: "1",
    name: "Nguyễn Văn A",
    email: "user@example.com",
    phone: "0901234567",
    avatar: "/placeholder.svg?height=120&width=120",
    address: "123 Nguyễn Huệ, Quận 1, TP.HCM",
    dateOfBirth: "1990-01-01",
    gender: "male",
    bio: "Yêu thích chụp ảnh và tham gia các sự kiện đặc biệt",
    joinDate: "2023-01-15",
    verified: true,
    membershipLevel: "Gold",
  }

  useEffect(() => {
    if (isHydrated) {
      try {
        const savedUser = localStorage.getItem("user")
        if (savedUser) {
          const parsedUser = JSON.parse(savedUser)
          setUser(parsedUser)
        }
      } catch (error) {
        console.error("Lỗi parse user từ localStorage:", error)
        localStorage.removeItem("user")
      }
    }
  }, [isHydrated])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setUser(mockUser)
      if (isHydrated) {
        localStorage.setItem("user", JSON.stringify(mockUser))
      }
    } catch (error) {
      console.error("Đăng nhập lỗi:", error)
      throw new Error("Đăng nhập thất bại")
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData: Partial<User>) => {
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const newUser: User = {
        ...mockUser,
        ...userData,
        id: Date.now().toString(),
        joinDate: new Date().toISOString(),
        membershipLevel: "Bronze",
        verified: false,
      }

      setUser(newUser)
      if (isHydrated) {
        localStorage.setItem("user", JSON.stringify(newUser))
      }
    } catch (error) {
      console.error("Đăng ký lỗi:", error)
      throw new Error("Đăng ký thất bại")
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    if (isHydrated) {
      localStorage.removeItem("user")
    }
  }

  const updateProfile = async (userData: Partial<User>) => {
    if (!user) return
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      const updatedUser = { ...user, ...userData }
      setUser(updatedUser)
      if (isHydrated) {
        localStorage.setItem("user", JSON.stringify(updatedUser))
      }
    } catch (error) {
      console.error("Cập nhật hồ sơ lỗi:", error)
      throw new Error("Cập nhật thất bại")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        updateProfile,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}