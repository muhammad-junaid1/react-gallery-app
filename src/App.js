import {useEffect, useReducer} from "react";
import StyledHero from "./components/styled/Hero.styled";
import SearchBar from "./components/SearchBar.component";

const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY || "";

const ACTIONS = {
  SET_HERO_BG: "SET_HERO_BG"
};

const reducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.SET_HERO_BG:
      return {...state, heroBgImage: action.payload};

      default:
        console.log("Unhandled action in reducer.");
        return state;
  }
}

const initialState = {
  searchQuery: "",
  filter: "",
  imagesData: [],
  heroBgImage: "",
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getRandomImage();
  }, []);

  const getRandomImage = async () => {
    try {
      const response = await fetch(`https://api.unsplash.com/photos/random?query=nature"`, {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`
        },
      });
      const data = await response.json();
      
      const imgUrl = data.urls.full;
      dispatch({type: ACTIONS.SET_HERO_BG, payload: imgUrl});
    } catch (error) {
      console.log(error); 
    }
  }

  return (
    <>
       <StyledHero bg={state.heroBgImage}>
          <SearchBar/> 
       </StyledHero>
    </>
  );
}

export default App;