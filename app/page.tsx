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
      name: "Studio Biển Xanh",
      type: "studio",
      rating: 4.9,
      reviews: 112,
      location: "Trần Hưng Đạo, Quy Nhơn",
      price: "1,800,000",
      image: "https://bizweb.dktcdn.net/100/175/849/articles/avatar1-97fa0031-4410-4777-9281-902e1d4beea5.jpg?v=1548075296717",
      verified: true,
      specialties: ["Chụp ảnh cưới", "Chụp ảnh biển"],
    },
    {
      id: "2",
      name: "Makeup Artist Hồng Nhung",
      type: "makeup",
      rating: 4.8,
      reviews: 95,
      location: "Nguyễn Thị Minh Khai, Quy Nhơn",
      price: "700,000",
      image: "data:image/jpeg;base64,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",
      verified: true,
      specialties: ["Makeup cô dâu", "Makeup dạ tiệc"],
    },
    {
      id: "3",
      name: "Áo Cưới Thanh Thảo",
      type: "rental",
      rating: 4.7,
      reviews: 143,
      location: "Lê Duẩn, Quy Nhơn",
      price: "1,200,000",
      image: "data:image/jpeg;base64,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",
      verified: true,
      specialties: ["Áo cưới cao cấp", "Vest cưới"],
    },
  ]

  const promotions = [
    {
      id: "1",
      title: "Giảm 30% cho khách hàng mới",
      description: "Áp dụng cho tất cả dịch vụ chụp ảnh cưới",
      discount: "30%",
      validUntil: "31/03/2024",
      image: "/uudai1.png?height=150&width=250",
    },
    {
      id: "2",
      title: "Combo makeup + thuê đồ",
      description: "Tiết kiệm đến 25% khi đặt combo",
      discount: "25%",
      validUntil: "15/04/2024",
      image: "/uudai2.png?height=150&width=250",
    },
  ]

  const stats = [
    { label: "Nhà cung cấp", value: "10+", icon: Users },
    { label: "Khách hàng hài lòng", value: "1000+", icon: Award },
    { label: "Dự án hoàn thành", value: "1000+", icon: Camera },
    { label: "Đánh giá 5 sao", value: "%", icon: Star },
  ]

  return (
    <div className="min-h-screen bg-transparent">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://cdn.tgdd.vn/Files/2021/06/15/1360356/top-10-dia-diem-du-lich-co-view-dep-va-hap-dan-tha-ho-check-in-tai-quy-nhon-202106151431049339.jpg')" }}>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {promotions.map((promo) => (
              <Card key={promo.id} className="overflow-hidden glass-card border-white/20">
                <div className="md:flex">
                  <div className="relative w-full h-40 bg-white rounded-lg overflow-hidden flex items-center justify-center">
  <Image
    src={promo.image || "/placeholder.svg"}
    alt={promo.title}
    fill
    className="object-contain"
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
                 <Link href="/" className="flex items-center space-x-2">
  <Image
    src="/logo.png"
    alt="BookingHub Logo"
    width={48}
    height={48}
    className="rounded-lg"
  />
  <span className="text-xl font-bold gradient-text">DepStudio.vn</span>
</Link>
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
        </div>
      </footer>
    </div>
  )
}
