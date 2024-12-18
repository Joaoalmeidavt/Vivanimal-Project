
import Footer from '@/components/footer/Footer'
import Mbway from '@/components/volunteers/MbWay'

export default function Page() {
    return (
        <main className='h-full pb-24 bg-[#80eff7] relative'>
            <section className="container m-auto w-[90%] flex flex-col gap-8 justify-center items-center pt-8 pb-24">
                <Mbway />
            </section>
                <Footer />
        </main>
    )
}
