import Announcment from "../componenets/Announcment";
import React, { useContext } from "react";
import { ThemeContext } from "../context";
import styled from "styled-components";
import { mobileM } from "../responsive";
import { mobileS } from "../responsive";
import { tablet } from "../responsive";
import { lscreen } from "../responsive";
import Toggle from "../componenets/Toggle";

const Li = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  padding: 5px 15px;
  color: rgba(204, 24, 87, 1);
  font-size: 22px;
  ${mobileM({})}
  ${tablet({})}
`;
const Ul = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  justify-content: space-between;

  ${mobileM({
    justifyContent: "center",
    flexWrap: "wrap",
  })}
  ${tablet({
    // width: "20%",
    // alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  })}
`;

const Container = styled.div`
  display: flex;
  overflow: hidden;
  ${mobileS({ flexDirection: "column" })}
  ${mobileM({ flexDirection: "column" })}
  ${tablet({ flexDirection: "column" })}
  ${lscreen({})}
  border-bottom: 0.5px solid rgba(204, 24, 87, 1);
`;

const Left = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
  text-align: center;
  ${mobileS({ textAlign: "center" })}
  ${mobileM({ textAlign: "center" })}
  ${tablet({ textAlign: "center" })}
`;

const Image = styled.img`
  width: 60%;
  height: 40%;
  object-fit: cover;
  text-align: center;
  border-radius: 10px;
  margin: 50px 20px;
  opacity: 0.8;
  ${mobileS({ width: "300px", height: "400px", padding: "0px" })}
  ${mobileM({ width: "300px", height: "400px", padding: "0px" })}
  ${tablet({ width: "300px", height: "400px", padding: "0px" })}
  ${lscreen({})}
`;
///////////////////////////////////
const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 400;
  padding-bottom: 10px;
  padding-top: 10px;
  ${mobileM({ fontSize: "28px" })}
  ${tablet({ fontSize: "23px" })}
`;

const Desc = styled.h3`
  font-size: 22px;
  font-weight: 300;
  width: 80%;
  text-align: center;
  ${mobileM({ fontSize: "20px", fontWeight: "400" })}
  ${tablet({ fontSize: "18px", width: "80%" })}
`;
const Experience = styled.div`
  text-align: center;
  padding-top: 20px;
  margin: 0 10%;
  ${mobileM({})}
  ${tablet({})}
`;

const TitleEx = styled.h2`
  text-align: center;
`;

const Projects = styled.div`
  border-top: 0.5px solid rgba(204, 24, 87, 1);
  text-align: center;
  overflow: hidden;
  padding-top: 20px;
`;
const P = styled.p`
  font-size: 18px;
  font-weight: 300;
`;

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#DCDCDC",
        color: darkMode && "#DCDCDC",
      }}
    >
      <Announcment />
      <h1 style={{ textAlign: "center", paddingTop: "20px" }}>About Me</h1>
      <Container>
        <Left>
          <Image src={process.env.PUBLIC_URL + "/images/IMG_0042.JPG"}></Image>
        </Left>
        <Right>
          <Title>Hi, im Naomi</Title>
          <Desc>
            Software developer with a proven ability to adapt in both self-
            starting and collaborative environments while staying focused on
            achieving high-quality results under strict deadlines. Eager to
            obtain a challenging position or a freelace project that will expand
            my learning and build up my developer skills.
          </Desc>
          <Title>MY EDUCATION</Title>
          <Desc>
            Full stack Development „DCI - Digital Career Insitute “ 11.05.2021 -
            11.05.2022
          </Desc>
          <Title>SKILLS AND KNOWLEDGE</Title>
          <Ul>
            <Li>Shopify(Liquid)</Li>
            <Li>JavaScript</Li>
            <Li>HTML</Li>
            <Li>CSS</Li>
            <Li>Sass</Li>
            <Li>Bootsrap</Li>
            <Li>React</Li>
            <Li>Node.js</Li>
            <Li>MongoDB</Li>
          </Ul>
          <Title>Language skills:</Title>
          <Ul>
            <Li>Hebrew (mother language) </Li>
            <Li>English (C1) </Li>
            <Li>German (B2)</Li>
          </Ul>
        </Right>
      </Container>

      <Experience>
        <TitleEx>RELEVANT EXPERIENCE AND EDUCATION</TitleEx>

        <P> 05/2021-05/2022 </P>
        <P>
          {" "}
          Certified further training as a web developer / software developer
          Full Stack software developer „DCI - Digital Career Insitute “ 01/2017
          until today Freelancer web developer and e-commerce, Online Shops
          creator
        </P>
        <P>09/2020-12/2020</P>
        <P>
          „Duke University“ Programming Basic knowledge JavaScript, HTML and CSS
          Learning basic knowledge in the field of programming via online
          training
        </P>
        <P>10/2015-04/2020</P>
        <P>
          Sardinen.Bar - Berlin Restaurant Manager, Management and coordination
          of the entire staff. Responsible for sales-increasing measures. Plan,
          organize and execute large events Responsible for recruitment,
          training and employee motivation.
        </P>
        <p>02/2006-02/2007</p>
        <P>
          Certified Chef from Bishulim Professional Cooking School, dishes from
          Italian, French, Thai and Mediterranean cuisine.
        </P>
      </Experience>
      <Projects>
        <h1>My Projects</h1>
        <P>
          Online Shop via Shopify:{" "}
          <a
            href={"https://www.sardinenbarberlin.com/"}
            style={{ color: "rgba(204, 24, 87, 1)" }}
          >
            Sardinen Bar
          </a>
        </P>
        <P>
          Online Shop via Shopify:{" "}
          <a
            href={"https://www.maitrephilippe.de/"}
            style={{ color: "rgba(204, 24, 87, 1)" }}
          >
            Maître Philippe & Filles
          </a>
        </P>
        <P>
          Online Shop via Shopify:{" "}
          <a
            href={"https://sardine.shop/"}
            style={{ color: "rgba(204, 24, 87, 1)" }}
          >
            Sardine.Shop B2B
          </a>
        </P>
        <P>
          Online Shop via Shopify:{" "}
          <a
            href={"https://herrkoch-feinekost.de/"}
            style={{ color: "rgba(204, 24, 87, 1)" }}
          >
            herrkoch-feinekost
          </a>
        </P>
        <P>
          Cooking Blog - Node.js{" "}
          <a
            href={"https://food-recipes-blog.herokuapp.com/"}
            style={{ color: "rgba(204, 24, 87, 1)" }}
          >
            Food Blog
          </a>
        </P>
        <P>
          Online Shop - React{" "}
          <a
            href={"https://react-e-commerce-dccf0.web.app/"}
            style={{ color: "rgba(204, 24, 87, 1)" }}
          >
            Soul Spice
          </a>
        </P>
      </Projects>
      <Toggle theme={theme} />
    </div>
  );
};

export default About;
