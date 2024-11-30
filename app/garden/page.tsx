import Link from "next/link";

const API_KEY = process.env.API_KEY;

export const metadata = {
    title: "garden"
};

async function getPlants(){
    const response = await fetch(`https://perenual.com/api/species-list?key=${API_KEY}`);
    const json = await response.json();
    return json;
}

export default async function garden(){
    const plantsData = await getPlants();
    const plants = await plantsData.data;
    return (
        <div>
            <h1>Garden</h1>
            <div>{plants.map((plant) => (
                <li key={plant.id}>
                    <Link href={`/garden/${plant.id}`}>{plant.common_name}</Link>
                </li>
            ))}</div>
        </div>);
}