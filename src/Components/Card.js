import { StyledImage, StyledSection } from "./StyledComponents";
import image from "../Images/image.jpg";

export const Card = () => {
  return (
    <StyledSection>
      <div>
        <StyledImage src={image} />
      </div>
      <div>
        <h1>Perfume</h1>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <h1>$149.99</h1>
        <button>Add to cart</button>
      </div>
    </StyledSection>
  );
};
