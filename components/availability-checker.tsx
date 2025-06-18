"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, AlertCircle, CalendarIcon, Clock } from "lucide-react"
import { format, isBefore, addDays } from "date-fns"
import { vi } from "date-fns/locale"

interface AvailabilityCheckerProps {
  providerId: string
  providerType: "studio" | "makeup" | "rental"
  workingHours: Record<string, { open: string; close: string; available: boolean }>
  bookedSlots: Array<{
    date: string
    timeSlots: string[]
    services: string[]
    status: string
  }>
  onDateSelect?: (date: Date) => void
  onTimeSlotSelect?: (timeSlot: string) => void
}

export function AvailabilityChecker({
  providerId,
  providerType,
  workingHours,
  bookedSlots,
  onDateSelect,
  onTimeSlotSelect,
}: AvailabilityCheckerProps) {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("")

  // Generate time slots based on working hours and provider type
  const generateTimeSlots = (date: Date) => {
    const dayName = format(date, "EEEE", { locale: vi }).toLowerCase()
    const workingHour = workingHours[dayName]

    if (!workingHour?.available) return []

    const slots = []
    const startHour = Number.parseInt(workingHour.open.split(":")[0])
    const endHour = Number.parseInt(workingHour.close.split(":")[0])

    // Different slot durations based on provider type
    const slotDuration = providerType === "studio" ? 3 : providerType === "makeup" ? 2 : 4

    for (let hour = startHour; hour < endHour; hour += slotDuration) {
      const startTime = `${hour.toString().padStart(2, "0")}:00`
      const endTime = `${(hour + slotDuration).toString().padStart(2, "0")}:00`

      // Don't create slots that go beyond working hours
      if (hour + slotDuration <= endHour) {
        slots.push({
          id: `${hour}`,
          time: `${startTime} - ${endTime}`,
          startTime,
          endTime,
          duration: slotDuration,
        })
      }
    }

    return slots
  }

  // Check if a specific time slot is available
  const isSlotAvailable = (date: Date, timeSlot: string) => {
    const dateString = format(date, "yyyy-MM-dd")
    const bookedDay = bookedSlots.find((slot) => slot.date === dateString)

    if (!bookedDay) return true
    return !bookedDay.timeSlots.some((bookedSlot) => bookedSlot === timeSlot)
  }

  // Get availability status for a day
  const getDayAvailability = (date: Date) => {
    const dateString = format(date, "yyyy-MM-dd")
    const dayName = format(date, "EEEE", { locale: vi }).toLowerCase()
    const workingHour = workingHours[dayName]

    // Check if it's a working day
    if (!workingHour?.available) {
      return { status: "closed", label: "Nghỉ", color: "bg-gray-200 text-gray-600" }
    }

    // Check if date is in the past
    if (isBefore(date, new Date())) {
      return { status: "past", label: "Đã qua", color: "bg-gray-200 text-gray-600" }
    }

    const bookedDay = bookedSlots.find((slot) => slot.date === dateString)
    if (!bookedDay) {
      return { status: "available", label: "Trống", color: "bg-green-100 text-green-800" }
    }

    const totalSlots = generateTimeSlots(date).length
    const bookedSlotsCount = bookedDay.timeSlots.length

    if (bookedSlotsCount >= totalSlots) {
      return { status: "fully-booked", label: "Đã đầy", color: "bg-red-100 text-red-800" }
    } else if (bookedSlotsCount > 0) {
      return { status: "partially-booked", label: "Một phần", color: "bg-yellow-100 text-yellow-800" }
    }

    return { status: "available", label: "Trống", color: "bg-green-100 text-green-800" }
  }

  // Get next 7 days availability summary
  const getWeekAvailability = () => {
    const days = []
    for (let i = 0; i < 7; i++) {
      const date = addDays(new Date(), i)
      const availability = getDayAvailability(date)
      days.push({
        date,
        dayName: format(date, "EEE", { locale: vi }),
        dayNumber: format(date, "d"),
        availability,
      })
    }
    return days
  }

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
    setSelectedTimeSlot("")
    if (date && onDateSelect) {
      onDateSelect(date)
    }
  }

  const handleTimeSlotSelect = (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot)
    if (onTimeSlotSelect) {
      onTimeSlotSelect(timeSlot)
    }
  }

  const timeSlots = selectedDate ? generateTimeSlots(selectedDate) : []
  const weekAvailability = getWeekAvailability()

  return (
    <div className="space-y-6">
      {/* Quick Week View */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            Tình trạng 7 ngày tới
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {weekAvailability.map((day, index) => (
              <div
                key={index}
                className={`text-center p-3 rounded-lg border cursor-pointer transition-colors ${
                  selectedDate && format(selectedDate, "yyyy-MM-dd") === format(day.date, "yyyy-MM-dd")
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => handleDateSelect(day.date)}
              >
                <div className="text-xs text-gray-500 mb-1">{day.dayName}</div>
                <div className="font-medium mb-2">{day.dayNumber}</div>
                <Badge className={`text-xs ${day.availability.color}`}>{day.availability.label}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calendar */}
        <Card>
          <CardHeader>
            <CardTitle>Chọn ngày</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              disabled={(date) => isBefore(date, new Date())}
              locale={vi}
              className="rounded-md border"
              modifiers={{
                available: (date) => getDayAvailability(date).status === "available",
                "partially-booked": (date) => getDayAvailability(date).status === "partially-booked",
                "fully-booked": (date) => getDayAvailability(date).status === "fully-booked",
                closed: (date) => getDayAvailability(date).status === "closed",
              }}
              modifiersStyles={{
                available: { backgroundColor: "#dcfce7", color: "#166534" },
                "partially-booked": { backgroundColor: "#fef3c7", color: "#92400e" },
                "fully-booked": { backgroundColor: "#fecaca", color: "#991b1b" },
                closed: { backgroundColor: "#f3f4f6", color: "#6b7280" },
              }}
            />

            {/* Legend */}
            <div className="mt-4 space-y-2">
              <h5 className="font-medium text-sm">Chú thích:</h5>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-200 rounded"></div>
                  <span>Còn trống</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-200 rounded"></div>
                  <span>Một phần đã đặt</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-200 rounded"></div>
                  <span>Đã đầy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-200 rounded"></div>
                  <span>Nghỉ</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Time Slots */}
        <Card>
          <CardHeader>
            <CardTitle>
              {selectedDate ? `Khung giờ - ${format(selectedDate, "dd/MM/yyyy", { locale: vi })}` : "Chọn khung giờ"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDate ? (
              <div className="space-y-3">
                {timeSlots.length > 0 ? (
                  timeSlots.map((slot) => {
                    const isAvailable = isSlotAvailable(selectedDate, `${slot.startTime}-${slot.endTime}`)
                    const isSelected = selectedTimeSlot === slot.id
                    return (
                      <Button
                        key={slot.id}
                        variant={isSelected ? "default" : "outline"}
                        className={`w-full justify-between p-4 h-auto ${
                          !isAvailable ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        onClick={() => isAvailable && handleTimeSlotSelect(slot.id)}
                        disabled={!isAvailable}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            {isAvailable ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-600" />
                            )}
                            <span className="font-medium">{slot.time}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Clock className="w-3 h-3" />
                            <span>{slot.duration}h</span>
                          </div>
                        </div>
                        <Badge className={isAvailable ? "bg-green-600" : "bg-red-600"}>
                          {isAvailable ? "Còn trống" : "Đã đặt"}
                        </Badge>
                      </Button>
                    )
                  })
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <AlertCircle className="w-8 h-8 mx-auto mb-2" />
                    <p>Không làm việc vào ngày này</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <CalendarIcon className="w-8 h-8 mx-auto mb-2" />
                <p>Chọn ngày để xem khung giờ có sẵn</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Booking Summary */}
      {selectedDate && selectedTimeSlot && (
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium text-green-800">Đã chọn thời gian</span>
            </div>
            <div className="text-sm text-green-700">
              <div>Ngày: {format(selectedDate, "EEEE, dd/MM/yyyy", { locale: vi })}</div>
              <div>Giờ: {timeSlots.find((slot) => slot.id === selectedTimeSlot)?.time}</div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
