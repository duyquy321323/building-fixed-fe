import CloseIcon from "../../assets/image/Vector.svg";
import "./Filter.css";

function Filter() {
  const arrFilterTitle = ["Full Name", "Last Name", "Mid Name"];
  const arrPlaceHolder = ["full name", "last name", "mid name"];
  function handleClose() {
    const filterElement = document.querySelector(".container-filter");
    filterElement.setAttribute("style", "right: -100%");
  }
  return (
    <>
      <div className="container-filter">
        <div className="close-filter" onClick={handleClose}>
          <div className="close-block">
            <img src={CloseIcon} alt="CloseIcon" />
          </div>
        </div>
        <div className="title-filter">
          <p>Property Filter</p>
        </div>
        <div className="list-filter">
          {arrFilterTitle.map((filterTitle, index) => (
            <div className="container-field">
              <div className="title-field">{filterTitle}</div>
              <div className="value-field">
                <input placeholder={"Enter " + arrPlaceHolder[index]} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Filter;
