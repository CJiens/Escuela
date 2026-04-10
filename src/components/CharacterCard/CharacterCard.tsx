import type { characterInterface } from "../../interfaces/characterInterface";

function CharacterCard({ data }: { data: characterInterface }) {
  return (
    <div className="bg-gray-500 h-40 w-50 flex  rounded-xl m-5 shadow-black shadow-xl  flex-col h-64">
      <div className="mt-5 items-center justify-center flex ">
        <img className="  h-32 w-32" src={data.image} alt={data.name} />
      </div>
      <div className="mt-5">
        <div className="text-center">
          <p className="text-xl text-white">{data.name}</p>
        </div>
        <div className="m-5">
          <ul>
            <li>Status : {data.status}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
