import StyledGallery from "./styled/StyledGallery.styled";
import Masonry from "react-masonry-css";
import "./styles/masonry.css";

const Gallery = ({imagesList, searchGallery, query}) => {
    return (
        <>
            <StyledGallery>
            {searchGallery && <h1 style={{marginBottom: 50}}>Search results for: "{query}"</h1>}
            <Masonry breakpointCols={3} className="my-masonry" columnClassName="my-masonry_column">
                {imagesList.map((image) => {
                    return <img key={image.id} src={image.urls.regular} alt={image.alt_description}/>
                })}
                </Masonry>
            </StyledGallery>
        </>
    );
}

export default Gallery;