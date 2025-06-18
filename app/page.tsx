"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Camera,
  Palette,
  Shirt,
  Star,
  MapPin,
  Users,
  Award,
  Search,
  TrendingUp,
  Gift,
  Calendar,
  Shield,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const featuredServices = [
    {
      id: "1",
      name: "Studio Ánh Dương",
      type: "studio",
      rating: 4.9,
      reviews: 127,
      location: "Quận 1, TP.HCM",
      price: "2,000,000",
      image: "/placeholder.svg?height=200&width=300",
      verified: true,
      specialties: ["Chụp ảnh cưới", "Gia đình"],
    },
    {
      id: "2",
      name: "Makeup Artist Linh",
      type: "makeup",
      rating: 4.8,
      reviews: 89,
      location: "Quận 3, TP.HCM",
      price: "800,000",
      image: "/placeholder.svg?height=200&width=300",
      verified: true,
      specialties: ["Makeup cưới", "Makeup dự tiệc"],
    },
    {
      id: "3",
      name: "Thuê Áo Cưới Hoàng Gia",
      type: "rental",
      rating: 4.7,
      reviews: 156,
      location: "Quận 7, TP.HCM",
      price: "1,500,000",
      image: "/placeholder.svg?height=200&width=300",
      verified: true,
      specialties: ["Áo cưới", "Vest nam"],
    },
  ]

  const promotions = [
    {
      id: "1",
      title: "Giảm 30% cho khách hàng mới",
      description: "Áp dụng cho tất cả dịch vụ chụp ảnh cưới",
      discount: "30%",
      validUntil: "31/03/2024",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: "2",
      title: "Combo makeup + thuê đồ",
      description: "Tiết kiệm đến 25% khi đặt combo",
      discount: "25%",
      validUntil: "15/04/2024",
      image: "/placeholder.svg?height=150&width=250",
    },
  ]

  const stats = [
    { label: "Nhà cung cấp", value: "500+", icon: Users },
    { label: "Khách hàng hài lòng", value: "10,000+", icon: Award },
    { label: "Dự án hoàn thành", value: "25,000+", icon: Camera },
    { label: "Đánh giá 5 sao", value: "95%", icon: Star },
  ]

  return (
    <div className="min-h-screen bg-transparent">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Kết nối bạn với những dịch vụ tốt nhất</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            Studio chụp ảnh, makeup artist và thuê trang phục chuyên nghiệp cho mọi sự kiện đặc biệt của bạn
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto glass-card border-white/20 rounded-lg p-2 flex items-center">
            <Input
              placeholder="Tìm kiếm dịch vụ, địa điểm..."
              className="border-0 focus-visible:ring-0 text-white placeholder:text-white/50 bg-transparent"
            />
            <Button className="ml-2 bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500 hover:opacity-90">
              <Search className="w-4 h-4 mr-2" />
              Tìm kiếm
            </Button>
          </div>

          {/* Quick Service Links */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link href="/studios">
                <Camera className="w-4 h-4 mr-2" />
                Studio
              </Link>
            </Button>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link href="/makeup">
                <Palette className="w-4 h-4 mr-2" />
                Makeup
              </Link>
            </Button>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link href="/rental">
                <Shirt className="w-4 h-4 mr-2" />
                Thuê đồ
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">Dịch vụ nổi bật</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Khám phá những nhà cung cấp dịch vụ được đánh giá cao nhất trên nền tảng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Card
                key={service.id}
                className="overflow-hidden hover:shadow-lg transition-shadow glass-card border-white/20"
              >
                <div className="relative">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  {service.verified && (
                    <Badge className="absolute top-2 left-2 bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500">
                      <Shield className="w-3 h-3 mr-1" />
                      Đã xác minh
                    </Badge>
                  )}
                  <Badge variant="secondary" className="absolute top-2 right-2 bg-white/20 text-white">
                    {service.type === "studio" ? "Studio" : service.type === "makeup" ? "Makeup" : "Thuê đồ"}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{service.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium text-white">{service.rating}</span>
                    </div>
                    <span className="text-sm text-white/70">({service.reviews} đánh giá)</span>
                  </div>
                  <div className="flex items-center text-sm text-white/70 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {service.location}
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {service.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs bg-white/10 text-white border-white/20">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-blue-400">{service.price}đ</div>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500 hover:opacity-90"
                      asChild
                    >
                      <Link href={`/${service.type}/${service.id}`}>Xem chi tiết</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Xem tất cả dịch vụ
            </Button>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold gradient-text mb-2">Ưu đãi hot</h2>
              <p className="text-white/70">Đừng bỏ lỡ những ưu đãi hấp dẫn</p>
            </div>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link href="/promotions">
                Xem tất cả
                <TrendingUp className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promotions.map((promo) => (
              <Card key={promo.id} className="overflow-hidden glass-card border-white/20">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src={promo.image || "/placeholder.svg"}
                      alt={promo.title}
                      width={250}
                      height={150}
                      className="w-full h-32 md:h-full object-cover"
                    />
                  </div>
                  <CardContent className="md:w-2/3 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-red-600">
                        <Gift className="w-3 h-3 mr-1" />-{promo.discount}
                      </Badge>
                      <span className="text-sm text-white/70">Đến {promo.validUntil}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{promo.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{promo.description}</p>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500 hover:opacity-90"
                    >
                      Sử dụng ngay
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">Cách thức hoạt động</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Đặt lịch dịch vụ chỉ với 3 bước đơn giản</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">1. Tìm kiếm</h3>
              <p className="text-white/70">Tìm kiếm và so sánh các dịch vụ phù hợp với nhu cầu của bạn</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">2. Đặt lịch</h3>
              <p className="text-white/70">Chọn thời gian phù hợp và xác nhận thông tin đặt lịch</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">3. Trải nghiệm</h3>
              <p className="text-white/70">Tận hưởng dịch vụ chất lượng cao và để lại đánh giá</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black/20 backdrop-blur-md">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Bạn là nhà cung cấp dịch vụ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            Tham gia nền tảng của chúng tôi để tiếp cận hàng nghìn khách hàng tiềm năng
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" size="lg">
              Đăng ký làm đối tác
            </Button>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" size="lg">
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Camera className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">BookingHub</span>
              </div>
              <p className="text-white/70">
                Nền tảng kết nối khách hàng với các dịch vụ chụp ảnh, makeup và thuê trang phục chuyên nghiệp.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Dịch vụ</h3>
              <ul className="space-y-2 text-white/70">
                <li>
                  <Link href="/studios" className="hover:text-white">
                    Studio chụp ảnh
                  </Link>
                </li>
                <li>
                  <Link href="/makeup" className="hover:text-white">
                    Makeup & Trang điểm
                  </Link>
                </li>
                <li>
                  <Link href="/rental" className="hover:text-white">
                    Thuê trang phục
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Hỗ trợ</h3>
              <ul className="space-y-2 text-white/70">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Trung tâm trợ giúp
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Liên hệ
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Điều khoản
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Bảo mật
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Kết nối</h3>
              <ul className="space-y-2 text-white/70">
                <li>Email: support@bookinghub.vn</li>
                <li>Hotline: 1900 1234</li>
                <li>Địa chỉ: 123 Nguyễn Huệ, Q1, TP.HCM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2024 BookingHub. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
