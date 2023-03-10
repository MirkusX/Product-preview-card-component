import {
  CartIcon,
  FlexContainer,
  StyledButton,
  StyledDiv,
  StyledH1,
  StyledP,
  StyledPStrike,
  StyledSection,
} from "./StyledComponents";

export const Card = () => {
  return (
    <FlexContainer>
      <StyledSection>
        <StyledDiv imageContainer />
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
          <StyledButton>
            <CartIcon />
            Add to cart
          </StyledButton>
        </StyledDiv>
      </StyledSection>
    </FlexContainer>
  );
};
