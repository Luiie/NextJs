export default function firstFloorRoom(
  {params: {roomNumber}}: {params: {roomNumber: String};}
) {
    return <h2>1st Floor, Room {roomNumber}</h2>;
}