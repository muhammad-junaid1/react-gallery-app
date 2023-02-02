import styled from "styled-components";

const StyledGallery = styled.div`
  max-width: 80%;
  margin: 80px auto;

    img {
        max-width: 100%;
        margin-bottom: 14px;
        border-radius: 20px;
        cursor: pointer;
        transition: transform .1s ease-in-out;

        &:hover {
          transform: scale(0.98);
        }
    }
`;

export default StyledGallery;
