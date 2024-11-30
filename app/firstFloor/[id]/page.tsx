const API_URL = "https://5f210aa9daa42f001666535e.mockapi.io/api/products";

async function getFurniture(id:string) {
  const response = await fetch(`${API_URL}/${id}`);
  const json = response.json();
  return json;
}

export async function generateMetadata({params: {id}}: {params: {id: string};}) {
  const furniture = await getFurniture(id);
  return {
    title: furniture.title,
  };
}

export default async function firstFloorRoom(
  {params}: {params: {id: string};}
) {
    const { id } = await params;
    const furniture = await getFurniture(id);
    return (
      <div>
        <h2>1st Floor, {furniture.title}</h2>
        <img src={furniture.image} />
      </div>
    );
}