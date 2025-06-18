"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, AlertCircle, CalendarIcon } from "lucide-react"
import { format, isBefore } from "date-fns"
import { vi } from "date-fns/locale"

interface ScheduleCalendarProps {
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

export function ScheduleCalendar({ workingHours, bookedSlots, onDateSelect, onTimeSlotSelect }: ScheduleCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("")

  const generateTimeSlots = (date: Date) => {
    const dayName = format(date, "EEEE", { locale: vi }).toLowerCase()
    const workingHour = workingHours[dayName]

    if (!workingHour?.available) return []

    const slots = []
    const startHour = Number.parseInt(workingHour.open.split(":")[0])
    const endHour = Number.parseInt(workingHour.close.split(":")[0])

    for (let hour = startHour; hour < endHour; hour += 2) {
      const startTime = `${hour.toString().padStart(2, "0")}:00`
      const endTime = `${(hour + 2).toString().padStart(2, "0")}:00`
      slots.push(`${startTime}-${endTime}`)
    }

    return slots
  }

  const isSlotAvailable = (date: Date, timeSlot: string) => {
    const dateString = format(date, "yyyy-MM-dd")
    const bookedDay = bookedSlots.find((slot) => slot.date === dateString)

    if (!bookedDay) return true
    return !bookedDay.timeSlots.includes(timeSlot)
  }

  const getDayStatus = (date: Date) => {
    const dateString = format(date, "yyyy-MM-dd")
    const bookedDay = bookedSlots.find((slot) => slot.date === dateString)

    if (!bookedDay) return "available"

    const dayName = format(date, "EEEE", { locale: vi }).toLowerCase()
    const workingHour = workingHours[dayName]
    const totalSlots = generateTimeSlots(date).length
    const bookedSlotsCount = bookedDay.timeSlots.length

    if (bookedSlotsCount >= totalSlots) return "fully-booked"
    if (bookedSlotsCount > 0) return "partially-booked"
    return "available"
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

  return (
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
              available: (date) => getDayStatus(date) === "available",
              "partially-booked": (date) => getDayStatus(date) === "partially-booked",
              "fully-booked": (date) => getDayStatus(date) === "fully-booked",
            }}
            modifiersStyles={{
              available: { backgroundColor: "#dcfce7", color: "#166534" },
              "partially-booked": { backgroundColor: "#fef3c7", color: "#92400e" },
              "fully-booked": { backgroundColor: "#fecaca", color: "#991b1b" },
            }}
          />

          {/* Legend */}
          <div className="mt-4 space-y-2">
            <h5 className="font-medium text-sm">Chú thích:</h5>
            <div className="flex flex-wrap gap-4 text-xs">
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
                  const isAvailable = isSlotAvailable(selectedDate, slot)
                  const isSelected = selectedTimeSlot === slot
                  return (
                    <Button
                      key={slot}
                      variant={isSelected ? "default" : "outline"}
                      className={`w-full justify-between p-4 h-auto ${
                        !isAvailable ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      onClick={() => isAvailable && handleTimeSlotSelect(slot)}
                      disabled={!isAvailable}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          {isAvailable ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600" />
                          )}
                          <span className="font-medium">{slot}</span>
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
  )
}
