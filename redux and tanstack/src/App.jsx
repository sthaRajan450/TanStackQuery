import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/slices/product/productSlice";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts()); 
  }, [dispatch]);

  console.log(state);

  return (
    <div>
      {state.isLoading && <p>Loading...</p>}
      {state.isError && <p>Error loading products</p>}
      {state.data && (
        <ul>
          {state.data.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
