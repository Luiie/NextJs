import { API_KEY } from "../apiKey";

const API_PLANT_GUIDE_URL = `https://perenual.com/api/species-care-guide-list?key=${API_KEY}`;

async function getPlantGuide(id: number) {
    const response = await fetch(`${API_PLANT_GUIDE_URL}&species_id=${id}`);
    const json = await response.json();
    return json.data;
}

export default async function PlantGuide({id}: {id: number}) {
    const guide = await getPlantGuide(id);
    return (
        <div>
            {guide.section.map((sec) => (
                <div>- {sec.type}: {sec.description}</div>
            ))}
        </div>
    );
}