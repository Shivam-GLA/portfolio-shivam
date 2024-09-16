import { React, useState, useEffect } from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Grid,
  useStyleConfig,
  Text,
  useColorModeValue,
  useColorMode,
  Icon,
  Button,
  Link,
  Skeleton
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { MdFlightTakeoff } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { GiShuttlecock } from "react-icons/gi";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import TechStackCard from "../../components/techStackCard/techStackCard";
import AboutMeInfo from "../../components/aboutMeInfo/aboutMeInfo";
import node from "../../assets/icons/nodejs.svg";
import mongo from "../../assets/icons/mongodb.svg";
import js from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/react.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css3.svg";
import git from "../../assets/icons/git.svg";
import github from "../../assets/icons/github.svg";
import express from "../../assets/icons/express.svg";
import tailwind from "../../assets/icons/tailwindcss.svg";
import sql from "../../assets/icons/sql.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";
import myphoto from "../../assets/myimg.jpg";
import GitHubCalendar from "react-github-calendar";

export default function About() {
  const [loadedProfileimg, setloadedProfileimg] = useState(false);
  const [loadedgithubimg, setloadedgithubimg] = useState(false);
  const styles = useStyleConfig("Card");
  const { colorMode } = useColorMode();
  const textColorPrimary = useColorModeValue("lightblue.100", "lightpeach.100");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

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
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          {/* <TypeAnimation
            sequence={["ABOUT ME", 500, "ABOUT", 500, "ABOUT ME", 500]}
            style={{ fontSize: "3em" }}
            cursor={false}
          /> */}
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1.34fr 1.62fr"
            }}
            templateRows={{
              lg: "1fr"
            }}
            gap={{ base: "20px", xl: "20px" }}
          >
            <Box
              position="relative"
              w={{ base: "100%", "3xl": "100%" }}
              h={{ base: "100%", "3xl": "250px" }}
              borderRadius="20px"
              p="20px"
              overflow="hidden"
            >
              <Box
                __css={styles}
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bg={textColorPrimary}
                transform="rotate(4deg)"
                // zIndex="-1"
              />
              <Skeleton
                height="100%"
                isLoaded={loadedProfileimg}
                color="white"
                fadeDuration={1}
              >
                <LazyLoadImage
                  src={myphoto}
                  width="100%"
                  height="100%"
                  alt="Image Alt"
                  effect="blur"
                  style={{ height: "100%" }}
                  onLoad={() => setloadedProfileimg(true)}
                />
              </Skeleton>
            </Box>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box __css={styles} border="none" bg="transparent">
                <Text
                  color={textColorPrimary}
                  fontSize="2xl"
                  mb="40px"
                  textAlign="center"
                >
                  {"<GENERAL INFORMATION/>"}
                </Text>
                <SimpleGrid columns="2" gap="20px">
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Name"
                    value="Shivam Soni"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Designation"
                    value="Frontend Developer"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Location"
                    value="Mathura, Uttar Pradesh"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Education"
                    value="GLA University, Mathura"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Degree"
                    value="BCA (Honours)"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Languages"
                    value="English, Hindi"
                  />
                </SimpleGrid>
              </Box>
            </Flex>
          </Grid>
        </Flex>

        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY SKILLSET/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 2, md: 2, lg: 3, xl: 6, "2xl": 6 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <TechStackCard imagepath={html} />
          <TechStackCard imagepath={css} />
          <TechStackCard imagepath={js} />
          <TechStackCard imagepath={react} />
          <TechStackCard imagepath={tailwind} />
          <TechStackCard imagepath={bootstrap} />
          <TechStackCard imagepath={express} />
          <TechStackCard imagepath={node} />
          <TechStackCard imagepath={github} />
          <TechStackCard imagepath={git} />
          <TechStackCard imagepath={mongo} />
          <TechStackCard imagepath={sql} />
        </SimpleGrid>

        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
          mt="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY GITHUB CONTRIBUTIONS/>"}
          </Text>
        </Flex>
        <Box display="flex" justifyContent="center" alignItems="center">
          <GitHubCalendar
            username="Shivam-GLA"
            colorScheme={colorMode === "light" ? "light" : "dark"}
            year="last"
          />
        </Box>
        <Flex justifyContent="center" alignItems="center" mt="20px">
          <Skeleton
            height="100%"
            isLoaded={loadedgithubimg}
            color="white"
            fadeDuration={1}
          >
            <LazyLoadImage
              src={
                colorMode === "light"
                  ? "https://github-readme-streak-stats.herokuapp.com?user=Shivam-GLA&theme=whatsapp-light&hide_border=true&border_radius=5.8&date_format=j%20M%5B%20Y%5D"
                  : "https://github-readme-streak-stats.herokuapp.com?user=Shivam-GLA&theme=calm-pink&hide_border=true&border_radius=5.8&date_format=j%20M%5B%20Y%5D"
              }
              alt="GitHub Streak"
              effect="blur"
              onLoad={() => setloadedgithubimg(true)}
            />
          </Skeleton>
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt="20px">
          <Link href="https://github.com/Shivam-GLA" target="blank">
            <Button variant="darkBrand" fontSize="sm" fontFamily="DM Sans">
              Visit Github
            </Button>
          </Link>
        </Flex>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
          mt="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY INTERESTS AND HOBBIES/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, xl: 3, "2xl": 3 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={MdFlightTakeoff}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Travelling & Exploring</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              I am passionate about traveling and exploring new places. I enjoy meeting new people, building friendships, and learning from different cultures. Every trip offers a chance for personal growth, new connections, and unforgettable memories. I dream of visiting foreign countries. I believe that through travel, we can form meaningful relationships and gain invaluable insights into the world around us!!
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={IoGameController}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Playing Online Games</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
            I am deeply passionate about playing online games, especially PUBG and Clash of Clans. These games offer thrilling challenges and a dynamic environment where strategy and teamwork are key. I enjoy connecting with players globally and working together to achieve goals. Gaming enhances my problem-solving skills, strategic thinking, and fosters friendships through shared victories and experiences!!
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={GiShuttlecock}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Playing Badminton</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
            I am passionate about playing badminton, a sport that combines agility, strategy, and endurance. I relish the challenge of perfecting my technique, executing strategic shots, and competing in fast-paced matches. Badminton not only keeps me physically active but also sharpens my reflexes and strategic thinking. For me, badminton is both a rewarding sport and a way to stay fit and engaged!!
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
