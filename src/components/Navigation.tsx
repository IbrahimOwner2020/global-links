import { Flex, Icon, Text, Spacer, Heading, Button } from "@chakra-ui/react";
import { GiDiamonds } from "react-icons/gi";

const Navigation = () => {
	return (
		<Flex w="100%" alignItems="center" py="15px">
			<Flex alignItems="center" justifyContent="flex-start" gap={2}>
				<Heading size="lg" fontWeight="bold">
					Global Links
				</Heading>
				<Icon as={GiDiamonds} color="blue.400" boxSize="26px" />
			</Flex>
			<Spacer />
			<Flex gap="40px" alignItems="center">
				<Text as="a" href="#" fontWeight="semibold">
					Market
				</Text>
				<Text as="a" href="#" fontWeight="semibold">
					Community
				</Text>
				<Text as="a" href="#" fontWeight="semibold">
					About Us
				</Text>
				<Text as="a" href="#" fontWeight="semibold">
					Product
				</Text>
				<Button
					fontWeight="semibold"
					color="white"
					bg="blue.bgButton"
					borderRadius="0"
                    _hover={{ background: "blue.bgButton" }}
				>
					Contact Us
				</Button>
			</Flex>
		</Flex>
	);
};

export default Navigation;
