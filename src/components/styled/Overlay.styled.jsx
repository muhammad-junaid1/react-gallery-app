import styled from "styled-components"

const StyledOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    z-index: 100;
`;

export default StyledOverlay;