import { API_PLANT_URL } from "../page";

const ID = 0;
function getPlantDetailUrl(id: number) {
  return `https://perenual.com/api/species/details/${id}?key=sk-IYG467414114324a37743`;
}
const API_PLANT_GUIDE_URL = "https://perenual.com/api/species-care-guide-list?key=sk-IYG467414114324a37743";

async function getPlantDetail(id: number) {
  const API_PLANT_DETAIL_URL = getPlantDetailUrl(id);
  const response = await fetch(API_PLANT_DETAIL_URL);
  const json = await response.json();
  return json;
}

async function getPlantGuide(id: number) {
  const response = await fetch(`${API_PLANT_GUIDE_URL}&species_id=${id}`);
  const json = await response.json();
  console.log(json);
  return json.data[0];
}

export default async function gardenPlace(
  {params}: {params: {id: number};}
) {
  const { id } = await params;
  const [plantDetail, plantGuide] = await Promise.all([getPlantDetail(id), getPlantGuide(id)]);
  return (
    <div>
      <h2>Garden, {plantDetail.common_name}</h2>
      <div>{plantDetail.id}</div>
      <div>{plantGuide.species_id}</div>
      <img src={plantDetail.default_image.medium_url} />
    </div>
  );
}