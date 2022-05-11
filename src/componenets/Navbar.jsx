// import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobileS } from "../responsive";
import { mobileM } from "../responsive";
import { tablet } from "../responsive";
import { ThemeContext } from "../context";
import React, { useContext } from "react";

const Container = styled.div`
  height: 100px;
  width: 100%;
  ${mobileM({ height: "100px" })}
`;

//parent for left center right
const Wrapper = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobileM({ padding: "10px 0px" })}
`;
//letf nav bar
// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   ${mobileM({ display: "none" })}
// `;
// const Language = styled.span`
//   padding-left: 150px;
//   font-size: 14px;
//   cursor: pointer;
//   display: none;
//   ${tablet({ display: "none" })}
// `;
// const SearchContainer = styled.div`
//   border: 0.5px solid #252525;
//   border-radius: 5px;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
//   ${tablet({ marginLeft: "5px" })}
// `;
// const Input = styled.input`
//   border: none;
//   background: none;
//   ${mobileM({ width: "60px" })}
//   ${tablet({ width: "80px" })}
// `;
//center/logo nav bar
const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobileM({
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "10px;",
  })}
  ${tablet({ display: "flex", justifyContent: "flex-start" })}
`;
const LogoDiv = styled.img`
  height: 110px;
  object-fit: cover;
  ${mobileM({
    width: "180px",
    height: "80px",
    justifyContent: "flex-start",
  })}
  ${tablet({ width: "160px", height: "100px", justifyContent: "flex-start" })}
`;

//right nav bar
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobileM({ flex: "1" })}
`;

const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 30px;
  ${mobileM({ fontSize: "17px", marginLeft: "10px", marginTop: "10px" })}
  ${mobileS({
    fontSize: "15px",
    marginLeft: "10px",
    marginTop: "10px",
    marginRight: "10px;",
  })}
    ${tablet({ fontSize: "16px", marginTop: "10px" })};
`;

const Navbar = () => {
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
        {/* <Toggle theme={theme} /> */}
        <Wrapper>
          <Center>
            <Link to={"/"}>
              <LogoDiv
                src={process.env.PUBLIC_URL + "/images/NN (7).png"}
              ></LogoDiv>
            </Link>
          </Center>
          <Right>
            <MenuItem>
              <Link
                to="/about"
                style={{
                  textDecoration: "none",
                  color: "rgba(204, 24, 87, 1)",
                }}
              >
                About
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  color: "rgba(204, 24, 87, 1)",
                }}
              >
                Contact
              </Link>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
