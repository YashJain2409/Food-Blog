import { Box, Button, Heading, Text, Image } from "@chakra-ui/react";

function About() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={{ md: "21px" }}
      w="100%"
      justifyContent="center"
      alignItems="center"
      style={{
        background:
          "linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)",
      }}
      paddingX={{ base: "50px", md: "205px" }}
      paddingY={{ base: "140px", md: "0" }}
    >
      <Image
        src="../../Images/About.png"
        display={{ base: "none", md: "inline" }}
        marginRight={{ md: "200px" }}
      ></Image>
      <Box
        display="flex"
        flexDirection="column"
        w={{ md: "447px" }}
        h={{ md: "254px" }}
        alignItems={{ md: "flex-start" }}
      >
        <Heading
          color="#0E2368"
          fontSize={{ base: "26px", md: "45px" }}
          lineHeight={{ base: "35px", md: "27px" }}
          marginBottom={{ base: "21px", md: "27px" }}
          fontFamily="Poppins"
          textAlign={{ base: "center" }}
        >
          About Us
        </Heading>
        <Text
          fontSize={{ base: "11px", md: "15px" }}
          lineHeight={{ base: "21px", md: "27px" }}
          fontFamily="Open Sans"
          marginBottom={{ base: "16px", md: "25px" }}
          textAlign={{ base: "center", md: "left" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </Text>
        <Box display="flex" justifyContent="center">
          <Button
            backgroundColor="#E23744"
            color="white"
            borderRadius="21px"
            w={{ base: "96px", md: "132px" }}
            h={{ base: "25px", md: "42px" }}
            _hover={{ backgroundColor: "#E23744" }}
            fontFamily="Source Sans Pro"
            letterSpacing="0.03em"
            fontSize={{ base: "11px", md: "16px" }}
            fontWeight="600px"
          >
            Read More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
