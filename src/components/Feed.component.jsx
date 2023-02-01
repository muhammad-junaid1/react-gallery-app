import StyledFeed from "./styled/StyledFeed.styled";
import Masonry from "react-masonry-css";
import "./styles/masonry.css";

const Feed = ({imagesList}) => {
    return (
        <>
            <StyledFeed>
            <Masonry breakpointCols={3} className="my-masonry" columnClassName="my-masonry_column">
                {imagesList.map((image) => {
                    return <img key={image.id} src={image.urls.regular} alt={image.alt_description}/>
                })}
                </Masonry>
            </StyledFeed>
        </>
    );
}

export default Feed;