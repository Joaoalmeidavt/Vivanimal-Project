import Image from 'next/image'
import Main from '@/components/Main'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <main className='h-full bg-sky-100 relative'>

      <Main />
      <Footer />
    </main>
  )
}
