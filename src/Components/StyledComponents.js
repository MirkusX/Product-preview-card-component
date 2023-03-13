import styled from "styled-components";
import image from "../Images/image.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const FlexContainer = styled.main`
  background-color: #f3eae3;
  min-height: 100vh;
  display: flex;
  align-items: center;
  @media (max-width: 811px) {
    align-items: flex-start;
  }
`;

export const CartIcon = styled(AiOutlineShoppingCart)`
  width: 17px;
  height: 17px;
`;

export const StyledSection = styled.section`
  display: flex;
  width: 40%;
  margin: 0 auto;
  @media (max-width: 811px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 1em;
  }
`;

export const StyledDiv = styled.div`
  padding: 1em 2em;
  text-align: left;
  width: 50%;
  background-color: white;
  border-radius: 0 10px 10px 0;
  @media (max-width: 811px) {
    border-radius: 0 0 10px 10px;
    width: 80%;
  }
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
   
    background: url(${image});
    background-size: cover;
    border-radius: 10px 0 0 10px;
   @media(max-width: 811px){
    height: 20em;
    background-position: right 35% bottom 60%;
    border-radius: 10px 10px 0 0;
   }`;
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
    width: 80%;
    color: #1C2027;
    `;
  }}
  ${(props) => {
    if (props.price)
      return `
    font-size: 2rem;
    letter-spacing: normal;
    margin: 0;
    color: #3D8369;`;
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
  font-weight: bold;
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
`;
