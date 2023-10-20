import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // const [products, error, loading] = customReactQuery("api/produc")
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await axios.get("api/products?search=" + search, {
          signal: controller.signal,
        });
        console.log(res.data);
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request Canceled", error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();

    //clean up
    return () => {
      controller.abort();
    };
  }, [search]);

  // if (error) {
  //   return <h1>Something Went Wrong</h1>;
  // }
  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <h1>Chai aur API IN React</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something Went Wrong</h1>}
      <h2>Number of Products are:{products.length}</h2>
    </>
  );
}

export default App;

// const customReactQuery = (urlPath) => {
//   // return  [products, error, loading ]
// };
