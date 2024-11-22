import { API_URL } from "../page";

async function getFurniture(id:string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
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