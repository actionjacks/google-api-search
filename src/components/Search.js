import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Search.css";
import YoutubeSearchedForIcon from "@material-ui/icons/YoutubeSearchedFor";
import { Button } from "@material-ui/core";
import { useStateValue } from "./../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };

  return (
    //   use form and button type=submit enter key can be used to submit
    <form className="search">
      <div className="serach__input">
        <YoutubeSearchedForIcon className="search__inputIcon" />
        <input
          placeholder="Chuck Norris will find for you"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search}>
            Chuck Norris Search
          </Button>
          <Button variant="outlined">Random Norris Search</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonHidden"
            type="submit"
            onClick={search}
          >
            Chuck Norris Search
          </Button>
          <Button className="search__buttonHidden" variant="outlined">
            Random Norris Search
          </Button>
        </div>
      )}
    </form>
  );
}
// 1:20
export default Search;
