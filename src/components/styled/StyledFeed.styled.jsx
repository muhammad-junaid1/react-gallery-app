import styled from "styled-components";

const StyledFeed = styled.div`
  max-width: 80%;
  margin: 80px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 12px;

    img {
        max-width: 100%;
    }
`;

export default StyledFeed;
