
const Image = ({image, onClick}) => {
    return (
        <>
            <img onClick={onClick} src={image.urls.regular} alt={image.alt_description}/>
        </>
    );
}

export default Image;