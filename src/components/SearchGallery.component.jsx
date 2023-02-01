import {useEffect} from "react";
import Gallery from "./Gallery.component";
import {useParams} from "react-router-dom";

const SearchGallery = ({getSearchImages, imagesList}) => {
    const {query} = useParams();

    useEffect(() => {
        getSearchImages(query);
    }, [query, getSearchImages]);

    return (
        <>
            <Gallery searchGallery query={query} imagesList={imagesList}/>
        </>
    );
}

export default SearchGallery;