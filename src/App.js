import "./App.css";
import { HallButtons } from "./components/hallButtons";
import React, { useState, useEffect } from "react";
import { Alert } from "./components/Alert";

function App() {
  const [maxFloor, setmaxFloor] = useState(0);
  const [minFloor, setminFloor] = useState(0);
  const [currFloor, setcurrFloor] = useState(0);
  const [inside, setinside] = useState([]);
  const [outside, setoutside] = useState([]);
  const [flag, setflag] = useState(0);
  const [count, setcount] = useState(0);
  const [people, setpeople] = useState(0);
  const [emergency, setemergency] = useState(0);
  //   const [liftAnimation, setliftAnimation] = useState(0);

  const handleEmergency = () => {
    setoutside([]);
    setinside([]);
    setemergency(parseInt(emergency) ^ 1);
    if (emergency === 0) {
      alert(
        "Emergency !!! All the people are requested to evacuate from the Lift and use stairs ..."
      );
    } else {
      alert("Situation restored to normal conditions ....");
    }
  };

  const hallButtonClick = (e) => {
    e.preventDefault();
    if (emergency === 0) {
      setoutside([...outside, parseInt(e.target.value)]);
      let val = parseInt(e.target.value);
      if (outside.length === 0) {
        if (currFloor > val) setflag(parseInt(1));
        else if (currFloor < val) setflag(parseInt(0));
      }
      if (maxFloor < val) {
        setmaxFloor(val);
        // setflag(parseInt(0));
      }
      if (minFloor > val) {
        setminFloor(val);
        // setflag(parseInt(1));
      }
    }
  };

  const selectTheFloor = (e) => {
    e.preventDefault();
    if (emergency === 0) {
      setcount(count - 1);
      console.log(`Inside length is ${inside.length}`);
      if (inside.length >= 5) {
        alert(
          "maximum capacity of the lift is reached ( 5 people ) !!!!!!!!!!!!!"
        );

        setcount(parseInt(0));
        return;
      }
      setinside([...inside, parseInt(e.target.value)]);
      let val = parseInt(e.target.value);
      //   if (maxFloor < val) {
      //     setmaxFloor(val);
      //     setflag(parseInt(0));
      //   }
      //   if (minFloor > val) {
      //     setminFloor(val);
      //     setflag(parseInt(1));
      //   }
      if (currFloor > val) setflag(parseInt(1));
      else if (currFloor < val) setflag(parseInt(0));
      if (minFloor > val) {
        setminFloor(val);
        // setflag(parseInt(1));
      }
      if (maxFloor < val) {
        setmaxFloor(val);
        // setflag(parseInt(0));
      }
    }
  };
  //********************************************************************************* */

  useEffect(() => {
    if (emergency === 0) {
      let cnt = 0;
      let cnt2 = 0;
      for (let index = 0; index < outside.length; index++) {
        if (outside[index] === currFloor) cnt++;
      }
      for (let index = 0; index < inside.length; index++) {
        if (inside[index] === currFloor) cnt2++;
      }
      // console.log(outside);
      // console.log(inside);
      // console.log(cnt);
      //   console.log(` cnt is  ${cnt}`);
      //   if (cnt > 0 || cnt2 > 0) setliftAnimation(parseInt(1));
      //   console.log(liftAnimation);
      if (cnt > 0) setcount(parseInt(cnt));
      if (cnt > 0) setoutside(outside.filter((x) => x !== currFloor));
      if (cnt2 > 0) setinside(inside.filter((x) => x !== currFloor));
      if (outside.length === 0) return;
    }
  }, [outside, currFloor, inside, emergency]);

  //********************************************************************************* */
  useEffect(() => {
    // function for setting the minfloor,maxfloor and the direction of the lift
    // fg=0 means upwards
    // fg=1 means downwards
    // console.log(flag);
    // console.log(maxFloor);
    // console.log(currFloor);
    // console.log(minFloor);

    if (emergency === 0) {
      setpeople(parseInt(inside.length));
      if ((outside.length === 0 && inside.length === 0) || count > 0) return;
      else {
        if (minFloor === maxFloor) return;
        if (flag === 0) {
          if (currFloor >= maxFloor) {
            setflag(parseInt(1));
            // setcurrFloor(maxFloor);
          } else {
            let a = setTimeout(() => {
              setcurrFloor(parseInt(currFloor) + 1);
            }, 2000);
            return () => clearTimeout(a);
          }
        } else {
          if (currFloor <= minFloor) {
            setflag(parseInt(0));
            // setcurrFloor(minFloor);
            return;
          } else {
            let a = setTimeout(() => {
              setcurrFloor(parseInt(currFloor) - 1);
            }, 2000);
            return () => clearTimeout(a);
          }
        }
      }
    }
  }, [currFloor, maxFloor, minFloor, flag, outside, inside, count, emergency]);

  //************************************************************************************** */
  return (
    <>
      <div className="alert">
        {count > 0 ? <Alert selectTheFloor={selectTheFloor} /> : null}
      </div>
      <div>
        <HallButtons
          maxFloor={maxFloor}
          minFloor={minFloor}
          currFloor={currFloor}
          inside={inside}
          outside={outside}
          hallButtonClick={hallButtonClick}
        />
        <div className="lift-main">
          <h1 className="text-light text-center">
            <span>
              {inside.length > 0 || outside.length > 0 ? (
                flag === 0 ? (
                  <i class="bi bi-arrow-up"></i>
                ) : (
                  <i class="bi bi-arrow-down"></i>
                )
              ) : null}
            </span>
            {`  ${currFloor}`}
          </h1>
          <h2 className="text-light text-center">{`Number of People : ${people}`}</h2>
          <div className="lift">
            <span className="door1"></span>
            <span className="door2"></span>
            <span className="left1"></span>
            <span className="left2"></span>
          </div>
        </div>
      </div>
      <div className="emer">
        <button
          type="button"
          class="btn btn-outline-warning btn-lg "
          onClick={handleEmergency}
        >
          {emergency ? "StopEmergency" : "Emergency"}
        </button>
      </div>
    </>
  );
}

export default App;
