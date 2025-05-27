import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <header className="flex justify-between items-center py-6 px-8 bg-white">
                {/* Kiri: Logo atau Nama */}
                <div className="text-2xl font-bold text-black">Airland</div>

                {/* Kanan: Navigasi */}
                <nav className="flex space-x-4">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="rounded-md px-4 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="w-[105px] text-black h-[40px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:transition-all before:duration-500 before:ease-in-out before:z-[-1]"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route("register")}
                                class="w-[105px] text-white bg-black hover:bg-white h-[40px] my-3 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#ffffff] before:to-[rgb(255,255,255)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 hover:text-black"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </nav>
            </header>
            <div className="flex flex-col items-center justify-center min-h-screen -mt-12">
                <div className="relative w-[1800px] h-[900px] mx-auto rounded-3xl overflow-hidden">
                    <img
                        src="../media/landing_page/sky.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-l from-blue-950 to-transparent" />

                    <img
                        src="../media/landing_page/aircraft.png"
                        alt=""
                        className="absolute top-1/4 left-1/3 w-[1000px] h-auto animate-slideInFromLeft"
                    />

                    <div className="absolute top-1/3 right-20 text-right text-white max-w-md">
                        <h1 className="text-6xl font-bold leading-tight drop-shadow-lg opacity-0 animate-fadeInUp">
                            Temukan Tiket
                            <br />
                            Pesawat Terbaik
                        </h1>
                        <p className="mt-4 mb-7 text-lg drop-shadow opacity-0 animate-fadeInUpDelay">
                            Bandingkan harga dari berbagai maskapai dan pesan
                            tiket dengan mudah dan cepat.
                        </p>
                        <Link
                            href={route("login")}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white transition-all opacity-0 animate-fadeInUpDelay2"
                        >
                            Cari Tiket Sekarang
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                <p className="mt-[400px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus iure ut quo magni error eos sapiente voluptate
                    beatae illum alias aliquid, tempore reprehenderit quisquam
                    explicabo quibusdam dolor esse aperiam commodi voluptatem
                    sint corporis voluptas, consequatur nam. Quasi, inventore
                    nobis atque harum ipsam facere provident sapiente iure,
                    voluptatum amet optio hic repellat, aperiam molestias modi
                    deleniti qui sed adipisci quisquam quod! Ipsum porro illum
                    rerum maiores, adipisci aliquam tempora inventore itaque
                    asperiores dolorem eius cupiditate ratione? Omnis optio
                    placeat iste laborum vitae distinctio perferendis earum
                    dolor eligendi vel? Voluptatem officia suscipit quaerat
                    expedita repudiandae ullam harum! Maiores placeat laboriosam
                    sequi recusandae.
                </p>
            </div>
        </>
    );
}
