"use client";

import { getIndex } from "@/data";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [message, setMessage] = useState<string>("");
  useEffect(() => {
    getIndex().then((data) => (!!data ? setMessage(data) : setMessage("Error")));
  }, []);
  return <div>{message}</div>;
};

export default HomePage;
