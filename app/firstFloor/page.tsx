import Link from "next/link";

export const metadata = {
    title: "1st floor"
};

async function getFurnitures() {
    const response = await fetch("https://5f210aa9daa42f001666535e.mockapi.io/api/products");
    const json = await response.json();
    return json;
}

export default async function firstFloor(){
  const furnitures = await getFurnitures();  
  return (
    <div>
      <h1>1st Floor</h1>
      <div>{furnitures.map((furniture) => (
          <li key={furniture.id}>
              <Link href={`/firstFloor/${furniture.id}`}>{furniture.title}</Link>
          </li>
      ))}</div>
    </div>  
  );
}