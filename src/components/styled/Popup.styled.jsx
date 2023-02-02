import styled from "styled-components";
import StyledSvg from "./StyledSvg.styled";

const StyledPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background: white;
  padding: 30px;
  border-radius: 8px;
  z-index: 500;
  .user {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    img {
      border-radius: 50%;
      width: 40px;
      object-fit: cover;
      margin-right: 6px;
    }
  }
  img {
    width: 100%;
    height: 80%;
    object-fit: contain;
  }

  ${StyledSvg} {
    top: 25px;
    right: 20px;
    cursor: pointer;
  }
`;

export default StyledPopup;
