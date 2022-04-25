import { Grid, Heading } from "@chakra-ui/react";
import { City } from "./City";

const cityData = [
  { 
    id: 1, 
    cityImage: "/london.png", 
    alt: "Imagem da cidade de londes", 
    cityName: "Londres",
    countryName: "Reino Unido",
    countryFlag: "/uk.png" 
  },
  { 
    id: 2, 
    cityImage: "/french.png", 
    alt: "Imagem da cidade de paris", 
    cityName: "Paris",
    countryName: "França",
    countryFlag: "/fr.png" 
  },
  { 
    id: 3, 
    cityImage: "/rome.png", 
    alt: "Imagem da cidade de roma", 
    cityName: "Roma",
    countryName: "Itália",
    countryFlag: "/rm.png" 
  },
  { 
    id: 4, 
    cityImage: "/plague.png", 
    alt: "Imagem da cidade de praga", 
    cityName: "Praga",
    countryName: "República Tcheca",
    countryFlag: "/tch.png" 
  },
  { 
    id: 5, 
    cityImage: "/amsterdam.png", 
    alt: "Imagem da cidade de amsterdam", 
    cityName: "Amsterdam",
    countryName: "Amsterdã",
    countryFlag: "/ho.png" 
  }
]

export function Cities() {
  return (
    <>
      <Heading
        fontSize={["2xl", "4xl"]}
        fontWeight="500"
        mb="10"
      >
        Cidades +100
      </Heading>

      <Grid 
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} 
        gap={["20px", "45px"]} 
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        <City 
          cityImage="/london.png" 
          alt="Imagem da cidade de londes" 
          cityName="Londres" 
          countryName="Reino Unido" 
          countryFlag="/uk.png" 
        />
        
        {cityData.map(city => (
          <City 
            key={city.id} 
            cityImage={city.cityImage} 
            alt={city.alt} 
            cityName={city.cityName} 
            countryName={city.countryName} 
            countryFlag={city.countryFlag} 
          />
        ))}
      </Grid>
    </>
  );
}