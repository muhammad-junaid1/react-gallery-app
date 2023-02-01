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
`;

export default StyledHero;