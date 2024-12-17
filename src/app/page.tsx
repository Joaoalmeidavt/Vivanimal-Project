import Image from 'next/image'


import NavbarUI from '@/components/NavbarUI'
import Main from '@/components/Main'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className='h-full pb-24 bg-sky-100 relative'>
      <NavbarUI />
      <Main />
      <Footer />
    </main>
  )
}
