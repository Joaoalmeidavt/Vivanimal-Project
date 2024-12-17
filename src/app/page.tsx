import Image from 'next/image'


import NavbarUI from '@/components/NavbarUI'
import Main from '@/components/Main'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className='h-screen bg-sky-100'>
      <NavbarUI />
      <Main />
      <Footer />
    </main>
  )
}
