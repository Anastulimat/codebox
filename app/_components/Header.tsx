import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

// ----------------------------------------------------------------------

const Header = () => {
    return (
        <div className="p-4 max-w-7xl flex justify-between items-center w-full">
            <div className="flex items-center">
                <Image src="/logo.png" alt="Logo" width={40} height={40}/>
                <h2 className="font-bold text-3xl font-game">CodeBox</h2>
            </div>

            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <Button className="font-game text-2xl" variant="pixel">
                Signup
            </Button>
        </div>
    );
};

export default Header;
