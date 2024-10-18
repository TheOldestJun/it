import Image from "next/image"
import { getGreeting } from "@/lib/functions";

export default function Header() {
    const greeting = getGreeting();
    return (
        <header className="flex justify-between items-center px-4 py-2 bg-secondary text-secondary-foreground shadow-md sticky top-0">
            <div>
                <Image src='/img/icons/appway.png'
                    width={100}
                    height={20}
                    alt='logo'
                    style={{ width: '100px', height: "20px" }} />
            </div>
            <div>
                <ul className="flex flex-row gap-2">
                    <li>{greeting}</li>
                    <li><a href="#">Допомога</a></li>
                    <li><a href="#">Вийти</a></li>
                </ul>
            </div>


        </header>
    )
}