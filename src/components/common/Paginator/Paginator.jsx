import React from "react";
import "./Paginator.scss";
import { useState } from "react";

const Paginator = ({
  onPageChanged,
  totalUsersCount,
  totalItemsCount,
  pageSize,
  currentPage,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize) || 2;

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNUmber = portionNumber * portionSize;

  return (
    <div className="pagination">
      {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber -1)}} >Prev</button>}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNUmber
        )
        .map((p) => {
          return (
            <span
              className={currentPage === p && "selected-page"}
              key={p}
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
        
        {portionNumber > portionNumber && <button onClick={() => {setPortionNumber(portionNumber +1)}} >Next</button>}

      {/* {pages.map((p) => {
        return (
          <span
            className={currentPage === p && "selected-page"}
            onClick={(e) => {
              onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })} */}
    </div>
  );
};

export default Paginator;
