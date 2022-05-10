import React from "react";
import styled from "styled-components";
import Themes from "./Themes";
import { ThemesImg } from "../data";
import { mobileM } from "../responsive";
import { mobileS } from "../responsive";
import { tablet } from "../responsive";

const Container = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  // background-color: #222;
  ${mobileM({ padding: "10px", paddingTop: "20px" })}
  ${tablet({ padding: "10px", paddingTop: "20px" })}
  border-bottom: 0.5px solid rgba(204, 24, 87, 1);
`;

const Texsts = styled.div`
  width: 65%;
  ${mobileM({ width: "100%" })}
`;
const H1 = styled.h1`
  font-size: 50px;
  font-weight: 600;
  ${mobileM({ fontSize: "39px" })}
  ${mobileS({ fontSize: "36px" })}
${tablet({ fontSize: "27px" })}
`;

const P = styled.p`
  margin: 20px 0px;
  font-size: 26px;
  ${mobileM({ fontSize: "24px" })}
  ${tablet({ fontSize: "17px" })}
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ThemeList = () => {
  return (
    <Container>
      <Texsts>
        <H1>Create & Inspire</H1>
        <P>
          I Create beautifull & succssesfull websites, fully responsive and up
          to the newest Technology trends.
        </P>
      </Texsts>
      <List>
        {ThemesImg.map((item) => (
          <Themes key={item.id} img={item.img} link={item.link} />
        ))}
      </List>
    </Container>
  );
};

export default ThemeList;
