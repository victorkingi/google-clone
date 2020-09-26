import React, {useEffect} from "react";
import {actionTypes} from "../reducer";
import {useStateValue} from "../StateProvider";

function SearchPageContent() {
    const [{ term, data }, dispatch] = useStateValue();

    useEffect(() => {
        dispatch({
            type: actionTypes.SET_IMAGES,
            data
        });

    }, [data, dispatch]);

    return (
        <div>
            {
                term && (
                    <div className="searchPage_results">
                        <p className="searchPage_resultCount">
                            About {data?.searchInformation.totalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                        </p>

                        {data?.items.map(item => (
                            <div
                                className='searchPage_result'>
                                <a href={item.link}>
                                    {item.pagemap?.cse_image?.length > 0 &&
                                    <img
                                        className="searchPage_resultImage"
                                        src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                                        alt={item.title}
                                    />
                                    }
                                    {item.displayLink}
                                </a>
                                <a className="searchPage_resultTitle" href={item.link}>
                                    <h2>{item.title}</h2>
                                </a>
                                <p className="searchPage_resultSnippet">
                                    {item.snippet}
                                </p>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default SearchPageContent;
