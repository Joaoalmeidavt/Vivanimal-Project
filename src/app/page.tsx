import Image from 'next/image'
import Main from '@/components/Main'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className='h-full pb-24 bg-sky-100 relative'>

      <Main />
      <Footer />
    </main>
  )
}
