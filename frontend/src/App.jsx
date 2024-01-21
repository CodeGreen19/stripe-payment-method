import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [info, setInfo] = useState("");
  const handleClick = async () => {
    const { data } = await axios.get("http://localhost:5000/api/test/data");
    setInfo(data);
  };
  return (
    <div className="bg-gray-700 h-screen w-full flex items-center justify-center flex-col">
      <h1 className="text-2xl my-3 text-[tomato]">
        Click the button to get some Data from Backend
      </h1>
      <h1 className="text-[1rem] my-3 text-[#3eed3e]">
        {info ? info.info : "frontend data"}
      </h1>
      <button
        className="bg-black border-red-500 text-white p-3"
        onClick={handleClick}
      >
        Click Here
      </button>
    </div>
  );
}

export default App;
