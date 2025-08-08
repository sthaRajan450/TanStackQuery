import React, { useEffect, useState } from "react";
import { fetchTodos } from "../api/Api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const FetchOld = () => {
  const getTodosData = async () => {
    try {
      const res = await fetchTodos();

      return res.status === 200 ? res.data.todos : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const getProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      return res.status == 200 ? res.data.products : [];
    } catch (error) {
      console.log(error);
    }
  };

  //   const { data, isLoading, isError } = useQuery({
  //     queryKey: ["todos"], //useState
  //     queryFn: getTodosData, //useEffect
  //   });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });
  console.log(data);
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      {data?.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchOld;
