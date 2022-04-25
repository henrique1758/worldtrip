import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CityProps {
  cityImage: string;
  alt: string;
  cityName: string;
  countryName: string;
  countryFlag: string;
}

export function City({ cityImage, alt, cityName, countryName, countryFlag }: CityProps) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={cityImage} alt={alt} w="100%" h="170px" />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">{cityName}</Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">{countryName}</Text>
        </Flex>
        <Image src={countryFlag} alt="bandeira do reino unido" />
      </Flex>
    </Box>
  );
}