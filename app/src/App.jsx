import React from "react";
import {
	ChakraProvider,
	GlobalStyle,
	Image,
	VStack,
} from "@chakra-ui/react";

import theme from "./theme";
import MainMenu from "./components/menu/MainMenu";

const logo = new URL("../assets/logo.svg", import.meta.url);

export default function App() {
	return (
		<ChakraProvider theme={theme}>
			<GlobalStyle />
			<VStack
				alignItems="flex-start"
				padding="8"
				width="full"
			>
				<Image src={logo} />

				<MainMenu />

			</VStack>
		</ChakraProvider>
	);
}
