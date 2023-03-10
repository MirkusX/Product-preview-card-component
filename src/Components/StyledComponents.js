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
`;

export const StyledH1 = styled.h1`
  letter-spacing: 5px;
  ${(props) => {
    if (props.name)
      return `
    letter-spacing: normal;
    font-size: 2.8rem;
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
  line-height: 2em;
`;

export const StyledPStrike = styled.p`
  text-decoration: line-through;
`;

export const StyledButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding: 1em;
  width: 90%;
  margin: 0 auto;
`;
