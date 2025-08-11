"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import HeroBanner from "@/components/HeroBanner"

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
import '@/styles/fonts.css'


export default function HomePage() {
  const featuredServices = [
    {
      id: "1",
      name: "Studio Biển Xanh",
      type: "studios",
      rating: 4.9,
      reviews: 127,
      location: "Quận 1, TP.HCM",
      price: "2,000,000",
      image: "/anh-duong-studio-918172.jpg?height=200&width=300",
      verified: true,
      specialties: ["Chụp ảnh cưới", "Chụp ảnh biển"],
    },
    {
      id: "2",
      name: "Makeup Artist Hồng Nhung",
      type: "makeup",
      rating: 4.8,
      reviews: 89,
      location: "Quận 3, TP.HCM",
      price: "800,000",
      image: "/bg4z.jpg?height=200&width=300",
      verified: true,
      specialties: ["Makeup cô dâu", "Makeup dạ tiệc"],
    },
    {
      id: "3",
      name: "Áo Cưới Thanh Thảo",
      type: "rental",
      rating: 4.7,
      reviews: 156,
      location: "Quận 7, TP.HCM",
      price: "1,500,000",
      image: "/ee9ac0b5e6bd00e359ac-600x759-1.jpg?height=200&width=300",
      verified: true,
      specialties: ["Áo cưới cao cấp", "Vest cưới"],
    },
  ]

  const promotions = [
    {
      id: "1",
      title: "Giảm 20% cho khách hàng mới",
      description: "Áp dụng cho tất cả dịch vụ chụp ảnh cưới",
      discount: "20%",
      validUntil: "31/03/2024",
      image: "/vay-cuoi-cong-chua-hoang-gia-1.png?height=150&width=250",
    },
    {
      id: "2",
      title: "Combo makeup + thuê đồ",
      description: "Tiết kiệm đến 25% khi đặt combo",
      discount: "25%",
      validUntil: "15/04/2024",
      image: "/bang-gia-cho-thue-vay-cuoi.jpg?height=150&width=250",
    },
  ]

  const stats = [
    { label: "Nhà cung cấp", value: "10+", icon: Users },
    { label: "Khách hàng hài lòng", value: "1000+", icon: Award },
    { label: "Dự án hoàn thành", value: "1000+", icon: Camera },
    { label: "Đánh giá 5 sao", value: "%", icon: Star },
  ]

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
        <Header />

        {/* Hero Section */}
        <HeroBanner />

        <div className="container mx-auto px-4 text-center"></div>
        {/* Stats Section */}
        <section className="py-16 bg-[#F5F1EB]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#C1B6A3] rounded-full flex items-center justify-center mx-auto mb-4 shadow">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[#6F5D4F] mb-2">{stat.value}</div>
                  <div className="text-[#6F5D4F]/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16 bg-[#EFE7DA]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#6F5D4F] mb-4">Dịch vụ nổi bật</h2>
              <p className="text-[#6F5D4F]/70 max-w-2xl mx-auto">
                Khám phá những nhà cung cấp dịch vụ được đánh giá cao nhất trên nền tảng
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredServices.map((service) => (
                <Card
                  key={service.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow bg-[#F8F5F0] border border-[#D8CEC2]"
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
                      <Badge className="absolute top-2 left-2 bg-[#B3907A] text-white">
                        <Shield className="w-3 h-3 mr-1" />
                        Đã xác minh
                      </Badge>
                    )}
                    <Badge variant="secondary" className="absolute top-2 right-2 bg-[#C1B6A3] text-white">
                      {service.type === "studio" ? "Studio" : service.type === "makeup" ? "Makeup" : "Thuê đồ"}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[#6F5D4F]">{service.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium text-[#6F5D4F]">{service.rating}</span>
                      </div>
                      <span className="text-sm text-[#6F5D4F]/60">({service.reviews} đánh giá)</span>
                    </div>
                    <div className="flex items-center text-sm text-[#6F5D4F]/70 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {service.location}
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {service.specialties.map((specialty, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs bg-[#EFE7DA] text-[#6F5D4F] border-[#C1B6A3]"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-[#544338]">{service.price}đ</div>
                      <Button
                        size="sm"
                        className="bg-[#6F5D4F] !text-white hover:bg-[#5d4c40] hover:!text-white"
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
              <Button
                variant="outline"
                size="lg"
                className="bg-[#F8F5F0] border border-[#C1B6A3] text-[#6F5D4F] hover:bg-[#EDE6DD]"
              >
                Xem tất cả dịch vụ
              </Button>
            </div>
          </div>
        </section>

        {/* Promotions Section */}
        <section className="py-16 bg-[#EFE7DA]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-[#6F5D4F] mb-2">Ưu đãi hot</h2>
                <p className="text-[#6F5D4F]/70">Đừng bỏ lỡ những ưu đãi hấp dẫn</p>
              </div>
              <Button
                variant="outline"
                className="bg-[#F8F5F0] border border-[#C1B6A3] text-[#6F5D4F] hover:bg-[#EDE6DD]"
                asChild
              >
                <Link href="/promotions">
                  Xem tất cả
                  <TrendingUp className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {promotions.map((promo) => (
                <Card key={promo.id} className="overflow-hidden bg-[#F8F5F0] border border-[#D8CEC2]">
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
                        <Badge className="bg-[#B3907A] text-white">
                          <Gift className="w-3 h-3 mr-1" />-{promo.discount}
                        </Badge>
                        <span className="text-sm text-[#6F5D4F]/60">Đến {promo.validUntil}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-[#6F5D4F]">{promo.title}</h3>
                      <p className="text-[#6F5D4F]/70 text-sm mb-4">{promo.description}</p>
                      <Button
                        size="sm"
                        className="bg-[#6F5D4F] text-white hover:bg-[#5d4c40]"
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
        <section className="py-16 bg-[#F5F1EB]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#6F5D4F] mb-4">Cách thức hoạt động</h2>
              <p className="text-[#6F5D4F]/70 max-w-2xl mx-auto">Đặt lịch dịch vụ chỉ với 3 bước đơn giản</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#C1B6A3] flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#6F5D4F]">1. Tìm kiếm</h3>
                <p className="text-[#6F5D4F]/70">Tìm kiếm và so sánh các dịch vụ phù hợp với nhu cầu của bạn</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#B3907A] flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#6F5D4F]">2. Đặt lịch</h3>
                <p className="text-[#6F5D4F]/70">Chọn thời gian phù hợp và xác nhận thông tin đặt lịch</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#6F5D4F] flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#6F5D4F]">3. Trải nghiệm</h3>
                <p className="text-[#6F5D4F]/70">Tận hưởng dịch vụ chất lượng cao và để lại đánh giá</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#EFE7DA]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#6F5D4F]">Bạn là nhà cung cấp dịch vụ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-[#6F5D4F]/80">
              Tham gia nền tảng của chúng tôi để tiếp cận hàng nghìn khách hàng tiềm năng
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="bg-[#C1B6A3] border-none text-white hover:brightness-110"
                size="lg"
              >
                Đăng ký làm đối tác
              </Button>
              <Button
                variant="outline"
                className="bg-[#B3907A] border-none text-white hover:brightness-110"
                size="lg"
              >
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#F5F1EB] text-[#6F5D4F] py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo + Giới thiệu */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-[#B3907A] rounded-lg flex items-center justify-center">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
              <span
              className="text-[40px] md:text-[30px] font-bold gradient-text leading-none group-hover:opacity-90 transition-opacity"
              style={{ fontFamily: "Simplesnails" }}
            >
              DepStudio
            </span>                </div>
                <p className="text-sm text-[#6F5D4F]/80">
                  Nền tảng kết nối khách hàng với các dịch vụ chụp ảnh, makeup và thuê trang phục chuyên nghiệp.
                </p>
              </div>

              {/* Dịch vụ */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Dịch vụ</h3>
                <ul className="space-y-2 text-[#6F5D4F]/80 text-sm">
                  <li>
                    <Link href="/studios" className="hover:text-[#6F5D4F]">Studio chụp ảnh</Link>
                  </li>
                  <li>
                    <Link href="/makeup" className="hover:text-[#6F5D4F]">Makeup & Trang điểm</Link>
                  </li>
                  <li>
                    <Link href="/rental" className="hover:text-[#6F5D4F]">Thuê trang phục</Link>
                  </li>
                </ul>
              </div>

              {/* Hỗ trợ */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Hỗ trợ</h3>
                <ul className="space-y-2 text-[#6F5D4F]/80 text-sm">
                  <li>
                    <Link href="/help" className="hover:text-[#6F5D4F]">Trung tâm trợ giúp</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-[#6F5D4F]">Liên hệ</Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-[#6F5D4F]">Điều khoản</Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-[#6F5D4F]">Bảo mật</Link>
                  </li>
                </ul>
              </div>

              {/* Liên hệ */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Kết nối</h3>
                <ul className="space-y-2 text-[#6F5D4F]/80 text-sm">
                  <li>Email: support@DepStudio.vn</li>
                  <li>Hotline: 1900 1234</li>
                  <li>Địa chỉ: Dai hoc FPT QUY NHON</li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-[#C1B6A3] mt-8 pt-6 text-center text-sm text-[#6F5D4F]/70">
              <p>&copy; 2025 DepStudio. Tất cả quyền được bảo lưu.</p>
            </div>
          </div>
        </footer>
    </div>
  )
}