import Categories from "./main/Categories";
import PetLover from "./main/PetLover";


export default function Main() {
    return (
        <>
            <section className="container m-auto w-[90%] flex flex-col gap-8 justify-center items-center pt-8">

                <PetLover />
                <Categories/>




                {/* <section>categories</section>
                <section>card pet</section> */}


            </section>
        </>
    )
}

