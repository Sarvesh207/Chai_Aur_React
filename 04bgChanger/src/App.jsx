import{ useState } from "react";

const App = () => {

  const[color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen" style={{backgroundColor:color}}>
      <div>
      </div>

      <div className="bg-white w-72 h-10 rounded-lg flex justify-around">
        <button className="bg-red-600 rounded-md px-2 " onClick={() => setColor("red")}>Red</button>
        <button className="bg-yellow-400 rounded-md px-2 " onClick={() => setColor("yellow")}>Yellow</button>
        <button className="bg-green-600 rounded-md px-2 " onClick={() => setColor("green")}>Green</button>
        <button className="bg-blue-600 rounded-md px-2 " onClick={() => setColor("blue")}>Blue</button>
      </div>
    </div>
  );
};

export default App;
