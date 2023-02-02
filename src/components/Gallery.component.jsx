import StyledGallery from "./styled/StyledGallery.styled";
import Masonry from "react-masonry-css";
import "./styles/masonry.css";
import { useState } from "react";
import Popup from "./Popup.component";
import Overlay from "./styled/Overlay.styled";
import Image from "./Image.component";

const Gallery = ({imagesList, searchGallery, query}) => {
    const [popupInfo, setPopupInfo] = useState(false);

    const handleClick = (image) => {
        setPopupInfo(image);
    }
    return (
        <>
            <StyledGallery>
            {searchGallery && <h1 style={{marginBottom: 50}}>Search results for: "{query}"</h1>}
            <Masonry breakpointCols={3} className="my-masonry" columnClassName="my-masonry_column">
                {imagesList.length ? imagesList.map((image) => {
                    return <Image onClick={() => handleClick(image)} key={image.id} image={image}/>
            }) : <h1 style={{color: "red", textAlign: "center"}}>Nothing Found!</h1>}
                </Masonry>
            </StyledGallery>

            {popupInfo && <Popup image={popupInfo} setPopupInfo={setPopupInfo}/>}
            {popupInfo && <Overlay/>}
        </>
    );
}

export default Gallery;