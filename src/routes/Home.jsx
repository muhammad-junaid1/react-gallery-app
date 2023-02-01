import StyledHero from "../components/styled/Hero.styled";
import SearchBar from "../components/SearchBar.component";
import {Outlet} from "react-router-dom";

const Home = ({state}) => {
    return (
        <>
       <StyledHero bg={state.heroBgImage}>
          <SearchBar/> 
       </StyledHero>

       <Outlet/>
        </>
    );
}

export default Home;