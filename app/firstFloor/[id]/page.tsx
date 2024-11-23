const API_PLANT_URL = `https://perenual.com/api/species/details/${id}?key=sk-IYG467414114324a37743`;

async function getFurniture(id:string) {
  const response = await fetch(`${API_URL}/${id}`);
  const json = response.json();
  return json;
}

export default async function firstFloorRoom(
  {params: {id}}: {params: {id: String};}
) {
    const furniture = await getFurniture(id);
    return (
      <div>
        <h2>1st Floor, {furniture.title}</h2>
        <img src={furniture.image} />
      </div>
    );
}