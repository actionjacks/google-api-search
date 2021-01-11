import React from "react";
import "../styles/SearchPage.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";
import { useStateValue } from "./../StateProvider";
import useGoogleSearch from "./../useGoogleSearch";
// for test downladed response from API google
import response from "../response";
import Search from "./../components/Search";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import DescriptionIcon from "@material-ui/icons/Description";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  // const data = response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img src="../chuck.jpg" alt="" className="searchPage__logo" />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <FindInPageIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <WbIncandescentIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <NavigateNextIcon />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchPage__optionRight">
              <div className="searchPage__option">
                <Link to="/settings">Setting</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/Tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCoun">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime.formattedSearchTime}
            seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={
                        item.pagemap?.cse_image.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                    />
                  )}
                {item.displayLink}
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                {item.displayLink}
                <h2>{item.titel}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
