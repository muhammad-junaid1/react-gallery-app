import StyledHero from "../components/styled/Hero.styled";
import SearchBar from "../components/SearchBar.component";
import {Outlet, Link} from "react-router-dom";
import StyledLogo from "../components/styled/StyledLogo.styled";
import Logo from "../assets/logo.png";

const Home = ({state}) => {
    return (
        <>
       <StyledHero bg={state.heroBgImage}>
        <StyledLogo>
            <Link to="/"><img src={Logo} width="50px" alt="Logo"/></Link>
            </StyledLogo>
          <SearchBar/> 
       </StyledHero>
       <Outlet/>
        </>
    );
}

export default Home;