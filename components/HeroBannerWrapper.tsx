"use client"

import dynamic from 'next/dynamic'

const HeroBanner = dynamic(() => import('./HeroBanner'), {
  ssr: false,
  loading: () => (
    <section className="relative h-[90vh] w-full bg-cover bg-center bg-[#F5F1EB] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-pulse">
          <div className="h-16 bg-gray-300 rounded mb-4 mx-auto w-3/4"></div>
          <div className="h-8 bg-gray-300 rounded mb-8 mx-auto w-1/2"></div>
          <div className="h-12 bg-gray-300 rounded mx-auto w-96"></div>
        </div>
      </div>
    </section>
  )
})

export default HeroBanner