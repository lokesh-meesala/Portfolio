
import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const { Img, title } = props;
  return (
    <Container>
      <span className="green">
        <Img />
      </span>
      <h3>{title}</h3>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 90%;
  background: #191923;
  padding: 1rem;
  text-align: center;
  span {
    font-size: 4rem;
  }

  h3 {
    font-size: 1rem;
    padding-bottom: 1rem;
  }
`;
