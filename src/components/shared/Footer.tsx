import Image from "next/image";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
export default function Footer() {
    return (
        <footer className="mx-[6vw] mt-[150px] pb-[50px] flex flex-col gap-5">
            <div className="flex flex-col items-start">
                <h2 className="text-[16vw] leading-[16vw] text-nowrap sm:text-6xl sm:leading-none">
                    LET&apos;S WORK <br />
                    TOGETHER
                </h2>

                <div className="flex flex-row items-center mt-4 w-[100%] sm:w-[320px]">
                    <Button className="rounded-none w-[100%]">
                        Send me a message
                    </Button>
                </div>
            </div>
            <Separator className="dark" />
            <div className="flex flex-row justify-between items-center">
                <h2>Hello</h2>
                <ul className="flex flex-row gap-5">
                    <li>
                        <a href="#" className="text-xl">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-xl">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-xl">
                            Home
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
