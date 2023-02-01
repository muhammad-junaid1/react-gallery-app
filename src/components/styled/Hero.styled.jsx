import styled from "styled-components";

const StyledHero = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: #ddd;
    height: 70vh;
    background-image: url(${({bg}) => bg});
    background-repeat: none;
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.4);
    background-blend-mode: overlay;
`;

export default StyledHero;