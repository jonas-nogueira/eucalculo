import React from "react";
import {VStack, Text, Link, List, ListItem} from "@chakra-ui/react";
import PropTypes from "prop-types";

function CardMenuItem({title, items, color}) {
	return (
		<VStack
			boxShadow="md"
			flex="1"
			bg="white"
			borderRadius="sm"
			minHeight="80%"
			alignItems="flex-start"
			padding="8"
			spacing="8"
		>
			<Text
				color={color}
				textStyle="menuTitle"
			>
				{title}
			</Text>
			<List
				spacing="4"
			>

				{items.map(item => (
					<ListItem key={item}>
						<Link>{item}</Link>
					</ListItem>
				))}

			</List>
		</VStack>);
}

CardMenuItem.propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
	color: PropTypes.string.isRequired,
};

export default CardMenuItem;
