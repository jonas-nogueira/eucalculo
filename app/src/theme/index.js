import {extendTheme} from "@chakra-ui/react";

import styles from "./styles";
import colors from "./colors";
import fonts from "./fonts";
import textStyles from "./textStyles";

const overrides = {
	styles,
	colors,
	fonts,
	textStyles,
	components: {
	},
};

export default extendTheme(overrides);
