import {
  Button,
  Card,
  CardBody,
  Box,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";

function ProductCard(props) {
  const { src, title, content } = props;
  return (
    <Card
      w={{ base: "271px", md: "381px" }}
      h={{ base: "484px", md: "554px" }}
      borderRadius="21px"
      border="1px solid rgba(147, 162, 211, 0.38)"
    >
      <CardBody>
        <Box display="flex" justifyContent="center">
          <Image
            src={src}
            w={{ base: "204px", md: "326px" }}
            h={{ base: "168px", md: "258px" }}
          ></Image>
        </Box>
        <Box marginTop={{ base: "38px" }}>
          <Heading
            fontFamily="Poppins"
            fontSize={{ base: "16px", md: "21px" }}
            fontWeight="700"
            lineHeight="27px"
            color="#0E2368"
            textAlign={{ base: "center", md: "left" }}
          >
            {title}
          </Heading>
          <Text
            color="#444957"
            marginTop={{ base: "6px", md: "13px" }}
            marginBottom={{ base: "26px", md: "27px" }}
            fontFamily="Open Sans"
            fontSize={{ base: "12px", md: "15px" }}
            lineHeight="27px"
            letterSpacing="-0.02em"
            marginLeft={{ base: "17px", md: "0" }}
          >
            {content}
          </Text>
          <Box
            w="100%"
            display="flex"
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Button
              borderRadius="21px"
              border="1px solid #424961"
              w={{ base: "118px", md: "131px" }}
              h={{ base: "26px", md: "42px" }}
              backgroundColor="white"
              fontSize={{ base: "11px", md: "16px" }}
            >
              Read More
            </Button>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
}

export default ProductCard;
