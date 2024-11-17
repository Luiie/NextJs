"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation(){
    const path = usePathname();
    return(
        <nav>
            <ul>
                <li><Link href="/">Home</Link>{path === "/" ? "💖" : ""}</li>
                <li><Link href="/firstFloor">First Floor</Link></li>
                <li><Link href="/secondFloor">Second Floor</Link></li>
            </ul>
        </nav>
    );
}