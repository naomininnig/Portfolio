import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobileM } from "../../responsive";
import { mobileS } from "../../responsive";
import { tablet } from "../../responsive";
import { lscreen } from "../../responsive";
import "./intro.css";

const Container = styled.div`
  display: flex;
  border-bottom: 0.5px solid rgba(204, 24, 87, 1);
  ${mobileM({ flexDirection: "column" })}
  ${tablet({
    marginTop: "30px",
    flexDirection: "column",
    alignItems: "center",
  })}
  ${lscreen({ height: "100vh" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobileM({ textAlign: "center" })}
  ${tablet({ textAlign: "center" })}
`;
const LeftWrapper = styled.div`
  padding-left: 150px;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobileM({
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
    paddingLeft: "20px",
    margin: "10px",
  })}
  ${tablet({
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "50px",
    height: "100%",
  })}
`;
const H1 = styled.h1`
  font-size: 80px;
  margin: 0px;
  ${mobileM({ fontSize: "39px", fontWeight: "600" })}
  ${tablet({ fontSize: "36px", fontWeight: "600" })}
`;

const H2 = styled.h2`
  font-size: 38px;
  ${mobileM({ fontSize: "22px" })}
  ${tablet({ fontSize: "28px", fontWeight: "400" })}
`;

//animation
const Title = styled.div`
  height: 50px;
  overflow: hidden;
  padding-bottom: 5px;
  ${mobileM({ textAlign: "center", alignItems: "center" })}
  ${tablet({ height: "40px", alignItems: "center" })}
`;

const TitleItem = styled.div`
  height: 50px;
  font-size: 32px;
  font-weight: bold;
  color: rgba(204, 24, 87, 1);
  display: flex;
  align-items: center;
  ${mobileM({
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  })}
  ${tablet({
    fontSize: "22px",
    alignItems: "center",
    justifyContent: "center",
  })}
`;

const TitleWrapper = styled.div``;
const Desc = styled.div`
  font-size: 28px;
  padding-top: 20px;

  ${mobileM({ fontSize: "24px" })}
  ${tablet({ fontSize: "20px" })}
`;

// const Button = styled.button`
//   color: #a47ca6;
//   border: #a47ca6 solid 2px;
//   border-radius: 8px;
//   margin: 10px 0px;
//   padding: 5px;
//   display: inline-block;
//   width: 30%;
//   padding: 10px;
//   font-size: 20px;
//   background-color: transparent;
//   cursor: pointer;
//   ${mobileM({ fontSize: "18px", padding: "3px", width: "25%" })}
//   ${mobileS({ fontSize: "16px", padding: "3px", width: "40%" })}
//   ${tablet({
//     fontSize: "18px",
//     padding: "1px",
//     width: "50%",
//     marginBottom: "40px",
//   })}
// `;
/////////////////////////////////////////

const Right = styled.div`
  flex: 1;
`;

const RightWrapper = styled.div``;
const Image = styled.img`
  opacity: 0.7;
  width: 90%;
  height: 90%;
  object-fit: cover;
  text-align: center;

  ${mobileM({ alignItems: "center", width: "100%" })}
  ${mobileS({ alignItems: "center", width: "100%" })}
  ${tablet({
    alignItems: "center",
    paddingTop: "0px",
    // paddingLeft: "120PX",
    width: "100%",
    height: "250px",
  })}
  ${lscreen({
    alignItems: "center",
    paddingTop: "180px",
    // paddingLeft: "120PX",
    width: "80%",
    height: "80%",
  })}
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <LeftWrapper>
          <H2>Hello, my name is</H2>
          <H1>Naomi Ninnig</H1>
          <Title>
            <TitleWrapper className="title-wrapper">
              <TitleItem>Web Developer</TitleItem>
              <TitleItem>UI/UX Designer</TitleItem>
              <TitleItem>Shopify developer</TitleItem>
              <TitleItem>MERN full stack</TitleItem>
              <TitleItem>Social Media & Content</TitleItem>
            </TitleWrapper>
          </Title>
          <Desc>
            I develop & design websites with care for the small details. My
            specialty is creating stylish, modern web services & online shops.
          </Desc>
          {/* <Button>
            {' '}
            <Link className="register-link" to='/signup'>Register </Link>{' '}
          </Button> */}
        </LeftWrapper>
      </Left>
      <Right>
        <RightWrapper>
          <Image src={process.env.PUBLIC_URL + "/images/NN (9).png"}></Image>
        </RightWrapper>
      </Right>
    </Container>
  );
};

export default Intro;
