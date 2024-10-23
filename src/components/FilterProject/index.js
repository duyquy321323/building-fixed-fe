import { useState } from "react";
import DrowdownIcon from "../../assets/image/chevron.svg";
import ArrowUp from "../../assets/image/up-arrow.png";
import "./FilterProject.css";

function FilterProject(props) {
  const { field, placeHolder, arrayOption } = props;
  const [hidden, setHidden] = useState(true);
  const [option, setOption] = useState(placeHolder);

  return (
    <>
      <div
        className={"container-fil-prj" + (hidden ? "" : " focus")}
        onClick={() => setHidden(!hidden)}
      >
        <div className="selection">
          <div className="title-filter-select">{field}</div>
          <div className="number-page">
            <div className={"select-btn select-op"}>
              {option}
              {hidden ? (
                <img
                  className="dropdown-ico"
                  src={DrowdownIcon}
                  alt="DrowdownIcon"
                />
              ) : (
                <img className="dropdown-ico up" src={ArrowUp} alt="ArrowUp" />
              )}
            </div>
            <div className={"dropdown" + (hidden ? " hidden" : "")}>
              {arrayOption.map((selectOption) => (
                <div
                  className="option-select"
                  onClick={() => {
                    setOption(selectOption);
                    setHidden(true);
                  }}
                >
                  {selectOption}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FilterProject;
