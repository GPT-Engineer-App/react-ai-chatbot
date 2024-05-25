import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, Box, HStack, IconButton } from "@chakra-ui/react";
import { FaRobot, FaUser } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    // Simulate AI response
    const aiMessage = { sender: "ai", text: "This is a simulated response." };
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    }, 1000);

    setInput("");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%" height="60vh" overflowY="auto" border="1px solid #ccc" borderRadius="md" padding={4}>
          {messages.map((message, index) => (
            <HStack key={index} justifyContent={message.sender === "user" ? "flex-end" : "flex-start"}>
              {message.sender === "ai" && <FaRobot />}
              <Box bg={message.sender === "user" ? "blue.100" : "green.100"} borderRadius="md" padding={2} maxWidth="70%">
                <Text>{message.text}</Text>
              </Box>
              {message.sender === "user" && <FaUser />}
            </HStack>
          ))}
        </Box>
        <HStack width="100%">
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." />
          <Button onClick={handleSend} colorScheme="blue">
            Send
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
