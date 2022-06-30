import React from "react";

export const HallButton = ({ id, hallButtonClick }) => {
  let floor = id === 0 ? "Ground Floor" : "Floor No. " + id;
  return (
    <>
      <div className="card card-body box2">
        <h5 className=" text-center">{floor}</h5>
        <button
          type="button"
          className="btn btn-outline-warning text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          value={id}
          onClick={(e) => hallButtonClick(e)}
        >
          /\
        </button>
        <button
          type="button"
          className="btn btn-outline-warning text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          value={id}
          onClick={(e) => hallButtonClick(e)}
        >
          \/
        </button>
      </div>
    </>
  );
};
