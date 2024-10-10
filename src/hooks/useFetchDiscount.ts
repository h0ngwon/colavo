import { useEffect, useState } from "react";
import { getDiscounts } from "../api/api";
import { IDiscounts } from "../types/types";

const useFetchDiscount = () => {
  const [discounts, setDiscounts] = useState<IDiscounts>({});

  const fetchItems = async () => {
    const data = await getDiscounts();
    setDiscounts(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return discounts;
};

export default useFetchDiscount;
