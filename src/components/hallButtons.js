import React from "react";
import { HallButton } from "./hallButton";
export const HallButtons = ({
  maxFloor,
  minFloor,
  curFloor,
  inside,
  outside,
  hallButtonClick,
}) => {
  return (
    <>
      <div className="hall">
        <a
          className="btn btn btn-outline-warning"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          Hall-Buttons
        </a>
        <div
          className="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h4 className="offcanvas-title" id="offcanvasExampleLabel">
              Hall Buttons
            </h4>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          {/* body of offcanvas  ######################################################### */}
          <div className="offcanvas-body">
            <HallButton id={0} hallButtonClick={hallButtonClick} />
            <HallButton id={1} hallButtonClick={hallButtonClick} />
            <HallButton id={2} hallButtonClick={hallButtonClick} />
            <HallButton id={3} hallButtonClick={hallButtonClick} />
            <HallButton id={4} hallButtonClick={hallButtonClick} />
            <HallButton id={5} hallButtonClick={hallButtonClick} />
            <HallButton id={6} hallButtonClick={hallButtonClick} />
            <HallButton id={7} hallButtonClick={hallButtonClick} />
          </div>
        </div>
      </div>
    </>
  );
};
