import React, { useEffect, useState } from "react";
import axios from "axios";
const Itemdetail = ({ match }) => {
  const [item, setItem] = useState([]);
  const [isloaded, setIsLoaded] = useState(false);
  const fetchItems = async () => {
    let { data } = await axios.get(
      `https://fakestoreapi.com/products/${match.params.id}`
    );
    setItem(data);
    setIsLoaded(true);
    console.log(data);
    console.log(match);
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div>
      {isloaded ? (
        <div>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <img width="200" src={item.image} alt="shoppic" />
          <h3>$ {item.price}</h3>
        </div>
      ) : (
        <h1>Loading.....</h1>
      )}
    </div>
  );
};

export default Itemdetail;
