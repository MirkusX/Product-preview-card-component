import {
  StyledButton,
  StyledDiv,
  StyledH1,
  StyledImage,
  StyledP,
  StyledPStrike,
  StyledSection,
} from "./StyledComponents";
import image from "../Images/image.jpg";

export const Card = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <StyledImage src={image} />
      </StyledDiv>
      <StyledDiv>
        <StyledH1>PERFUME</StyledH1>
        <StyledH1 name>Gabrielle Essence Eau De Parfum</StyledH1>
        <StyledP>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </StyledP>
        <StyledDiv priceContainer>
          <StyledH1 price>$149.99</StyledH1>
          <StyledPStrike>$169.99</StyledPStrike>
        </StyledDiv>
        <StyledButton>Add to cart</StyledButton>
      </StyledDiv>
    </StyledSection>
  );
};
