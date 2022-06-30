import React from "react";

export const Alert = ({ selectTheFloor }) => {
  return (
    <>
      <div className="mx-auto">
        <div className="alert alert-warning " role="alert">
          <h4 className="alert-heading">Greetings !!</h4>
          <p>Enter the Floor you want to go .....</p>
          <hr />
          <button
            type="button"
            className="btn btn-outline-dark"
            value={0}
            onClick={(e) => selectTheFloor(e)}
          >
            0
          </button>
          <button
            type="button"
            className="btn btn-outline-dark"
            value={1}
            onClick={(e) => selectTheFloor(e)}
          >
            1
          </button>
          <button
            type="button"
            className="btn btn-outline-dark"
            value={2}
            onClick={(e) => selectTheFloor(e)}
          >
            2
          </button>
          <button
            type="button"
            className="btn btn-outline-dark"
            value={3}
            onClick={(e) => selectTheFloor(e)}
          >
            3
          </button>
          <button
            type="button"
            className="btn btn-outline-dark"
            value={4}
            onClick={(e) => selectTheFloor(e)}
          >
            4
          </button>
          <button
            type="button"
            className="btn btn-outline-dark"
            value={5}
            onClick={(e) => selectTheFloor(e)}
          >
            5
          </button>
          <button
            type="button"
            className="btn btn-outline-dark"
            value={6}
            onClick={(e) => selectTheFloor(e)}
          >
            6
          </button>
          <button
            type="button"
            className="btn btn-outline-dark"
            value={7}
            onClick={(e) => selectTheFloor(e)}
          >
            7
          </button>
        </div>
      </div>
    </>
  );
};
