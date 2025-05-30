import { Head, Link } from "@inertiajs/react";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import { MdFlight } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import CircularGallery from "../../../Reactbits/CircularGallery/CircularGallery";
import BlurText from "../../../Reactbits/BlurText/BlurText";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    // Tambahkan di sini
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight - 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleAnimationComplete = () => {
        console.log("Animation completed!");
    };

    return (
        <>
            <Head title="Welcome" />
            <header
                className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center mx-5 my-3 rounded-xl py-1 px-8 transition-colors duration-500 ${
                    scrolled ? "bg-blue-400 shadow-lg" : "bg-transparent"
                }`}
            >
                <div className="text-2xl font-bold text-white">Airland</div>

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
                                className="relative px-5 py-2 my-3 bg-white text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_2px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group"
                            >
                                <span>Login</span>
                            </Link>
                            <Link
                                href={route("register")}
                                className="relative px-5 py-2 my-3 bg-black text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_2px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group"
                            >
                                <span>Register</span>
                            </Link>
                        </>
                    )}
                </nav>
            </header>
            <div className="pt-32 -mt-[130px] flex flex-col items-center justify-center min-h-screen">
                <div className="relative w-full h-screen overflow-hidden">
                    <img
                        src="../media/landing_page/sky.jpg"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover z-0"
                    />

                    <div className="absolute inset-0 z-10 bg-[linear-gradient(to_left,_#0b1c4ee0_0%,_#0b1c4e99_40%,_transparent_80%)]" />

                    <img
                        src="../media/landing_page/aircraft.png"
                        alt=""
                        className="absolute top-1/4 left-1/3 w-[1000px] h-auto animate-slideInFromLeft z-20"
                    />

                    <div className="absolute top-1/3 right-20 text-right text-white max-w-md z-30">
                        <h1 className="text-6xl font-bold leading-tight drop-shadow-lg opacity-0 animate-fadeInUp">
                            Find the best
                            <br />
                            plane tickets
                        </h1>
                        <p className="mt-4 mb-7 text-lg drop-shadow opacity-0 animate-fadeInUpDelay">
                            Compare prices from various airlines and book
                            tickets easily and quickly.
                        </p>
                        <Link
                            href={route("login")}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white transition-all opacity-0 animate-fadeInUpDelay2"
                        >
                            Search Tickets Now
                        </Link>
                    </div>
                </div>
            </div>

            {/* card */}
            <h1 className="text-center font-medium text-lg mt-14">
                Featured features
            </h1>
            <div
                className="flex flex-wrap justify-center items-start gap-4 mt-12 mx-36"
                data-aos="fade-up"
            >
                <div class="card m-auto text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 rounded-lg overflow-hidden relative">
                    <div class="px-8 py-10">
                        <div class="w-10 group-hover:-translate-y-1 transition-all">
                            <RiCustomerService2Line className="w-10 h-10" />
                        </div>
                        <div class="uppercase font-bold text-xl mt-2">
                            Fast & Responsive Service
                        </div>
                        <div class="text-gray-400 mt-8">
                            <p>
                                We prioritize user convenience with customer
                                service that is ready to help you anytime. The
                                ordering process is fast, easy, and hassle-free.
                            </p>
                        </div>
                    </div>

                    <div class="h-2 w-full bg-gradient-to-l via-blue-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
                    <div class="h-0.5 group-hover:w-full bg-gradient-to-l  via-blue-950 group-hover:via-blue-500 w-[70%] m-auto rounded transition-all"></div>
                </div>

                <div class="card m-auto text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 rounded-lg overflow-hidden relative">
                    <div class="px-8 py-10">
                        <div class="w-10 group-hover:-translate-y-1 transition-all">
                            <MdPayment className="w-10 h-10" />
                        </div>
                        <div class="uppercase font-bold text-xl mt-2">
                            Safe & Trusted Transactions
                        </div>
                        <div class="text-gray-400 mt-8">
                            <p>
                                Supported by a modern security system, all your
                                transactions are protected and personal data is
                                guarded with high encryption standards.
                            </p>
                        </div>
                    </div>

                    <div class="h-2 w-full bg-gradient-to-l via-blue-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
                    <div class="h-0.5 group-hover:w-full bg-gradient-to-l  via-blue-950 group-hover:via-blue-500 w-[70%] m-auto rounded transition-all"></div>
                </div>

                <div class="card m-auto text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 rounded-lg overflow-hidden relative">
                    <div class="px-8 py-10">
                        <div class="w-10 group-hover:-translate-y-1 transition-all">
                            <MdFlight className="w-10 h-10" />
                        </div>
                        <div class="uppercase font-bold text-xl mt-2">
                            Complete & Flexible Flight Options
                        </div>
                        <div class="text-gray-400 mt-8">
                            <p>
                                From domestic to international flights, we
                                provide a wide selection of airlines and
                                schedules so you can fly as planned.
                            </p>
                        </div>
                    </div>

                    <div class="h-2 w-full bg-gradient-to-l via-blue-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
                    <div class="h-0.5 group-hover:w-full bg-gradient-to-l  via-blue-950 group-hover:via-blue-500 w-[70%] m-auto rounded transition-all"></div>
                </div>

                <div class="card m-auto text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 rounded-lg overflow-hidden relative">
                    <div class="px-8 py-10">
                        <div class="w-10 group-hover:-translate-y-1 transition-all">
                            <IoMdPricetags className="w-10 h-10" />
                        </div>
                        <div class="uppercase font-bold text-xl mt-2">
                            Competitive Prices & Attractive Promos
                        </div>
                        <div class="text-gray-400 mt-8">
                            <p>
                                Enjoy competitive ticket prices with various
                                special offers and promotions every week. Fly
                                economically without compromising on quality!
                            </p>
                        </div>
                    </div>

                    <div class="h-2 w-full bg-gradient-to-l via-blue-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
                    <div class="h-0.5 group-hover:w-full bg-gradient-to-l  via-blue-950 group-hover:via-blue-500 w-[70%] m-auto rounded transition-all"></div>
                </div>
            </div>
            <div>
                <BlurText
                    text="Find your destination"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-6xl font-bold flex items-center justify-center mt-[300px]"
                />
                <p className="text-center text-lg mt-8 mb-10 px-4 max-w-[1100px] mx-auto"
                data-aos="fade-up">
                    Start your journey today to places you’ve only dreamed about. We’re here to help you explore the world with ease, comfort, and the way you’ve always dreamed. From serene white sand beaches, majestic mountains, to cities steeped in history and culture — every destination is the beginning of a new story. Don’t hesitate, small steps today can lead to big experiences tomorrow. It’s time to pack your bags and embrace adventure. Your journey begins here.
                </p>
                <div style={{ height: "600px", position: "relative" }}>
                    <CircularGallery
                        bend={3}
                        textColor="black"
                        borderRadius={0.05}
                    />
                </div>
            </div>

            <div>
                <p className="mt-[1000px]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officiis fugit eveniet animi itaque possimus hic reiciendis
                    dignissimos. Enim accusantium itaque voluptate sequi
                    voluptatibus, nulla pariatur illum alias, nobis, fugiat
                    debitis sint quaerat sunt labore! Illum vero natus
                    laudantium distinctio ipsa, est hic. Officia tenetur
                    accusamus sed quis explicabo quidem quam ex sunt
                    perspiciatis dolorum, suscipit exercitationem magnam
                    inventore omnis nam totam laborum ea? Temporibus itaque
                    exercitationem ipsa omnis, dolorum, expedita earum fugiat
                    suscipit, sit magnam laborum veritatis animi quisquam. Unde
                    perspiciatis vero velit nihil, illum suscipit excepturi id
                    obcaecati doloremque sed vitae quis temporibus hic ullam
                    quia aut, repellat fugiat vel, quibusdam praesentium impedit
                    quasi consequuntur! Rerum, tempora hic facilis eligendi ab
                    corrupti. Earum laboriosam, blanditiis non, quam magnam
                    praesentium dignissimos harum molestias atque consequuntur,
                    itaque porro minus. Natus cumque culpa consequuntur earum,
                    sequi facere dicta laudantium fuga omnis magnam quos, unde
                    dolor quae, possimus deserunt aliquid! Alias saepe sunt
                    provident porro dolore eveniet vitae atque. Iusto voluptatum
                    ab ratione, magnam, corrupti ipsa expedita, aliquid commodi
                    numquam obcaecati aliquam. Doloremque vitae, dolorem ullam
                    quam ea perspiciatis! Consequuntur voluptates inventore ex
                    eaque quas, eos alias culpa ullam dicta, blanditiis fugiat
                    neque nobis, voluptatem modi vero? Sed expedita velit
                    inventore veniam blanditiis?
                </p>
            </div>
        </>
    );
}
