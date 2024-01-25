import Image from 'next/image'
import Header from "@/app/components/Header"
import Hero from "@/app/components/Hero"
export default function Home() {
  return (
    <div className='h-screen bg-gradient-to-l  from-purple-900   to-purple-800 via-blue-900 ' >
      <Header />
      <Hero/>
        </div>
  )
}
