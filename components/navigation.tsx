"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation(){
    const path = usePathname();
    return(
        <nav>
            <ul>
                <li><Link href="/">Home</Link>{path === "/" ? "💖" : ""}</li>
                <li><Link href="/firstFloor">First Floor</Link>{path === "/firstFloor" ? "💖" : ""}</li>
                <li><Link href="/secondFloor">Second Floor</Link>{path === "/secondFloor" ? "💖" : ""}</li>
                <li><Link href="/garden">Garden</Link>{path === "/garden" ? "💖" : ""}</li>
            </ul>
        </nav>
    );
}