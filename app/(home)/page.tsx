export const metadata = {
    title: "Home",
};

const URL = "https://5f210aa9daa42f001666535e.mockapi.io/api/products";

async function getFurnitures() {
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}

export default async function Home(){
    const furnitures = await getFurnitures();
    return (
        <div>
            <h1>Hello Next.js</h1>
            <h2>Welcome Home</h2>
            <div>{JSON.stringify(furnitures)}</div>
        </div>
    );
}