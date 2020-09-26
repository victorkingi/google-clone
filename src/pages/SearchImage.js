import React, {useEffect} from "react";
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";
import "./SearchImage.css";

function SearchImage() {
    const [{ data }, dispatch] = useStateValue();

    useEffect(() => {
        dispatch({
            type: actionTypes.SET_IMAGES,
            data
        });

    }, [dispatch, data]);

    return (
        <div className="row">
            <div>
                {data?.items?.map(item => (
                    <div className="column">
                        {item.pagemap?.cse_image?.length > 0 ?
                            (<div><a href={item.link}>
                                <img
                                    className="searchPage_resultImage"
                                    src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                                    alt={item.title}
                                />
                            </a>
                                <a href={item.link}>{item.displayLink}</a>
                            </div>) : (<div>

                            </div>)}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchImage;
