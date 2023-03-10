import styled from "styled-components";

export const StyledImage = styled.img`
  width: 100%;
`;

export const StyledSection = styled.section`
  display: flex;
  width: 50%;
  margin: 0 auto;
`;

export const StyledDiv = styled.div`
  padding: 1em;
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
   `;
  }}
  ${(props) => {
    if (props.imageContainer)
      return `
    padding: 0;`;
  }}
`;

export const StyledH1 = styled.h1`
  letter-spacing: 5px;
  ${(props) => {
    if (props.name)
      return `
    letter-spacing: normal;
    font-size: 3rem;
   margin: 0;
    `;
  }}
  ${(props) => {
    if (props.price)
      return `
    font-size: 2rem;
    letter-spacing: normal;`;
  }}
`;

export const StyledP = styled.p`
  line-height: 1.5em;
`;

export const StyledPStrike = styled.p`
  text-decoration: line-through;
`;

export const StyledButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding: 1em;
  width: 100%;
  border-radius: 5px;
`;
