import GridSection from "@/components/shared/GridSection";
import Hero from "@/components/shared/Hero";
import Navigation from "@/components/shared/Navigation";
import TextSection from "@/components/shared/TextSection";
import Image from "next/image";

export default function Home() {
    return (
        <main className="mx-[6vw]">
            <Hero fullHeight={true} />
            <TextSection
                title="ABOUT"
                heading="IT'S ABOUT UNDERSTANDING 
                        PEOPLE, SOLVING PROBLEMS, 
                        AND CREATING MEANINGFUL 
                        CONNECTIONS."
                content="Hello, I'm Tobias Rasmussen, a passionate UX designer 
                        dedicated to shaping digital experiences that seamlessly 
                        blend aesthetics with functionality. With a background in 
                        cognitive psychology and a love for cutting-edge 
                        technology, I bring a unique perspective to user-centric 
                        design.
                        <br/>
                        <br/>
                        My journey in the design realm is not just about pixels; 
                        it's about understanding people, solving problems, and 
                        creating meaningful connections. I thrive on the 
                        Intricacies of crafting intuitive interfaces that resonate 
                        with users.
                        "
                fullHeight={true}
            />

            <GridSection
                title="WORK"
                items={[
                    {
                        name: "WEBWEAVER",
                        image: "/about-img.webp",
                        type: "FULL DEVELOPMENT",
                    },
                    {
                        name: "LUCKY BARBER",
                        image: "/luckybarber-mockup.webp",
                        type: "FULL DEVELOPMENT",
                    },
                    {
                        name: "GUTTENE",
                        image: "/guttene-phone.webp",
                        type: "FULL DEVELOPMENT",
                    },

                    {
                        name: "PESSIMISTIC CHAT",
                        image: "/utforsk_sandefjord_mockup.webp",
                        type: "FULL DEVELOPMENT",
                    },
                    // Add as many items as you want
                ]}
            />
        </main>
    );
}
