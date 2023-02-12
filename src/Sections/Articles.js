import { Heading, Box, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import ProductCard from "../Components/ProductCard";

function Articles() {
  const [active, SetActive] = useState(1);
  return (
    <Box
      paddingTop={{ base: "132px", md: "158px" }}
      paddingBottom={{ base: "23px", md: "65px" }}
      paddingX={{ md: "150px" }}
      display="flex"
      flexDirection="column"
      alignItems={{ base: "center", md: "flex-start" }}
    >
      <Heading
        paddingBottom="41px"
        fontSize={{ base: "28px", md: "56px" }}
        color="#0E2368"
      >
        Latest Articles
      </Heading>

      {active === 1 ? (
        <Box
          display="flex"
          gap="41px"
          paddingBottom="65px"
          flexDirection={{ base: "column", sm: "row" }}
        >
          <ProductCard
            src="../../Images/Carousel1_1.png"
            title="Grilled Tomatoes at Home"
            content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
          />
          <ProductCard
            src="../../Images/Carousel1_2.png"
            title="Snacks for Travel"
            content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
          />
          <ProductCard
            src="../../Images/Carousel1_3.png"
            title="Post-workout Recipes"
            content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
          />
        </Box>
      ) : (
        <Box
          display="flex"
          gap="41px"
          paddingBottom="65px"
          flexDirection={{ base: "column", md: "row" }}
        >
          <ProductCard
            src="../../Images/Carousel2_1.png"
            title="How To Grill Corn"
            content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
          />
          <ProductCard
            src="../../Images/Carousel2_2.png"
            title="Crunchwrap Supreme"
            content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
          />
          <ProductCard
            src="../../Images/Carousel2_3.png"
            title="Broccoli Cheese Soup"
            content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
          />
        </Box>
      )}
      <Box display="flex" flexDirection="row" w="100%" justifyContent="center">
        <Box
          border={active === 1 ? "1px solid #AFAFAF" : "1px solid #424961"}
          borderRadius="5px"
          display="flex"
          alignItems="center"
        >
          <ChevronLeftIcon
            boxSize={6}
            onClick={() => {
              if (active === 1) return;
              SetActive((prev) => prev - 1);
            }}
          />
        </Box>
        <Text paddingX="14px" fontFamily="Source Sans Pro" fontSize="22px">
          {active}/2
        </Text>
        <Box
          border={active === 2 ? "1px solid #AFAFAF" : "1px solid #424961"}
          borderRadius="5px"
          display="flex"
          alignItems="center"
        >
          <ChevronRightIcon
            boxSize={6}
            onClick={() => {
              if (active === 2) return;
              SetActive((prev) => prev + 1);
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Articles;
