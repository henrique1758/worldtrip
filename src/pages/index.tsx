import { Flex, Heading } from "@chakra-ui/react";
import { Characteristics } from "../components/Characteristics";
import { Header } from "../components/Header";
import { HomeBanner } from "../components/HomeBanner";
import { Separator } from "../components/Separator";
import { Slider } from "../components/Slider";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <HomeBanner />
      <Characteristics />
      <Separator />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?<br />Então escolha seu continente
      </Heading>

      <Slider />
    </Flex>
  )
};