import StyledFeed from "./styled/StyledFeed.styled";

const Feed = ({imagesList}) => {
    return (
        <>
            <StyledFeed>
                {imagesList.map((image) => {
                    return <img key={image.id} src={image.urls.regular} alt={image.alt_description}/>
                })}
            </StyledFeed>
        </>
    );
}

export default Feed;