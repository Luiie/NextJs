import { API_PLANT_URL } from "../page";

var URL, KEY = API_PLANT_URL.split('?');

async function getPlant(id: number) {
  const response = await fetch(API_PLANT_URL);
  const json = await response.json();
  return json.data[id-1];
}

export default async function gardenPlace(
  {params}: {params: {id: number};}
) {
  const { id } = await params;
  const plant = await getPlant(id);
  return (
    <div>
      <h2>Garden, {plant.common_name}</h2>
      <img src={plant.default_image.medium_url} />
    </div>
  );
}