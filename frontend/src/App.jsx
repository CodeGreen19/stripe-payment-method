import axios from "axios";
import "./App.css";

function App() {
  const handleClick = async () => {
    const { data } = await axios.post("http://localhost:5000/api/checkout");
    window.open(data.url);
  };
  return (
    <div className="bg-gray-700 h-screen w-full flex items-center justify-center flex-col">
      <h1 className="text-2xl my-3 text-[tomato]">130$</h1>

      <button
        className="bg-black border-red-500 text-white p-3"
        onClick={handleClick}
      >
        pay now
      </button>
    </div>
  );
}

export default App;
