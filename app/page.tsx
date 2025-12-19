import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";

// ----------------------------------------------------------------------

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            <Header />
            <Hero />
        </div>
    );
}
