import { React, useState, useEffect } from "react";
import {
  Box,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  useStyleConfig,
  Skeleton
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import contactimg from "../../assets/contact.png";
import contactimg1 from "../../assets/contact1.png";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Contact() {
  const [loadedimage1, setloadedimage1] = useState(false);
  const [loadedimage2, setloadedimage2] = useState(false);
  const styles = useStyleConfig("Card");
  const textColorPrimary = useColorModeValue("lightblue.100", "lightpeach.100");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };
  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt="30px">
        <Flex justifyContent="center" alignItems="center">
          <Box>
            <Skeleton
              isLoaded={loadedimage1}
              color="white"
              fadeDuration={1}
              height={"100%"}
            >
              <Image
                src={contactimg}
                onLoad={() => setloadedimage1(true)}
              ></Image>
            </Skeleton>
          </Box>
          <Box>
            <Skeleton
              isLoaded={loadedimage2}
              color="white"
              fadeDuration={1}
              width={"100%"}
              height={"100%"}
            >
              <Image
                src={contactimg1}
                onLoad={() => setloadedimage2(true)}
              ></Image>
            </Skeleton>
          </Box>
        </Flex>

        <SimpleGrid
          columns={{ base: 1, xl: 3, "2xl": 3 }}
          gap="20px"
          mt={{ sm: "20px", xl: "0" }}
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box __css={styles}>
              <Box textAlign="center">
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href = "https://www.linkedin.com/in/shivam-soni-glau/";
                    e.preventDefault();
                  }}
                >
                  <Icon
                    as={BiLogoLinkedin}
                    width="30px"
                    height="30px"
                    color="inherit"
                    cursor="pointer"
                  />
                </Link>
              </Box>
              <Text textAlign="center">LINKEDIN ME @</Text>
              <Link to={"https://www.linkedin.com/in/shivam-soni-glau/"} target="_blank">
                <Text color={textColorPrimary} textAlign="center" mt="5px" style={{ cursor: "pointer" }} _hover={{ color: "tomato" }}>
                  View Linkedin Profile
                </Text>
              </Link>
            </Box>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box __css={styles}>
              <Box textAlign="center">
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href = "mailto:shivamsoni8445@gmail.com";
                    e.preventDefault();
                  }}
                >
                  <Icon
                    as={AiOutlineMail}
                    width="30px"
                    height="30px"
                    color="inherit"
                    cursor="pointer"
                  />
                </Link>
              </Box>

              <Text textAlign="center">EMAIL ME @</Text>
              <Link to={"mailto: shivamsoni8445@gmail.com"} target="_blank">
                <Text color={textColorPrimary} textAlign="center" mt="5px" style={{ cursor: "pointer" }} _hover={{ color: "tomato" }}>
                  shivamsoni8445@gmail.com
                </Text>
              </Link>
            </Box>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box __css={styles}>
              <Box textAlign="center">
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href = "https://wa.me/919528300525";
                    e.preventDefault();
                  }}
                >
                  <Icon
                    as={FaWhatsapp}
                    width="30px"
                    height="30px"
                    color="inherit"
                    cursor="pointer"
                  />
                </Link>
              </Box>
              <Text textAlign="center">WHATSAPP ME @</Text>
              <Link to={"https://wa.me/919528300525"} target="_blank">
                <Text color={textColorPrimary} textAlign="center" mt="5px" style={{ cursor: "pointer" }} _hover={{ color: "tomato" }}>
                  (+91)-9528300525
                </Text>
              </Link>
            </Box>
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
