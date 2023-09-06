import Footer from "./sections/footer";
import Navbar from "./components/navbar";

export default function CV() {
    return (
        <main>
            <Navbar backgroundStyle="bg-slate-300"/>
            <div className="h-screen flex justify-center">
                <div className="self-center">
                    <h1 className="text-black text-6xl font-extrabold align-middle">CV & Experience</h1>
                    <p className="text-black">some stuff about me here</p>
                </div>
            </div>
            <Footer />
        </main>
    )
};