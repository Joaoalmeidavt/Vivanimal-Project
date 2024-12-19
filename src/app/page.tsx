
import { NextUIProvider } from "@nextui-org/react";
import Image from 'next/image';
import Main from '@/components/Main';
import Footer from '@/components/footer/Footer';


export default function Home() {
  return (

    <main className='h-full bg-gray-50 relative'>
      <Main />
      <Footer />
    </main>

  );
}
