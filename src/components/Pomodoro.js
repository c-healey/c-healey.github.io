import React from "react";

class Pomodoro extends React.Component {
  setRotation = (el, rotation) => {
    el.style.setProperty("--rotation", rotation * 360);
  };
  tomatoLeaves = () => {
    let degrees = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let dots = degrees.map((degree, idx) => {
      return (
        <div
          className={`leaf rotations rotations-12-${degree}`}
          key={`leaf-${idx}`}
        >
          <div className="dot"></div>
        </div>
      );
    });
    return dots;
  };
  tomatoPulp = () => {
    let degrees = [1, 2, 3, 4, 5, 6];
    let dots = degrees.map((degree, idx) => {
      return (
        <div
          className={`pulp rotations rotations-6-${degree}`}
          key={`pulp-${idx}`}
        ></div>
      );
    });
    return dots;
  };
  tomatoPlacenta = () => {
    let degrees = [1, 2, 3, 4, 5, 6];
    let dots = degrees.map((degree, idx) => {
      return (
        <div
          className={`plac rotations rotations-6-${degree}`}
          key={`plac-${idx}`}
        >
          <div className="dot"></div>
        </div>
      );
    });
    return dots;
  };
  tomatoSeeds = () => {
    let degrees = [1, 2, 3, 4, 5, 6];
    let dots = degrees.map((degree, idx) => {
      return (
        <div
          className={` rotations rotations-6-${degree}`}
          key={`seeds-${idx}`}
        >
          <div className="small square one"></div>
          <div className="small square two"></div>
          <div className="small square three"></div>
          <div className="small square eight"></div>
          <div className="small square six"></div>
        </div>
      );
    });
    return dots;
  };

  render() {
    return (
      <div className="grid center  tomato-container">
        <div className=" grid center col-1 place-1-1 tomato-leaves">
          {this.tomatoLeaves()}
        </div>

        <div className="grid center place-1-1 tomato-skin">
          <div className="grid center place-1-1 tomato-pulp">
            {this.tomatoPulp()}
          </div>
          <div className="grid center place-1-1 tomato-placenta">
            {this.tomatoPlacenta()}
          </div>
          <div className="grid center place-1-1 tomato-seeds">
            {this.tomatoSeeds()}
          </div>

          <span className="grid center place-1-1 tomato-core"></span>
        </div>
      </div>
    );
  }
}

export default Pomodoro;
