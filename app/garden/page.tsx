import Link from "next/link";

const API_PLANT_URL = "https://perenual.com/api/species-list?key=sk-IYG467414114324a37743";

async function getPlants(){
    const response = await fetch(API_PLANT_URL);
    const json = await response.json();
    return json;
}
export default async function garden(){
    const plants = await getPlants();
    return (
        <div>
            <h1>Garden</h1>
            <div>{plants.data.map((plant) => (
                <li key={plant.id}>
                    <Link href={`/garden/${plant.id}`}>{plant.common_name}</Link>
                </li>
            ))}</div>
        </div>);
}