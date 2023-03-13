import styled from "styled-components";
import image from "../Images/image.jpg";

export const StyledImage = styled.img`
  width: 100%;
`;

export const StyledSection = styled.section`
  display: flex;
  width: 40%;
  margin: 0 auto;
`;

export const StyledDiv = styled.div`
  padding: 1em 2em;
  text-align: left;
  width: 50%;
  background-color: white;

  ${(props) => {
    if (props.priceContainer)
      return `
    padding: 0;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1em;
    margin-bottom: 1em;
   `;
  }}
  ${(props) => {
    if (props.imageContainer)
      return `
    padding: 0;
    background: url(${image});
    background-size: cover;`;
  }}
`;

export const StyledH1 = styled.h1`
  letter-spacing: 5px;
  font-size: 0.8rem;
  color: #9b9c9f;
  ${(props) => {
    if (props.name)
      return `
    margin: 0;
    letter-spacing: normal;
    font-size: 2rem;
    width: 70%;
    `;
  }}
  ${(props) => {
    if (props.price)
      return `
    font-size: 2rem;
    letter-spacing: normal;
    margin: 0;`;
  }};
`;

export const StyledP = styled.p`
  line-height: 1.5em;
`;

export const StyledPStrike = styled.p`
  text-decoration: line-through;
`;

export const StyledButton = styled.button`
  background-color: #184031;
  color: white;
  border: none;
  padding: 1em;
  width: 100%;
  border-radius: 5px;
`;
