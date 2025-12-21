import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";

/**
 * Render the home page composed of the Header and Hero components stacked vertically and centered.
 *
 * @returns The JSX element for the home page: a div with a vertical, centered layout containing <Header /> followed by <Hero />.
 */

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            <Header />
            <Hero />
        </div>
    );
}