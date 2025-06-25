"use client"
import { use, useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar } from "@/components/ui/calendar"
import {
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
  Share2,
  CalendarIcon,
  Palette,
  Award,
  CheckCircle,
  XCircle,
  AlertCircle,
  Shield,
  Verified,
  MessageCircle,
  Globe,
  Instagram,
  Facebook,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { format, isBefore } from "date-fns"
import { vi } from "date-fns/locale"

export default function MakeupArtistDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [makeupData, setMakeupData] = useState<any>(null)
  const [selectedDate, setSelectedDate] = useState<Date>()
   

  useEffect(() => {

    const data = {
      id,
      name: "Makeup Artist Linh",
      tagline: "Chuyên gia trang điểm cô dâu hàng đầu",
      rating: 4.8,
      reviewCount: 89,
      completedProjects: 450,
      yearsExperience: 6,
      location: "Nguyễn Thái Học, TP Quy Nhơn",
      phone: "0907654321",
      email: "contact@makeuplinh.com",
      website: "https://makeuplinh.com",
      socialMedia: {
        instagram: "@makeup_linh",
        facebook: "MakeupArtistLinh",
      },
      coverImage: "/makeup1.png?height=400&width=800",
      profileImage: "/makeup1.png?height=200&width=200",
      verified: true,
      premium: true,
      description: `Makeup Artist Linh với hơn 6 năm kinh nghiệm trong ngành làm đẹp, chuyên về makeup cưới và makeup dự tiệc. 
    Tôi luôn theo đuổi phong cách trang điểm tự nhiên, tôn lên vẻ đẹp riêng của từng khách hàng.
    
    Đã thực hiện hơn 450 dự án thành công với sự hài lòng tuyệt đối từ khách hàng. Tôi cam kết mang đến cho bạn 
    vẻ đẹp hoàn hảo nhất trong ngày trọng đại.`,

      services: [
        {
          id: "1",
          name: "Makeup cô dâu cơ bản",
          price: 800000,
          duration: 90,
          description: "Makeup cô dâu tự nhiên, tươi tắn cho ngày cưới",
          includes: ["Makeup mặt", "Làm tóc cơ bản", "Cài phụ kiện", "Touch-up 1 lần"],
          popular: false,
        },
        {
          id: "2",
          name: "Makeup cô dâu cao cấp",
          price: 1500000,
          duration: 120,
          description: "Makeup cô dâu sang trọng với phong cách hiện đại",
          includes: [
            "Makeup mặt chuyên nghiệp",
            "Làm tóc cao cấp",
            "Cài phụ kiện",
            "Touch-up 2 lần",
            "Makeup phù dâu (1 người)",
            "Tặng son touch-up",
          ],
          popular: true,
        },
        {
          id: "3",
          name: "Makeup dự tiệc",
          price: 600000,
          duration: 60,
          description: "Makeup dự tiệc sang trọng, phù hợp mọi sự kiện",
          includes: ["Makeup mặt", "Làm tóc đơn giản", "Touch-up 1 lần"],
          popular: false,
        },
        {
          id: "4",
          name: "Makeup chụp ảnh",
          price: 700000,
          duration: 75,
          description: "Makeup chuyên dụng cho chụp ảnh, bền màu",
          includes: ["Makeup mặt HD", "Làm tóc", "Phù hợp ánh sáng studio"],
          popular: false,
        },
      ],

      specialties: [
        "Makeup cưới",
        "Makeup dự tiệc",
        "Makeup chụp ảnh",
        "Makeup sự kiện",
        "Makeup nghệ thuật",
        "Làm tóc cô dâu",
      ],

      certifications: [
        "Chứng chỉ Makeup Artist quốc tế",
        "Chứng chỉ Làm tóc chuyên nghiệp",
        "Đào tạo tại Học viện Thẩm mỹ Hàn Quốc",
        "Chứng nhận vệ sinh an toàn thực phẩm",
      ],

      brands: ["MAC", "NARS", "Urban Decay", "Charlotte Tilbury", "Dior", "YSL", "Chanel"],

      workingHours: {
        monday: { open: "09:00", close: "18:00", available: true },
        tuesday: { open: "09:00", close: "18:00", available: true },
        wednesday: { open: "09:00", close: "18:00", available: true },
        thursday: { open: "09:00", close: "18:00", available: true },
        friday: { open: "09:00", close: "18:00", available: true },
        saturday: { open: "08:00", close: "20:00", available: true },
        sunday: { open: "08:00", close: "20:00", available: true },
      },

      bookedSlots: [
        {
          date: "2024-01-25",
          timeSlots: ["09:00-10:30", "14:00-16:00"],
          services: ["Makeup cô dâu cao cấp", "Makeup dự tiệc"],
          status: "confirmed",
        },
        {
          date: "2024-01-26",
          timeSlots: ["10:00-12:00"],
          services: ["Makeup cô dâu cao cấp"],
          status: "confirmed",
        },
        {
          date: "2024-01-27",
          timeSlots: ["09:00-10:30"],
          services: ["Makeup dự tiệc"],
          status: "pending",
        },
      ],

      gallery: [
        "/makeup1.png?height=300&width=400",
        "/makeup1.png?height=300&width=400",
        "/makeup1.png?height=300&width=400",
        "/makeup1.png?height=300&width=400",
        "/makeup1.png?height=300&width=400",
        "/makeup1.png?height=300&width=400",
      ],

      reviews: [
        {
          id: "1",
          customerName: "Nguyễn Thị Mai",
          rating: 5,
          date: "2024-01-15",
          comment: "Makeup rất đẹp và tự nhiên, Linh rất chuyên nghiệp và tận tâm!",
          avatar: "/placeholder.svg?height=40&width=40",
          service: "Makeup cô dâu cao cấp",
          verified: true,
        },
        {
          id: "2",
          customerName: "Trần Thị Hoa",
          rating: 5,
          date: "2024-01-10",
          comment: "Makeup bền màu cả ngày, rất hài lòng với dịch vụ.",
          avatar: "/placeholder.svg?height=40&width=40",
          service: "Makeup dự tiệc",
          verified: true,
        },
      ],
    }
    setMakeupData(data)
  }, [id])

  if (!makeupData) {
    return <div className="p-4">Đang tải dữ liệu...</div>
  }

  const workingHours = makeupData.workingHours as Record<
    string,
    { open: string; close: string; available: boolean }
  >;
  const dayLabels: Record<string, string> = {
    monday: "Thứ 2",
    tuesday: "Thứ 3",
    wednesday: "Thứ 4",
    thursday: "Thứ 5",
    friday: "Thứ 6",
    saturday: "Thứ 7",
    sunday: "Chủ nhật",
  };

  const generateTimeSlots = (date: Date) => {
    const dayName = format(date, "EEEE", { locale: vi }).toLowerCase()
    const workingHour = makeupData.workingHours[dayName as keyof typeof makeupData.workingHours]

    if (!workingHour?.available) return []

    const slots = []
    const startHour = Number.parseInt(workingHour.open.split(":")[0])
    const endHour = Number.parseInt(workingHour.close.split(":")[0])

    for (let hour = startHour; hour < endHour; hour += 2) {
      const startTime = `${hour.toString().padStart(2, "0")}:00`
      const endTime = `${(hour + 1.5).toString().padStart(2, "0")}:30`
      slots.push(`${startTime}-${endTime}`)
    }

    return slots
  }

  const isSlotAvailable = (date: Date, timeSlot: string) => {
    const dateString = format(date, "yyyy-MM-dd")
    const bookedDay = makeupData.bookedSlots.find(
      (slot: { date: string; timeSlots: string[]; status: string }) =>
        slot.date === dateString
    )

    if (!bookedDay) return true
    return !bookedDay.timeSlots.includes(timeSlot)
  }


  const getDayStatus = (date: Date) => {
    const dateString = format(date, "yyyy-MM-dd")
    const bookedDay = makeupData.bookedSlots.find(
      (slot: { date: string; timeSlots: string[]; status: string }) =>
        slot.date === dateString
    )

    if (!bookedDay) return "available"

    const dayName = format(date, "EEEE", { locale: vi }).toLowerCase()
    const workingHour = makeupData.workingHours[dayName as keyof typeof makeupData.workingHours]
    const totalSlots = generateTimeSlots(date).length
    const bookedSlots = bookedDay.timeSlots.length

    if (bookedSlots >= totalSlots) return "fully-booked"
    if (bookedSlots > 0) return "partially-booked"
    return "available"
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  const timeSlots = selectedDate ? generateTimeSlots(selectedDate) : []

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Cover Image & Basic Info */}
      <div className="relative h-96 w-full">
        <Image src={makeupData.coverImage || "/placeholder.svg"} alt={makeupData.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />

        {/* Profile Card */}
        <div className="absolute bottom-6 left-6 right-6">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <Image
                    src={makeupData.profileImage || "/placeholder.svg"}
                    alt={makeupData.name}
                    width={120}
                    height={120}
                    className="rounded-lg object-cover"
                  />
                  {makeupData.verified && (
                    <Badge className="absolute -top-2 -right-2 bg-blue-600">
                      <Verified className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold">{makeupData.name}</h1>
                    {makeupData.premium && (
                      <Badge className="bg-gradient-to-r from-pink-400 to-purple-500">Premium</Badge>
                    )}
                  </div>
                  <p className="text-gray-600 mb-3">{makeupData.tagline}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {renderStars(makeupData.rating)}
                        <span className="font-medium">{makeupData.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({makeupData.reviewCount} đánh giá)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Palette className="w-4 h-4 text-pink-600" />
                      <span className="text-sm">{makeupData.completedProjects} dự án</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{makeupData.yearsExperience} năm kinh nghiệm</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-600" />
                      <span className="text-sm">Quận 3, TP.HCM</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button asChild>
                      <Link href={`/booking?makeup=${makeupData.id}`}>
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        Đặt lịch ngay
                      </Link>
                    </Button>
                    <Button variant="outline">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Nhắn tin
                    </Button>
                    <Button variant="outline" size="icon">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="about">Giới thiệu</TabsTrigger>
                <TabsTrigger value="services">Dịch vụ</TabsTrigger>
                <TabsTrigger value="schedule">Lịch trình</TabsTrigger>
                <TabsTrigger value="gallery">Thư viện</TabsTrigger>
                <TabsTrigger value="reviews">Đánh giá</TabsTrigger>
              </TabsList>

              {/* About Tab */}
              <TabsContent value="about" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Về tôi</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="prose max-w-none">
                      <p className="text-gray-700 leading-relaxed">{makeupData.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5 text-yellow-600" />
                          Chứng chỉ & Đào tạo
                        </h4>
                        <ul className="space-y-2">
                          {makeupData.certifications.map((cert: string, index: number) => (
                            <li key={index} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              {cert}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Palette className="w-5 h-5 text-pink-600" />
                          Chuyên môn
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {makeupData.specialties.map((specialty: string, index: number) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Thương hiệu sử dụng</h4>
                      <div className="flex flex-wrap gap-2">
                        {makeupData.brands.map((brand: string, index: number) => (
                          <Badge key={index} className="bg-pink-100 text-pink-800 hover:bg-pink-200">
                            {brand}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Giờ làm việc</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {Object.entries(workingHours).map(([day, hours]) => (
                          <div
                            key={day}
                            className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                          >
                            <span className="font-medium capitalize">{dayLabels[day]}</span>
                            <span
                              className={`text-sm ${hours.available ? "text-green-600" : "text-red-600"
                                }`}
                            >
                              {hours.available ? `${hours.open} - ${hours.close}` : "Nghỉ"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Services Tab */}
              <TabsContent value="services" className="space-y-4">
                {makeupData.services.map((service: {
                  id: string;
                  name: string;
                  price: number;
                  duration: number;
                  description: string;
                  includes: string[];
                  popular: boolean;
                }) => (
                  <Card key={service.id} className={service.popular ? "border-pink-500 border-2" : ""}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold">{service.name}</h3>
                            {service.popular && <Badge className="bg-pink-600">Phổ biến nhất</Badge>}
                          </div>
                          <p className="text-gray-600 mb-3">{service.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {Math.floor(service.duration / 60)}h {service.duration % 60}m
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-pink-600 mb-2">{service.price.toLocaleString()}đ</div>
                          <Button asChild>
                            <Link href={`/booking?makeup=${makeupData.id}&service=${service.id}`}>
                              <CalendarIcon className="w-4 h-4 mr-1" />
                              Đặt lịch
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Bao gồm:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                          {service.includes?.map((item: string, index: number) => (
                            <li key={index} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Schedule Tab */}
              <TabsContent value="schedule" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Lịch trình & Tình trạng đặt lịch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Calendar */}
                      <div>
                        <h4 className="font-medium mb-4">Chọn ngày để xem lịch trình</h4>
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
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
                      </div>

                      {/* Time Slots */}
                      <div>
                        {selectedDate ? (
                          <div>
                            <h4 className="font-medium mb-4">
                              Lịch trình ngày {format(selectedDate, "dd/MM/yyyy", { locale: vi })}
                            </h4>
                            <div className="space-y-3">
                              {timeSlots.length > 0 ? (
                                timeSlots.map((slot) => {
                                  const isAvailable = isSlotAvailable(selectedDate, slot)
                                  return (
                                    <div
                                      key={slot}
                                      className={`p-3 rounded-lg border-2 transition-colors ${isAvailable
                                          ? "border-green-200 bg-green-50 hover:border-green-300"
                                          : "border-red-200 bg-red-50"
                                        }`}
                                    >
                                      <div className="flex items-center justify-between">
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
                                        <div className="text-right">
                                          {isAvailable ? (
                                            <Badge className="bg-green-600">Còn trống</Badge>
                                          ) : (
                                            <Badge variant="destructive">Đã đặt</Badge>
                                          )}
                                        </div>
                                      </div>
                                      {!isAvailable && (
                                        <div className="mt-2 text-sm text-gray-600">
                                          <span className="font-medium">Dịch vụ: </span>
                                          {selectedDate && (
                                            makeupData.bookedSlots
                                              .find((booking: { date: string; services: string[] }) => booking.date === format(selectedDate, "yyyy-MM-dd"))
                                              ?.services.join(", ") || "Không có"
                                          )}
                                        </div>

                                      )}
                                    </div>
                                  )
                                })
                              ) : (
                                <div className="text-center py-8 text-gray-500">
                                  <AlertCircle className="w-8 h-8 mx-auto mb-2" />
                                  <p>Không làm việc vào ngày này</p>
                                </div>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="text-center py-8 text-gray-500">
                            <CalendarIcon className="w-8 h-8 mx-auto mb-2" />
                            <p>Chọn ngày để xem lịch trình chi tiết</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Gallery Tab */}
              <TabsContent value="gallery">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {makeupData.gallery.map((image: string, index: number) => (
                    <div key={index} className="relative aspect-square group cursor-pointer">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Gallery ${index + 1}`}
                        fill
                        className="object-cover rounded-lg transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg" />
                    </div>
                  ))}
                </div>

              </TabsContent>

              {/* Reviews Tab */}
              <TabsContent value="reviews" className="space-y-4">
                {makeupData.reviews.map((review: {
                  id: string
                  customerName: string
                  rating: number
                  date: string
                  comment: string
                  avatar: string
                  service: string
                  verified: boolean
                }) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.customerName} />
                          <AvatarFallback>{review.customerName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold">{review.customerName}</h4>
                              {review.verified && (
                                <Badge variant="outline" className="text-xs">
                                  <Shield className="w-3 h-3 mr-1" />
                                  Đã xác minh
                                </Badge>
                              )}
                            </div>
                            <span className="text-sm text-gray-500">
                              {format(new Date(review.date), "dd/MM/yyyy")}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center gap-1">{renderStars(review.rating)}</div>
                            <Badge variant="secondary" className="text-xs">{review.service}</Badge>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Booking */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5" />
                  Đặt lịch nhanh
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg" asChild>
                  <Link href={`/booking?makeup=${makeupData.id}`}>
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    Đặt lịch ngay
                  </Link>
                </Button>
                <Button variant="outline" className="w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Tư vấn miễn phí
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Thông tin liên hệ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-pink-600" />
                  <span>{makeupData.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-pink-600" />
                  <span>{makeupData.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-pink-600" />
                  <span>{makeupData.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-pink-600" />
                  <a href={makeupData.website} className="text-pink-600 hover:underline">
                    Website
                  </a>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-3">Mạng xã hội</h4>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm">
                      <Instagram className="w-4 h-4 mr-1" />
                      Instagram
                    </Button>
                    <Button variant="outline" size="sm">
                      <Facebook className="w-4 h-4 mr-1" />
                      Facebook
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Thống kê</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Đánh giá trung bình</span>
                  <span className="font-semibold">{makeupData.rating}/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tổng đánh giá</span>
                  <span className="font-semibold">{makeupData.reviewCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dự án hoàn thành</span>
                  <span className="font-semibold">{makeupData.completedProjects}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Kinh nghiệm</span>
                  <span className="font-semibold">{makeupData.yearsExperience} năm</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
