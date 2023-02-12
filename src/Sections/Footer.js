import { Box, Image, Text, Icon } from "@chakra-ui/react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <Box
      backgroundColor="#F8F8F8"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      paddingBottom="92px"
      paddingTop={{ base: "52px", md: "84px" }}
    >
      <Box display="flex" justifyContent={{ base: "center" }}>
        <Image
          src="../../Images/Truck.png"
          alt="Truck"
          w={{ base: "75px", md: "161px" }}
          h={{ base: "58px", md: "125px" }}
          marginTop="24px"
          marginLeft={{ md: "103px" }}
          marginBottom={{ base: "42px", md: "0" }}
        ></Image>
      </Box>
      <Box marginLeft={{ base: "45px", md: "200px" }}>
        <Text
          fontFamily="Source Sans Pro"
          color="#0E2368"
          fontSize="18px"
          fontWeight="600"
          letterSpacing="0.03em"
          marginBottom={{ base: "7px", md: "14px" }}
        >
          Contact Us
        </Text>
        <Text
          w={{ base: "275px", md: "217px" }}
          h={{ base: "25px", md: "69px" }}
          fontFamily="Source Sans Pro"
          fontSize={{ base: "8px", md: "15px" }}
          marginBottom={{ base: "7px", md: "14px" }}
        >
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </Text>
        <Text
          fontFamily="Source Sans Pro"
          fontSize={{ base: "8px", md: "15px" }}
          marginBottom={{ base: "7px", md: "14px" }}
        >
          example2020@gmail.com
        </Text>
        <Text
          fontFamily="Source Sans Pro"
          fontSize={{ base: "8px", md: "15px" }}
        >
          (904) 443-0343
        </Text>
      </Box>
      <Box
        marginLeft={{ base: "45px", md: "200px" }}
        marginTop={{ base: "30px", md: "0" }}
      >
        <Text
          fontFamily="Source Sans Pro"
          color="#0E2368"
          fontSize="18px"
          fontWeight="600"
          marginBottom={{ base: "7px", md: "14px" }}
          letterSpacing="0.03em"
        >
          More
        </Text>
        <Text
          fontFamily="Source Sans Pro"
          marginBottom={{ base: "7px", md: "14px" }}
          fontSize={{ base: "8px", md: "15px" }}
        >
          About us
        </Text>
        <Text
          fontSize={{ base: "8px", md: "15px" }}
          fontFamily="Source Sans Pro"
          marginBottom={{ base: "7px", md: "14px" }}
        >
          Products
        </Text>
        <Text
          fontSize={{ base: "8px", md: "15px" }}
          fontFamily="Source Sans Pro"
          marginBottom={{ base: "7px", md: "14px" }}
        >
          Career
        </Text>
        <Text
          fontSize={{ base: "8px", md: "15px" }}
          fontFamily="Source Sans Pro"
        >
          Contact us
        </Text>
      </Box>
      <Box marginLeft={{ md: "150px" }}>
        <Box marginLeft={{ md: "100px" }}>
          <Text
            fontFamily="Source Sans Pro"
            color="#0E2368"
            fontSize="18px"
            fontWeight="600"
            lineHeight="27px"
            letterSpacing="0.03em"
            marginBottom="14px"
            display={{ base: "none", md: "block" }}
          >
            Social Links
          </Text>
          <Text
            display={{ base: "block", md: "none" }}
            marginTop="30px"
            textAlign="center"
            fontFamily="Roboto"
            fontSize="9px"
            lineHeight="32px"
          >
            © 2022 Food Truck Example
          </Text>
          <Box display="flex" gap="17px" justifyContent={{ base: "center" }}>
            <Icon
              boxSize={{ base: 3, md: 5 }}
              as={FaInstagram}
              color="#0E2368"
            />
            <Icon boxSize={{ base: 3, md: 5 }} as={BsTwitter} color="#0E2368" />
            <Icon
              boxSize={{ base: 3, md: 5 }}
              as={FaFacebookF}
              color="#0E2368"
            />
          </Box>
        </Box>
        <Text
          display={{ base: "none", md: "block" }}
          fontFamily="Roboto"
          marginTop="100px"
          fontSize="15px"
          lineHeight="25px"
        >
          © 2022 Food Truck Example
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
