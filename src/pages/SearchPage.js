import React, {useEffect} from "react";
import "./SearchPage.css";
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";
import SearchPageContent from "./SearchPageContent";
import Header from "../components/Header";
import useGoogleSearch from "../useGoogleSearch";

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    useEffect(() => {
        dispatch({
            type: actionTypes.SET_IMAGES,
            data
        });

    }, [data, dispatch]);

    return (
        <div className='searchPage'>
            <Header />
            <SearchPageContent />
        </div>
    )
}

export default SearchPage;
