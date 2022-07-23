import {
	AspectRatio,
	Grid,
	GridItem,
	Heading,
	Image,
	Text,
	HStack,
	Button,
	Box,
} from "@chakra-ui/react";

const Hero = () => {
	return (
		<Grid
			templateColumns="repeat(2, 1fr)"
			alignItems="center"
			py="40px"
			gap={2}
			position="relative"
			w="100%"
		>
			<GridItem w="100%">
				<AspectRatio maxW="100%" ratio={5 / 5}>
					<Image src="/images/hero-women.png" objectFit="cover" />
				</AspectRatio>
			</GridItem>
			<GridItem w="100%" pl="60px">
				<Heading
					fontSize="36px"
					maxW="400px"
					color="#01073F"
					fontWeight="semibold"
				>
					Insurance cannot be complicated anymore
				</Heading>
				<Text color="#01073F80" maxW="420px" mt="30px">
					Get the best insurance coverage by your smartphone - all in
					a matter of minute
				</Text>
				<HStack
					justifyContent="start"
					alignItems="center"
					mt="30px"
					spacing="40px"
				>
					<Button
						color="white"
						bgColor="#3A86FF"
						_hover={{ background: "#3a86ff" }}
						borderRadius="none"
						size="lg"
						px="40px"
					>
						Get Started
					</Button>
					<Text as="a" href="#" color="#01073F" fontWeight="600">
						Learn More
					</Text>
				</HStack>
			</GridItem>
			<Box position="absolute" bottom="0" right="0" bgColor="white">
				<HStack px="60px" py="50px" spacing="50px">
					<Image src="/logos/hubspot-full-1.png" objectFit="cover" />
					<Image
						src="/logos/airbase-logo-full-1.png"
						objectFit="cover"
					/>
					<Image src="/logos/asana-mono-1.png" objectFit="cover" />
					<Image
						src="/logos/atlassian-mono-1.png"
						objectFit="cover"
					/>
				</HStack>
			</Box>
		</Grid>
	);
};

export default Hero;
