import { Suspense } from "react";
import PlantGuide from "../../../components/plantGuide";
import PlantDetail from "../../../components/plantDetail";

export default async function gardenPlace(
  {params}: {params: {id: string};}
) {
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<h1>Loading a plant detail...</h1>}>
        <PlantDetail id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading a plant guide...</h1>}>
        <PlantGuide id={id} />
      </Suspense>
    </div>
  );
}