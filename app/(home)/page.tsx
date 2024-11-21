"use client"

import { useEffect, useState } from "react";

export default function Home(){
    const [isLoading, setIsLoading] = useState(true);
    const [furnitures, setFurnitures] = useState([]);
    const getFurnitures = async() => {
        const response = await fetch("https://5f210aa9daa42f001666535e.mockapi.io/api/products");
        const json = await response.json();
        setFurnitures(json);
        setIsLoading(false);
    };
    useEffect(() => {
        getFurnitures();
    }, []);
    return (
        <div>
            <h1>Hello Next.js</h1>
            <h2>Welcome Home</h2>
            <div>{isLoading ? "Loading" : JSON.stringify(furnitures)}</div>
        </div>
    );
}