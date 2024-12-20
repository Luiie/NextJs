const API_KEY = process.env.API_KEY;

function getPlantDetailUrl(id: string) {
    return `https://perenual.com/api/species/details/${id}?key=${API_KEY}`;
}

async function getPlantDetail(id: string) {
    const API_PLANT_DETAIL_URL = getPlantDetailUrl(id);
    const response = await fetch(API_PLANT_DETAIL_URL);
    const json = await response.json();
    return json;
}

export default async function PlantDetail({id}: {id: string}) {
    const detail = await getPlantDetail(id);
    return (
        <div>
            <h2>Garden, {detail.common_name}</h2>
            <div>{detail.cycle} {detail.type}</div>
            <img src={detail.default_image.small_url} />
            <div>{JSON.stringify(detail.description)}</div>
        </div>
    );
}