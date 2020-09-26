import React, {useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./Search.css";
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";

function Search({ hideButtons = false }) {
    const [input, setInput] = useState('');
    const [, dispatch] = useStateValue();
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        history.push('/search');
    }

    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon className="search_inputIcon" />
                <input value={input} onChange={(e) => setInput(e.target.value)} />
                <MicIcon />
            </div>
            {
                !hideButtons ? (
                    <div className="search_buttons">
                        <Button onClick={search} type="submit" variant="outlined">Google Search</Button>
                        <Button onClick={() => {window.location.href = "https://www.google.com/doodles/"}} variant="outlined">I'm Feeling Lucky</Button>
                    </div>
                ) : (
                    <div className="search_buttons">
                        <Button className="search_buttonsHidden" onClick={search} type="submit" variant="outlined">Google Search</Button>
                        <Button className="search_buttonsHidden" onClick={() => {window.location.href = "https://www.google.com/doodles/"}} variant="outlined">I'm Feeling Lucky</Button>
                    </div>
                )
            }
        </form>
    )
}

export default Search;