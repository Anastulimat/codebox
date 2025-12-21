import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";

const Hero = () => {
    return (
        <div className="w-full relative h-[90vh] md:h-screen overflow-hidden">
                <Image
                    src={'/hero.gif'}
                    alt={'Hero'}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover absolute inset-0"
                    priority
                />
                {/* Overlay pour la lisibilité sur mobile */}
                <div className="absolute inset-0 bg-black/20 md:bg-transparent" />

                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                    <h2 className="font-bold text-4xl md:text-7xl font-game leading-tight">
                        Start your
                    </h2>
                    <h2
                        className="font-bold text-5xl md:text-8xl font-game text-yellow-400 mt-2"
                        style={{
                            textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000'
                        }}
                    >
                        Coding adventure
                    </h2>

                    <h2 className="mt-6 font-game text-xl md:text-3xl max-w-2xl">
                        Beginner friendly coding courses and projects
                    </h2>

                    <Button className="font-game text-2xl md:text-3xl p-6 md:p-8 mt-8" variant="pixel">
                        Get Started
                    </Button>
                </div>
            </div>
        );
    };

    export default Hero;
