import "./Search.css";
import FilterIcon from "../../assets/image/Frame 5113.svg";
import SearchIcon from "../../assets/image/Untitled/search/Interface/Search_Magnifying_Glass.svg";
function Search() {
  function handleClick(){
    const filterElement = document.querySelector(".container-filter");
    filterElement.setAttribute("style", "right: 0;")
  }
    return(
        <>
        <div className="head-main">
          <div className="search-bar-component">
            <img src={SearchIcon} alt="img" className="search-ico" />
            <input
              type="text"
              className="search-inp"
              placeholder="Search appointments..."
            />
          </div>
          <img src={FilterIcon} alt="img" className="filter" onClick={handleClick} />
        </div>
        </>
    );
}
export default Search;