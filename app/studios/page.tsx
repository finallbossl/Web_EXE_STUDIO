"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, MapPin, Camera, Search, Filter, Grid3X3, List, Heart, CalendarIcon, Shield, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function StudiosPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 10000000])
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([])
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("rating")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)

  // Mock data
  const studios = [
    {
      id: "1",
      name: "Studio Ánh Dương",
      rating: 4.9,
      reviewCount: 127,
      location: "Quận 1, TP.HCM",
      district: "quan-1",
      priceFrom: 2000000,
      image: "/studio1.png?height=200&width=300",
      verified: true,
      premium: true,
      services: ["Chụp ảnh cưới", "Chụp ảnh gia đình", "Chụp ảnh doanh nghiệp"],
      specialties: ["Wedding", "Portrait", "Event"],
      completedProjects: 850,
      responseTime: "Trong 2 giờ",
      availability: "available",
      description: "Studio chuyên nghiệp với đội ngũ nhiếp ảnh gia giàu kinh nghiệm",
    },
    {
      id: "2",
      name: "Studio Minh Châu",
      rating: 4.7,
      reviewCount: 89,
      location: "Quận 3, TP.HCM",
      district: "quan-3",
      priceFrom: 1500000,
      image: "/studio2.png?height=200&width=300",
      verified: true,
      premium: false,
      services: ["Chụp ảnh cưới", "Chụp ảnh thời trang"],
      specialties: ["Wedding", "Fashion"],
      completedProjects: 420,
      responseTime: "Trong 4 giờ",
      availability: "busy",
      description: "Chuyên chụp ảnh cưới với phong cách hiện đại",
    },
    {
      id: "3",
      name: "Studio Hoàng Gia",
      rating: 4.8,
      reviewCount: 156,
      location: "Quận 7, TP.HCM",
      district: "quan-7",
      priceFrom: 3000000,
      image: "/studio3.png?height=200&width=300",
      verified: true,
      premium: true,
      services: ["Chụp ảnh cưới", "Chụp ảnh gia đình", "Chụp ảnh sản phẩm"],
      specialties: ["Wedding", "Family", "Product"],
      completedProjects: 1200,
      responseTime: "Trong 1 giờ",
      availability: "available",
      description: "Studio cao cấp với trang thiết bị hiện đại nhất",
    },
  ]

  const districts = [
    { id: "quan-1", name: "Nguyễn Thái Học , TP Quy Nhơn" },
    { id: "quan-3", name: "Nguyễn Thái Học , TP Quy Nhơn" },
    { id: "quan-7", name: "Nguyễn Thái Học , TP Quy Nhơn" },
    { id: "quan-10", name: "Nguyễn Thái Học , TP Quy Nhơn" },
    { id: "binh-thanh", name: "Nguyễn Thái Học , TP Quy Nhơn" },
    { id: "phu-nhuan", name: "Nguyễn Thái Học , TP Quy Nhơn" },
  ]

  const services = [
    "Chụp ảnh cưới",
    "Chụp ảnh gia đình",
    "Chụp ảnh doanh nghiệp",
    "Chụp ảnh thời trang",
    "Chụp ảnh sản phẩm",
    "Chụp ảnh sự kiện",
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "available":
        return "bg-green-100 text-green-800"
      case "busy":
        return "bg-yellow-100 text-yellow-800"
      case "unavailable":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case "available":
        return "Còn trống"
      case "busy":
        return "Bận"
      case "unavailable":
        return "Không khả dụng"
      default:
        return "Không rõ"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Studio Chụp Ảnh</h1>
          <p className="text-xl mb-6">Tìm kiếm studio chụp ảnh chuyên nghiệp cho mọi nhu cầu</p>

          {/* Search Bar */}
          <div className="max-w-2xl bg-white rounded-lg p-2 flex items-center">
            <Search className="w-5 h-5 text-gray-400 ml-3" />
            <Input
              placeholder="Tìm kiếm studio, địa điểm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-0 focus-visible:ring-0 text-gray-900"
            />
            <Button className="ml-2">Tìm kiếm</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? "block" : "hidden lg:block"}`}>
            <Card className="sticky top-4">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Bộ lọc</h3>
                  <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)} className="lg:hidden">
                    ✕
                  </Button>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-medium mb-3">Khoảng giá</h4>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={10000000}
                    step={100000}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{priceRange[0].toLocaleString()}đ</span>
                    <span>{priceRange[1].toLocaleString()}đ</span>
                  </div>
                </div>

                {/* Districts */}
                <div>
                  <h4 className="font-medium mb-3">Quận/Huyện</h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {districts.map((district) => (
                      <div key={district.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={district.id}
                          checked={selectedDistricts.includes(district.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedDistricts([...selectedDistricts, district.id])
                            } else {
                              setSelectedDistricts(selectedDistricts.filter((d) => d !== district.id))
                            }
                          }}
                        />
                        <label htmlFor={district.id} className="text-sm">
                          {district.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="font-medium mb-3">Dịch vụ</h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {services.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={selectedServices.includes(service)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedServices([...selectedServices, service])
                            } else {
                              setSelectedServices(selectedServices.filter((s) => s !== service))
                            }
                          }}
                        />
                        <label htmlFor={service} className="text-sm">
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Filters */}
                <div>
                  <h4 className="font-medium mb-3">Bộ lọc nhanh</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="verified" />
                      <label htmlFor="verified" className="text-sm">
                        Đã xác minh
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="premium" />
                      <label htmlFor="premium" className="text-sm">
                        Premium
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="available" />
                      <label htmlFor="available" className="text-sm">
                        Còn trống hôm nay
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" onClick={() => setShowFilters(true)} className="lg:hidden">
                  <Filter className="w-4 h-4 mr-2" />
                  Bộ lọc
                </Button>
                <span className="text-gray-600">Tìm thấy {studios.length} studio</span>
              </div>

              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sắp xếp theo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Đánh giá cao nhất</SelectItem>
                    <SelectItem value="price-low">Giá thấp đến cao</SelectItem>
                    <SelectItem value="price-high">Giá cao đến thấp</SelectItem>
                    <SelectItem value="newest">Mới nhất</SelectItem>
                    <SelectItem value="popular">Phổ biến nhất</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Studios Grid/List */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
              {studios.map((studio) => (
                <Card key={studio.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={viewMode === "list" ? "md:flex" : ""}>
                    <div className={`relative ${viewMode === "list" ? "md:w-80" : ""}`}>
                      <Image
                        src={studio.image || "/placeholder.svg"}
                        alt={studio.name}
                        width={300}
                        height={200}
                        className={`w-full object-cover ${viewMode === "list" ? "h-48 md:h-full" : "h-48"}`}
                      />
                      <div className="absolute top-2 left-2 flex gap-2">
                        {studio.verified && (
                          <Badge className="bg-blue-600">
                            <Shield className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                        {studio.premium && (
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500">Premium</Badge>
                        )}
                      </div>
                      <div className="absolute top-2 right-2">
                        <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="absolute bottom-2 right-2">
                        <Badge className={getAvailabilityColor(studio.availability)}>
                          {getAvailabilityText(studio.availability)}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{studio.name}</h3>
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            {renderStars(studio.rating)}
                            <span className="ml-1 text-sm font-medium">{studio.rating}</span>
                          </div>
                          <span className="text-xs text-gray-500">({studio.reviewCount} đánh giá)</span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{studio.description}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          {studio.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Camera className="w-4 h-4" />
                          {studio.completedProjects} dự án hoàn thành
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Users className="w-4 h-4" />
                          Phản hồi {studio.responseTime}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {studio.services.slice(0, 3).map((service, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                        {studio.services.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{studio.services.length - 3} khác
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm text-gray-500">Từ </span>
                          <span className="text-lg font-bold text-blue-600">{studio.priceFrom.toLocaleString()}đ</span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/studios/${studio.id}`}>Chi tiết</Link>
                          </Button>
                          <Button size="sm" asChild>
                            <Link href={`/booking?studio=${studio.id}`}>
                              <CalendarIcon className="w-4 h-4 mr-1" />
                              Đặt lịch
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                <Button variant="outline" disabled>
                  Trước
                </Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Sau</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
