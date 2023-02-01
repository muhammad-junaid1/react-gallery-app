import {useEffect, useReducer} from "react";
import StyledHero from "./components/styled/Hero.styled";
import Gallery from "./components/Gallery.component";
import SearchBar from "./components/SearchBar.component";
import {Routes, Route} from "react-router-dom";
import SearchGallery from "./components/SearchGallery.component";

const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY || "";

const ACTIONS = {
  SET_HERO_BG: "SET_HERO_BG",
  SET_IMAGES_LIST: "SET_IMAGES_LIST",
  SET_SEARCH_IMAGES_LIST: "SET_SEARCH_IMAGES_LIST"
};

const reducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.SET_HERO_BG:
      return {...state, heroBgImage: action.payload};

    case ACTIONS.SET_IMAGES_LIST:
      return {...state, imagesList: action.payload};

    case ACTIONS.SET_SEARCH_IMAGES_LIST:
      return {...state, searchImagesList: action.payload};


    default:
      console.log("Unhandled action in reducer.");
      return state;
  }
}

const initialState = {
  searchQuery: "",
  filter: "",
  imagesList: [],
  searchImagesList: [],
  heroBgImage: "",
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getRandomImage();
    getRandomFeedImages();
  }, []);

  const getRandomImage = async () => {
    try {
      const response = await fetch("https://api.unsplash.com/photos/random?query=nature", {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`
        },
      });
      const data = await response.json();

      const imgUrl = data.urls.regular;
      dispatch({type: ACTIONS.SET_HERO_BG, payload: imgUrl});
    } catch (error) {
      console.log(error); 
    }
  }

  const getRandomFeedImages = async () => {
    try {
      const response = await fetch("https://api.unsplash.com/photos/?per_page=25", {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`
        },
      }); 
      const data = await response.json();
      dispatch({type: ACTIONS.SET_IMAGES_LIST, payload: data});
    } catch (error) {
      console.log(error);
    }
  }

    const getSearchImages = async (query) => {
        try {
           const response = await fetch(`https://api.unsplash.com/search/photos/?query=${query}&per_page=25`, {
              headers: {
                Authorization: `Client-ID ${ACCESS_KEY}`
              },
           }); 
           const data = await response.json();
           dispatch({type: ACTIONS.SET_SEARCH_IMAGES_LIST, payload: data.results});
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
       <StyledHero bg={state.heroBgImage}>
          <SearchBar/> 
       </StyledHero>

      <Routes>
        <Route path="/" element={<Gallery imagesList={state.imagesList}/>}/>
        <Route path="/search/:query" element={<SearchGallery getSearchImages={getSearchImages} imagesList={state.searchImagesList}/>}/>
      </Routes>
    </>
  );
}

export default App;