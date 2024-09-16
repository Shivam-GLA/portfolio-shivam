import { React, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import shoesavvy from "../../assets/projects/ShoeSavvy.png";
import textAnalyzer from "../../assets/projects/textAnalyzer.png";
import newsApi from "../../assets/projects/News-API.png";
import microsoft from "../../assets/projects/Microsoft.png";
import facebook from "../../assets/projects/Facebook.png";
import spotify from "../../assets/projects/Spotify.png";
import windows11 from "../../assets/projects/Windows 11.png";
import tickTac from "../../assets/projects/ticTacToe.png";
import portfolio from "../../assets/projects/portfolio.png";
import foodDelivery from "../../assets/projects/online Food delivery.png";
import ieducate from "../../assets/projects/iEducate -.png";
import clock from "../../assets/projects/Clock.png";
import cheatSheet from "../../assets/projects/cheatsheet.png";
import carAnimation from "../../assets/projects/Car Animation.png";
import calculator from "../../assets/projects/calculator.png";
import modernLogin from "../../assets/projects/Modern Login Page.png";
import loginPage from "../../assets/projects/Login page.png";
import tailwindPortfolio from "../../assets/projects/tailwindPort.png";
import adAnimation from "../../assets/projects/adAnimation.png";
import glaLogin from "../../assets/projects/glaLogin.png";
import errorMl from "../../assets/projects/errorMl.png";

export default function Projects() {

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
      <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        ></Flex>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="25px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={shoesavvy}
            projectName={"ShoeSavvy E-Commerce Website"}
            aboutProject={"A List of shoes products displayed in various categories. The user may browse through these items as per categories."}
            techStack={"REACT JS, HTML, CSS, JAVASCRIPT"}
            projectLiveLink="https://shoe-savvy-react-git-main-shivam-sonis-projects-da4d4d2d.vercel.app/"
            projectLink="https://github.com/Shivam-GLA/ShoeSavvy-React.git"
          />
          <ProjectCard
            projectImage={adAnimation}
            projectName={"Advertisement Animation"}
            aboutProject={"Elegant, eye-catching ad animation made with HTML and CSS for maximum visual impact."}
            techStack={"HTML, CSS"}
            projectLiveLink="https://advertisement-animation.vercel.app/"
            projectLink="https://github.com/Shivam-GLA/Advertisement-animation.git"
          />
          <ProjectCard
            projectImage={textAnalyzer}
            projectName={"Text Analyzer"}
            aboutProject={"A Word counter and a character counting utility which can be used to manipulate your text."}
            techStack={"REACT JS, HTML, CSS, JAVASCRIPT"}
            projectLiveLink="https://shivam-gla.github.io/Text-Analyzer/"
            projectLink="https://github.com/Shivam-GLA/Text-Analyzer.git"
          />
          <ProjectCard
            projectImage={glaLogin}
            projectName={"GLA Login Page"}
            aboutProject={"A attractive and mobile-friendly login and signup page for my College using modern web technologies."}
            techStack={"REACT JS, HTML, CSS, JAVASCRIPT"}
            projectLiveLink="https://gla-login-page.vercel.app/"
            projectLink="https://github.com/Shivam-GLA/GLA-Login-Page.git"
          />
          <ProjectCard
            projectImage={newsApi}
            projectName={"News App"}
            aboutProject={
              "I have using a News API to render news in our News Application & build by Class Based React Component."
            }
            techStack={"REACT JS, NewsAPI, HTML, CSS, JAVASCRIPT"}
            projectLiveLink="https://news-api-git-main-shivam-sonis-projects-da4d4d2d.vercel.app/"
            projectLink="https://github.com/Shivam-GLA/News-API.git"
          />
          <ProjectCard
            projectImage={microsoft}
            projectName={"Microsoft Clone"}
            aboutProject={"A simple Microsoft Clone Page by using Tailwindcss."}
            techStack={"Tailwindcss, HTML, CSS, JAVASCRIPT"}
            projectLiveLink="https://microsoft-clone-rosy-seven.vercel.app/"
            projectLink="https://github.com/Shivam-GLA/Microsoft-clone.git"
          />
          <ProjectCard
            projectImage={tailwindPortfolio}
            projectName={"Tailwind Portfolio Site"}
            aboutProject={"A Portfolio Site, Which tell more about me related to My Skills & Projects."}
            techStack={"REACT JS, Tailwindcss, HTML, CSS, JAVASCRIPT"}
            projectLiveLink="https://shivam-gla.github.io/Tailwind-portfolio/"
            projectLink="https://github.com/Shivam-GLA/Tailwind-portfolio.git"
          />
          <ProjectCard
            projectImage={facebook}
            projectName={"facebook Login Page"}
            aboutProject={"A simple facebook Login Page by using Tailwindcss."}
            techStack={"Tailwindcss, HTML, CSS, JAVASCRIPT"}
            projectLiveLink="https://facebook-login-page-pi.vercel.app/"
            projectLink="https://github.com/Shivam-GLA/Facebook_login_page.git"
          />
          <ProjectCard
            projectImage={spotify}
            projectName={"Spotify Clone"}
            aboutProject={"A Spotify Clone for listen your favourite Music."}
            techStack={"HTML, CSS, JAVASCRIPT"}
            projectLiveLink="https://spotify-clone-two-zeta.vercel.app/"
            projectLink="https://github.com/Shivam-GLA/Spotify-Clone.git"
          />
          <ProjectCard
            projectImage={windows11}
            projectName={"Windows 11 - dummy"}
            aboutProject={"A Windows 11 dummy Desktop having icons and Taskbar."}
            techStack={"HTML, CSS, JAVASCRIPT"}
            projectLiveLink="https://windows-11-dummy.vercel.app/"
            projectLink="https://github.com/Shivam-GLA/Windows-11-dummy.git"
          />
          <ProjectCard
            projectImage={tickTac}
            projectName={"Tic-tac-toe Game"}
            aboutProject={"A two-player game in which the objective is to take turns and mark the correct spaces in a 3X3 grid."}
            techStack={"HTML, CSS, JAVASCRIPT"}
            projectLiveLink="https://tic-tac-toe-game-seven-ruby.vercel.app/"
            projectLink="https://github.com/Shivam-GLA/Tic-Tac-Toe-Game.git"
          />
          <ProjectCard
            projectImage={portfolio}
            projectName={"Basic Portfolio"}
            aboutProject={"A simple Portfolio Which tell more about me related to My Skills & Projects."}
            techStack={"HTML, CSS, JAVASCRIPT"}
            projectLiveLink="https://html-portfolio-site.vercel.app/"
            projectLink="https://github.com/Shivam-GLA/Html-Portfolio-Site.git"
          />
          <ProjectCard
            projectImage={foodDelivery}
            projectName={"Food Delivery Site"}
            aboutProject={"A simple design, readable fonts and having fully responsive in all devices."}
            techStack={"HTML, CSS"}
            projectLiveLink="https://online-food-delivery-service-site.vercel.app/"
            projectLink="https://github.com/Shivam-GLA/online-Food-delivery-service-Site.git"
          />
          <ProjectCard
            projectImage={ieducate}
            projectName={"ieducate Site"}
            aboutProject={"Focus on a clean layout of Online Education Website, easy navigation, and mobile-friendly responsiveness."}
            techStack={"HTML, CSS, JAVASCRIPT"}
            projectLiveLink="https://online-education-site.vercel.app/"
            projectLink="https://github.com/Shivam-GLA/Online-Education-Site.git"
          />
          <ProjectCard
            projectImage={clock}
            projectName={"Analog Clock"}
            aboutProject={"A Analog Clock to display the current system time dynamically."}
            techStack={"HTML, CSS, JAVASCRIPT"}
            projectLiveLink="https://analog-clock-five-azure.vercel.app/"
            projectLink="https://github.com/Shivam-GLA/Analog-Clock.git"
          />
          <ProjectCard
            projectImage={cheatSheet}
            projectName={"Cheatsheet Copy Code"}
            aboutProject={"A way to define a code language in HTML file, where anyone can Copy the code easily."}
            techStack={"HTML, CSS, JAVASCRIPT, PRISM.JS"}
            projectLiveLink="https://cheatsheet-copy-code.vercel.app/"
            projectLink="https://github.com/Shivam-GLA/Cheatsheet-Copy-Code.git"
          />
          <ProjectCard
            projectImage={carAnimation}
            projectName={"Moving Car Animation"}
            aboutProject={"A moving car animation with HTML for layout, CSS for design, and JavaScript for motion control."}
            techStack={"HTML, CSS, JAVASCRIPT"}
            projectLiveLink="https://car-animation-jade.vercel.app/"
            projectLink="https://github.com/Shivam-GLA/Car-Animation.git"
          />
          <ProjectCard
            projectImage={loginPage}
            projectName={"Login Page"}
            aboutProject={"Create a simple login page using HTML for structure and CSS for styling and layout."}
            techStack={"HTML, CSS"}
            projectLiveLink="https://login-page-01-3stoj4g57-shivam-sonis-projects-da4d4d2d.vercel.app/"
            projectLink="https://github.com/Shivam-GLA/Login-Page-01.git"
          />
          <ProjectCard
            projectImage={calculator}
            projectName={"Calculator"}
            aboutProject={"Build a simple calculator with HTML for structure, CSS for styling, and JavaScript for functionality."}
            techStack={"HTML, CSS, JAVASCRIPT"}
            projectLiveLink="https://calculator-azure-eta-98.vercel.app/"
            projectLink="https://github.com/Shivam-GLA/Calculator.git"
          />
          <ProjectCard
            projectImage={modernLogin}
            projectName={"Modern Login Page"}
            aboutProject={"A login page using HTML for structure, CSS for styling and transitions, and JavaScript for dynamic effects."}
            techStack={"HTML, CSS, JAVASCRIPT"}
            projectLiveLink="https://modern-login-page-04-acu5s17gu-shivam-sonis-projects-da4d4d2d.vercel.app/"
            projectLink="https://github.com/Shivam-GLA/Modern-Login-Page-04.git"
          />
          <ProjectCard
            projectImage={errorMl}
            projectName={"Errors in ML"}
            aboutProject={"Developed an interactive, web-based presentation on ML error types using HTML, CSS, and JavaScript."}
            techStack={"HTML, CSS, JAVASCRIPT"}
            projectLiveLink="https://presentation-ml.vercel.app/"
            projectLink="https://github.com/Shivam-GLA/Presentation-ml.git"
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
