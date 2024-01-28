import Header from "@/app/components/Header"
import Hero from "@/app/pages/Hero"
export default function Home() {
  return (
    <div className='h-screen' >
      <div className="bg-gradient-to-l  from-purple-900   to-purple-800 via-blue-900">
      <Header />
      <Hero/>
      </div>
    </div>
  )
}
