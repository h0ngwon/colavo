import { useEffect, useState } from "react";
import { getItems } from "../api/api";
import { IItems } from "../types/types";

const useFetchItems = () => {
  const [items, setItems] = useState<IItems>({});

  const fetchItems = async () => {
    const data = await getItems();
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return items;
};

export default useFetchItems;
