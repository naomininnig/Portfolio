import {
  EmailOutlined,
  GitHub,
  Instagram,
  LinkedIn,
  Phone,
  Room,
} from "@material-ui/icons";

import styled from "styled-components";
// import { Link } from "react-router-dom";
import { mobileM } from "../responsive";
import { tablet } from "../responsive";
import React, { useContext } from "react";
import { ThemeContext } from "../context";

const Container = styled.div`
  border-top: 0.5px solid rgba(204, 24, 87, 1);
  display: flex;
  overflow: hidden;
  ${mobileM({ flexDirection: "column" })}
  ${tablet({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.img`
  width: 200px;
  height: 150px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  width: 80%;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Copy = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
font-size:18px;
font-weight;400;
padding:15px;
border-top: 1px solid rgba(204, 24, 87, 1);

`;
// const Center = styled.div`
//   flex: 1;
//   padding: 20px;
// `;
const Title = styled.h3`
  margin-bottom: 30px;
`;

// const List = styled.ul`
//   margin: 0;
//   padding: 0;
//   list-style: none;
//   display: flex;
//   flex-direction: column;
// `;

// const ListItem = styled.li`
//   margin-bottom: 10px;
//   display: flex;
//   align-items: center;
// `;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#DCDCDC",
        color: darkMode && "#DCDCDC",
      }}
    >
      <Container>
        <Left>
          <Logo src={process.env.PUBLIC_URL + "/images/NN (7).png"}></Logo>
          <Desc>
            My passion are builduing websites, learning new technologies &
            making dreams come true for my clients! I love to code!
          </Desc>
          <SocialContainer>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/naomi-ninnig-561060217/"
            >
              <SocialIcon style={{ backgroundColor: "rgba(112, 29, 58, 1)" }}>
                <LinkedIn />
              </SocialIcon>
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/naomi_ninnig/"
            >
              <SocialIcon style={{ backgroundColor: "rgba(204, 24, 87, 1)" }}>
                <Instagram />
              </SocialIcon>
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/naomininnig"
            >
              <SocialIcon style={{ backgroundColor: "rgba(206, 42, 100, 1)" }}>
                <GitHub />
              </SocialIcon>
            </a>
          </SocialContainer>
        </Left>

        <Right>
          <Title>Contact</Title>
          <ContactItem>
            {" "}
            <Room style={{ marginRight: "10px" }} />
            Berlin | Germany
          </ContactItem>
          <ContactItem>
            {" "}
            <Phone style={{ marginRight: "10px" }} />
            +49 015170233187
          </ContactItem>
          <ContactItem>
            {" "}
            <EmailOutlined style={{ marginRight: "10px" }} />
            naomi.ninnig@gmail.com
          </ContactItem>
        </Right>
      </Container>
      <Copy>&copy; 2022 Naomi Ninnig Web Development</Copy>
    </div>
  );
};

export default Footer;
