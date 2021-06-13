import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Shop = () => {
  const [items, setItems] = useState([]);
  const [isloaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetchItems();
  }, []);
  const fetchItems = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setItems(data);
    setIsLoaded(true);
    console.log(data);
  };
  return (
    <div>
      {isloaded &&
        items.map((item) => (
          <h5 key={item.id}>
            <Link to={`/shop/${item.id}`}>{item.title}</Link>
          </h5>
        ))}
    </div>
  );
};

export default Shop;
