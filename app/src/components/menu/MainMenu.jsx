import {SimpleGrid} from "@chakra-ui/react";
import React from "react";
import MenuItemGroup from "./MenuItemGroup";
import menuData from "./menuData";

export default function MainMenu() {
	return <SimpleGrid
		minChildWidth="300px"
		spacing="8"
		width="full"
		height="full"
	>
		{menuData.map(menuItem => (
			<MenuItemGroup
				title={menuItem.title}
				items={menuItem.items}
				color={menuItem.color}
				key={menuItem.title}/>
		))}
	</SimpleGrid>;
}
