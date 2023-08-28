

import{ useState } from "react";

function App() {

  const [counter ,setCounter] = useState(0)
  console.log("counetr", counter)

  const handllIncrease = () => {
    setCounter(prev => prev + 1 );
    setCounter(prev => prev + 1 );
    setCounter(prev => prev + 1 );
    setCounter(prev => prev + 1 );
  }

  const handleDecrease =  () => {
    if(counter > 0)
    setCounter (counter - 1)
  }
  return (
    <>
      <h1>Hello lets get Hooked</h1>

      <h3>Counter : {counter}</h3>
      <button onClick={handllIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </>
  );
}
export default App;
