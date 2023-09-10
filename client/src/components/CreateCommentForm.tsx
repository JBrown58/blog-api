import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Heading,
  Textarea,
  Divider,
  AbsoluteCenter,
  Button,
} from "@chakra-ui/react";
import useDataFetching from "../hooks/useDataFetching";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const CreateCommentForm = ({ postid }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");
  const location = `http://localhost:5173/api${useLocation().pathname}`;
  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const comment = formData.get("comment");
    console.log(comment);

    try {
      const response = await fetch(location, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ comment }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      // Handle success - maybe redirect or show a message
    } catch (error) {
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
    }
    navigate(0);
  };

  return (
    <Box>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="white" px="4">
          Add Comment
        </AbsoluteCenter>
      </Box>
      <form onSubmit={handleSubmit}>
        <Textarea name="comment" placeholder="Here is a sample placeholder" />
        <Button type="submit">Add</Button>
      </form>
    </Box>
  );
};

export default CreateCommentForm;
