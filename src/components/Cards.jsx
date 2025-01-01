import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Cards = () => {
  const [params, setParams] = useSearchParams();
  const newName = params.get("value");
  console.log({newName});

  const clickHandler = (name) => {
    setParams({ value:name.toLowerCase() });
  };
  const List = [
    {
      tittle: "ANKUSH",
    },
    {
      tittle: "Amit",
    },
    {
      tittle: "Mohit",
    }
  ];
  return (

    <div className='bg-slate-500 min-h-screen flex flex-col items-center justify-center'>
      <div className="flex items-center justify-center gap-5">
      {List.map((obj, index) => (
        <div key={index}>
          <p onClick={() => clickHandler(obj.tittle)} className={`text-3xl font-bold text-white bg-black mb-10 px-8 py-3 shadow-xl hover:bg-white hover:text-black hover:scale-[1.1] transition-all duration-700 ease-linear rounded-xl p-2 cursor-pointer`}>{obj.tittle}</p>
        </div>
      ))}
      </div>
      <p className='text-2xl font-bold uppercase'>{newName}</p>
    </div>
  );
};

export default Cards