import { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";

const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const text = await response.text();
        const data = JSON.parse(text);
        setMessage(data.message);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box className="App">
      <Heading>{message}</Heading>
    </Box>
  );
};

export default Home;