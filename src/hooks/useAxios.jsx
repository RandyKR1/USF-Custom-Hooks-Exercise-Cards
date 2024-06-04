import { useState } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";

const useAxios = (baseUrl) => {
  const [data, setData] = useState([]);

  const addData = async (endpoint = "") => {
    try {
      const response = await axios.get(`${baseUrl}${endpoint}`);
      setData(data => [...data, { ...response.data, id: uuid() }]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return [data, addData];
};

export default useAxios;
