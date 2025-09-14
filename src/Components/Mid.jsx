import React from "react";

const Mid = ({copytoClipboard,ref,password,length,setLength,setnumberAllowed,setCharacterAllowed}) => {
  return (
    <>
      <div className="h-40 w-10/12 flex flex-col items-center gap-0 p-5 bg-gray-950 rounded-2xl justify-center">
        <div className="h-32 w-8/12 m-0 flex flex-row items-center justify-center">
          <input
            type="text"
            value={password}
            readOnly
            className="h-10 p-4 text-xl w-svw outline-none rounded-lg border-solid border-2 border-green-950  "
            ref={ref}
          />
          <button onClick={copytoClipboard}  className="h-10 w-52 pl-2 pr-2 text-center  rounded-lg hover:bg-red-600 text-black font-semibold bg-blue-400 text-2xl">
            Copy
          </button>
        </div>
        <div className="flex flex-row gap-9 justify-center items-center">
          <section className="flex flex-row gap-2">
            <input type="range" 
            min={8}
            max={100}
            value={length}
            onChange={(e)=>{
              {setLength(e.target.value)}
            }}
            className="cursor-pointer"
            id="length" />
            <label htmlFor="length" className="text-xl text-orange-500">length {length}</label>
          </section>
          <section className="flex flex-row gap-2">
            <input type="checkbox" id="number" onChange ={()=>{
              setnumberAllowed((prev) => !prev)
              }}
              className="" />
            <label htmlFor="number" className="text-xl text-orange-500">
              Number
            </label>
          </section>
          <section className="flex flex-row gap-2">
            <input type="checkbox" id="charcter" 
            onChange ={()=>{
              setCharacterAllowed((prev) => !prev)
              }}/>
            <label htmlFor="character" className="text-xl text-orange-500">
              Character
            </label>
          </section>
        </div>
      </div>
    </>
  );
};

export default Mid;
