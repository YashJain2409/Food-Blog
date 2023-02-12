import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";

function Hero() {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column-reverse", md: "row" }}
      justifyContent={{ md: "space-between" }}
      marginBottom={{ base: "64px", md: "186px" }}
    >
      <Box
        w={{ base: "100%", md: "50%" }}
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src="../../Images/Truck.png"
          alt="Truck"
          display={{ base: "none", md: "inline" }}
          marginLeft="100px"
          marginTop="33px"
        ></Image>
        <Heading
          marginTop={{ base: "75px", md: "111px" }}
          marginLeft={{ base: "67px", md: "100px" }}
          color="#0E2368"
          w={{ base: "240px", md: "345px" }}
          h={{ base: "130px", md: "207px" }}
          fontFamily="Source Sans Pro"
          textAlign={{ base: "center", md: "left" }}
          fontSize={{ base: "38px", md: "62px" }}
          fontWeight="700"
          lineHeight={{ base: "46px", md: "69px" }}
        >
          Discover the <span style={{ color: "#E23744" }}>Best</span> Food and
          Drinks
        </Heading>
        <Text
          marginTop={{ base: "21px", md: "26px" }}
          marginLeft={{ base: "63px", md: "100px" }}
          w={{ base: "249px", md: "345px" }}
          height={{ base: "36px", md: "55px" }}
          lineHeight="27px"
          fontFamily="Open Sans"
          fontSize={{ base: "11px", md: "16.5px" }}
          fontWeight="400"
          textAlign={{ base: "center", md: "left" }}
        >
          Naturally made Healthcare Products for the better care & support of
          your body.
        </Text>
        <Box
          display="flex"
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          <Button
            w={{ base: "140px", md: "190px" }}
            h={{ base: "40px", md: "63px" }}
            fontSize={{ base: "12px", md: "18px" }}
            marginLeft={{ md: "97px" }}
            marginTop={{ base: "28px", md: "41px" }}
            backgroundColor="#E23744"
            color="white"
            variant="solid"
            borderRadius="34px"
            _hover={{ backgroundColor: "#E23744" }}
          >
            Explore Now!
          </Button>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row">
        <Image src="../../Images/Hero.png" alt="Hero" marginTop="4px"></Image>
        <Image
          src="../../Images/Curve.png"
          alt="Curve"
          style={{ position: "absolute", right: "0" }}
        ></Image>
        <Button
          color="white"
          _hover={{ color: "white" }}
          variant="outline"
          borderRadius="21px"
          position="absolute"
          fontSize={{ base: "11px", md: "16px " }}
          top={{ base: "18px", md: "35px" }}
          right={{ base: "18px", md: "41px" }}
        >
          Get In Touch
        </Button>
      </Box>
    </Box>
  );
}

export default Hero;
