import React from "react";
import styled from "styled-components";
import { mobileM } from "../responsive";
import { mobileS } from "../responsive";
import { tablet } from "../responsive";

const Container = styled.div`
  height: 60px;
  background: linear-gradient(
    36deg,
    rgba(57, 56, 59, 1) 0%,
    rgba(112, 29, 58, 1) 43%,
    rgba(204, 24, 87, 1) 84%,
    rgba(206, 42, 100, 1) 92%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 500;
  color: #dcdcdc;
  ${mobileM({ textAlign: "center", fontSize: "19px" })}
  ${mobileS({ textAlign: "center", fontSize: "16px" })}
${tablet({ textAlign: "center", fontSize: "20px" })}
`;
const Announcment = () => {
  return (
    <Container>
      "All our dreams can come true, if we have the courage to pursue them" Walt
      disney
    </Container>
  );
};

export default Announcment;
