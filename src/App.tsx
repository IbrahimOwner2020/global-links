import React from "react";
import { VStack, Divider } from "@chakra-ui/react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

const App = () => {
	return (
		<VStack maxWidth="1200px" mx="auto" px="10px" py='10px'>
			<Navigation />
			<Divider orientation="horizontal" />
            <Hero />
		</VStack>
	);
};

export default App;
