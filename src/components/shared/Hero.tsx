"use client";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../ui/hover-card";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";

interface NavigationInterface {
    fullHeight: boolean;
}

export default function Hero({ fullHeight }: NavigationInterface) {
    return (
        // <header
        //     className={`flex justify-start items-start ${
        //         fullHeight ? "h-screen" : "h-[100%]"
        //     } flex-col  mt-[50px] `}
        // >
        //     <h1 className="text-[33vw] leading-[28vw]">tobias</h1>

        //     <nav className="w-[100%]">
        //         <ul>
        //             <li className="flex flex-row justify-between w-[100%] text-xl">
        //                 <h2>DEVELOPER</h2>
        //                 <h2>DESIGNER</h2>
        //                 <h2>2003</h2>
        //             </li>
        //         </ul>
        //     </nav>
        // </header>
        <section
            className={`flex justify-start items-start ${
                fullHeight ? "h-screen" : "h-[100%]"
            } flex-col  mt-[50px] min-h-[600px] xs:min-h-[800px]`}
        >
            <h1 className="text-[15.5vw] md:text-[12vw] leading-[15.5vw] md:leading-[12vw]">
                TOBIAS <br />
                RASMUSSEN
            </h1>

            <div className="w-[100%] md:w-[68vw]">
                <ul className="flex flex-row justify-between items-center md:items-start gap-8 mt-2 w-[100%] text-xl">
                    <li className="hidden md:block">
                        <HoverCard>
                            <HoverCardTrigger>
                                <Image
                                    src="/selfie2.webp"
                                    alt="me"
                                    height={200}
                                    width={200}
                                />
                            </HoverCardTrigger>
                            <HoverCardContent>
                                An AI generated self portrait until I get myself
                                a real one.
                            </HoverCardContent>
                        </HoverCard>
                    </li>
                    <li className="block md:hidden">
                        <Link href="/contact">
                            <Button className="rounded-none">
                                Get in touch
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <p className="w-[70%] md:w-auto hidden md:block text-pretty">
                            CRAFTING INTUITIVE EXPERIENCES,{" "}
                            <br className="hidden md:block" /> ELEVATING DIGITAL
                            INNOVATION.
                            <br className="hidden md:block" /> EXPLORE THE
                            FUSION OF ART AND
                            <br className="hidden md:block" /> FUNCTIONALITY IN
                            EVERY PIXEL.
                        </p>
                        <h2 className="block md:hidden">DEV/DESIGNER</h2>
                    </li>

                    <li className="hidden md:block">
                        <Link href="/contact">
                            <Button className="rounded-none">
                                Get in touch
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>
            <motion.div
                className="w-full relative -translate-y-[100%] block md:hidden"
                style={{ top: "calc(100% - 225px)" }}
                initial={{ translateY: "0%", opacity: 0 }}
                animate={{ translateY: "-100%", opacity: 1 }}
                transition={{ type: "spring", duration: 1.5 }}
            >
                <AspectRatio ratio={14 / 9}>
                    <Image
                        src="/selfie2.webp"
                        alt="Selfie"
                        className="object-cover"
                        fill
                    />
                </AspectRatio>
            </motion.div>
        </section>
    );
}
