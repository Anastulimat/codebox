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
import Link from "next/link";
import { Menu } from "lucide-react"; // Import de l'icône menu
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

// ----------------------------------------------------------------------


const courses = [
    {
        id: 1,
        name: 'HTML',
        desc: 'Learn the fundamentals of HTML and build the structure of modern web pages.',
        path: '/course/1/detail'
    },
    {
        id: 2,
        name: 'CSS',
        desc: 'Master CSS to style and design responsive, visually appealing web layouts.',
        path: '/course/2/detail'
    },
    {
        id: 3,
        name: 'React',
        desc: 'Build dynamic and interactive web applications using the React JavaScript library.',
        path: '/course/3/detail'
    },
    {
        id: 4,
        name: 'React Advanced',
        desc: 'Deep dive into advanced React concepts including hooks, state management, performance optimization, and architectural patterns.',
        path: '/course/4/detail'
    },
    {
        id: 5,
        name: 'Python',
        desc: 'Learn Python programming from basics to intermediate level, covering logic building, functions, and real-world applications.',
        path: '/course/5/detail'
    },
    {
        id: 6,
        name: 'Python Advanced',
        desc: 'Master advanced Python concepts such as OOP, modules, APIs, data processing, and automation.',
        path: '/course/6/detail'
    },
    {
        id: 7,
        name: 'Generative AI',
        desc: 'Explore prompt engineering, LLMs, embeddings, image generation, and build GenAI-powered applications.',
        path: '/course/7/detail'
    },
    {
        id: 8,
        name: 'Machine Learning',
        desc: 'Understand ML concepts, algorithms, data preprocessing, model training, evaluation, and deployment.',
        path: '/course/8/detail'
    },
    {
        id: 9,
        name: 'JavaScript',
        desc: 'Learn core JavaScript concepts, asynchronous programming, DOM manipulation, and modern ES6+ features.',
        path: '/course/9/detail'
    }
];

const Header = () => {
    return (
        <div className="p-4 max-w-7xl mx-auto flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="Logo" width={40} height={40}/>
                <h2 className="font-bold text-3xl font-game">CodeBox</h2>
            </div>

            {/* Navigation Desktop */}
            <div className="hidden md:block">
                <NavigationMenu>
                    <NavigationMenuList className="gap-8">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid md:grid-cols-2 gap-2 p-4 md:w-125 lg:w-150">
                                    {courses.map((course, index) => (
                                        <Link key={index} href={course.path} className="p-2 hover:bg-accent rounded-xl cursor-pointer block">
                                            <h2 className="font-medium">{course.name}</h2>
                                            <p className="text-xs text-muted-foreground">{course.desc}</p>
                                        </Link>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                                <Link href="/projects">Projects</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                                <Link href="/pricing">Pricing</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                                <Link href="/contact">Contact Us</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className="flex items-center gap-4">
                <Button className="font-game text-xl hidden sm:flex" variant="pixel">
                    Signup
                </Button>

                {/* Menu Mobile avec Sheet de Shadcn */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-75 sm:w-100">
                            <SheetHeader>
                                <SheetTitle className="text-left font-game text-2xl">CodeBox</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-4 mt-8">
                                <Link href="/courses" className="text-lg font-medium hover:text-primary">Courses</Link>
                                <Link href="/projects" className="text-lg font-medium hover:text-primary">Projects</Link>
                                <Link href="/pricing" className="text-lg font-medium hover:text-primary">Pricing</Link>
                                <Link href="/contact" className="text-lg font-medium hover:text-primary">Contact Us</Link>
                                <hr className="my-2" />
                                <Button className="font-game text-xl w-full" variant="pixel">
                                    Signup
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
};

export default Header;
