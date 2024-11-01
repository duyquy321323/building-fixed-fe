import { useEffect, useRef, useState } from "react";
import OptionIcon from "../../assets/image/Untitled (1)/Interface/Settings.svg";
import ArrowLeftIcon from "../../assets/image/Vector 19.svg";
import ArrowRightIcon from "../../assets/image/Vector 20.svg";
import DrowdownIcon from "../../assets/image/chevron.svg";
import ArrowUp from "../../assets/image/up-arrow.png";
import Filter from "../Filter";
import "./Table.css";

function Table(props) {
  const { headTables, dataTables } = props;
  const arrayOption = [5, 10, 15, 20, 30, 50];
  const [hidden, setHidden] = useState(true);
  const [pageNumber, setPageNumber] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(
    Math.ceil(Array.from(dataTables).length / pageNumber)
  );
  const arrPages = Array(pages).fill("");

  const inpAll = useRef(0);
  useEffect(() => {
    const inpData = document.querySelectorAll(".inp-data");
    if (inpAll.current) {
      inpAll.current.addEventListener("click", (e) => {
        for (let data of inpData) {
          data.checked = e.target.checked;
        }
      });
    }
  }, [dataTables]);

  useEffect(() => {
    setPages(Math.ceil(Array.from(dataTables).length / pageNumber));
  }, [pageNumber, dataTables]);

  function handleClick() {
    const inpData = document.querySelectorAll(".inp-data");
    for (let data of inpData) {
      if (!data.checked) {
        inpAll.current.checked = false;
        return;
      }
    }
    inpAll.current.checked = true;
  }

  useEffect(() => {
    const cells = document.querySelectorAll(".data-format");
    for (let cell of cells) {
      if (cell instanceof HTMLElement)
        cell.addEventListener("click", function () {
          cell.style.overflowX = "auto";
          cell.style.textOverflow = "inherit";
        });
    }
  }, [dataTables]);

  return (
    <>
      <div className="table-container">
        {Array.isArray(dataTables) ? (
          <>
            <table className="component-table">
              {Array.isArray(headTables) ? (
                <tr>
                  <th className="checkbox">
                    <input
                      type="checkbox"
                      className="inp-table"
                      id="inp-table"
                      ref={inpAll}
                    />
                  </th>
                  {Array.from(headTables).map((headTable, index) => {
                    return (
                      <th key={index} className="thead-value">
                        {headTable.field}
                      </th>
                    );
                  })}
                </tr>
              ) : (
                <></>
              )}
              {Array.from(dataTables).map((dataTable, index) => {
                const startIndex = (currentPage - 1) * pageNumber;
                return (
                  <tr
                    key={index}
                    className={
                      index >= startIndex && index < startIndex + pageNumber
                        ? ""
                        : "hidden-row"
                    }
                  >
                    <td className="checkbox">
                      <input
                        type="checkbox"
                        className="inp-data"
                        onClick={handleClick}
                      />
                    </td>
                    {Object.entries(dataTable).map((data, index) => {
                      return (
                        <td key={index} className={"data-format"}>
                          {Array.from(headTables).map((value) =>
                            value.name === data[0] ? data[1] : <></>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </table>
            <div className="foot-main">
              <div className="option">
                <img src={OptionIcon} alt="OptionIcon" />
              </div>
              <div className="number-page">
                <div
                  className={"select-btn" + (hidden ? "" : " focus")}
                  onClick={() => setHidden(!hidden)}
                >
                  {pageNumber}
                  {hidden ? (
                    <img
                      className="dropdown-ico"
                      src={DrowdownIcon}
                      alt="DrowdownIcon"
                    />
                  ) : (
                    <img
                      className="dropdown-ico up"
                      src={ArrowUp}
                      alt="ArrowUp"
                    />
                  )}
                </div>
                <div className={"dropdown" + (hidden ? " hidden" : "")}>
                  {arrayOption.map((selectOption) => (
                    <div
                      className="option-select"
                      onClick={() => {
                        setPageNumber(selectOption);
                        setHidden(true);
                        setCurrentPage(1);
                      }}
                    >
                      {selectOption}
                    </div>
                  ))}
                </div>
                <div className="show-page">Show on page</div>
              </div>
              <div className="nav-table">
                <p>Page</p>
                <div className="nav-bar">
                  <div
                    className={
                      "ico-container" + (currentPage !== 1 ? "" : " visible")
                    }
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    <img
                      src={ArrowLeftIcon}
                      alt="ArrowIcon"
                      className="arrow-left-ico"
                    />
                  </div>
                  <div className="num-of-page">
                    {pages <= 5 ? (
                      <>
                        {arrPages.map((_, index) => {
                          return (
                            <>
                              {}
                              <div
                                className={
                                  "btn-nav" +
                                  (currentPage === index + 1
                                    ? " active-current"
                                    : "")
                                }
                                onClick={() => setCurrentPage(index + 1)}
                              >
                                {index + 1}
                              </div>
                            </>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        <div
                          className={
                            "btn-nav" +
                            (currentPage === 1 ? " active-current" : "")
                          }
                          onClick={() => setCurrentPage(1)}
                        >
                          1
                        </div>
                        <div
                          className={
                            "btn-nav" +
                            (currentPage === 2 ? " active-current" : "")
                          }
                          onClick={() =>
                            setCurrentPage(currentPage <= 3 ? 2 : currentPage)
                          }
                        >
                          {currentPage <= 3 ? "2" : "..."}
                        </div>
                        <div
                          className={
                            "btn-nav" +
                            (currentPage >= 3 && currentPage <= pages - 2
                              ? " active-current"
                              : "")
                          }
                          onClick={() =>
                            setCurrentPage(
                              currentPage <= 3
                                ? 3
                                : currentPage >= pages - 2
                                ? pages - 2
                                : currentPage
                            )
                          }
                        >
                          {currentPage <= 3
                            ? "3"
                            : currentPage >= pages - 2
                            ? pages - 2
                            : currentPage}
                        </div>
                        <div
                          className={
                            "btn-nav" +
                            (currentPage === pages - 1 ? " active-current" : "")
                          }
                          onClick={() =>
                            setCurrentPage(
                              currentPage >= pages - 2 ? pages - 1 : currentPage
                            )
                          }
                        >
                          {currentPage >= pages - 2 ? pages - 1 : "..."}
                        </div>
                        <div
                          className={
                            "btn-nav" +
                            (currentPage === pages ? " active-current" : "")
                          }
                          onClick={() => setCurrentPage(pages)}
                        >
                          {pages}
                        </div>
                      </>
                    )}
                  </div>
                  <div
                    className={
                      "ico-container" +
                      (currentPage !== pages ? "" : " visible")
                    }
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    <img
                      src={ArrowRightIcon}
                      alt="ArrowIcon"
                      className="arrow-right-ico"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <Filter />
    </>
  );
}

export default Table;
