import React from "react";

class Covid19 extends React.Component {
  setRotation = (el, rotation) => {
    el.style.setProperty("--rotation", rotation * 360);
  };
  covidLeaves = () => {
    let degrees = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let dots = degrees.map((degree, idx) => {
      return (
        <div
          className={`leaf rotations rotations-12-${degree}`}
          key={`leaf-${idx}`}
        >
          <div className="triangle"></div>
        </div>
      );
    });
    return dots;
  };

  covidSpikes = () => {
    let degrees = [1, 2, 3, 4, 5, 6];
    // let degrees = [2];
    let dots = degrees.map((degree, idx) => {
      return (
        <div
          className={`grid center  covid-spike rotations rotations-6-${degree}`}
          key={`spike-${idx}`}
        >
          {this.covidSpike()}
          <div className="covid-dot"></div>
        </div>
      );
    });
    return dots;
  };
  covidSpike = () => {
    let degrees = [1, 3, 5];
    let dots = degrees.map((degree, idx) => {
      return (
        <div
          className={`spike rotations rotations-6-${degree}`}
          key={`spike-${idx}`}
        ></div>
      );
    });
    return dots;
  };

  render() {
    return (
      <div className="grid center  covid-container">
        <div className=" grid center col-1 place-1-1 covid-leaves">
          {this.covidLeaves()}

          <div className="grid center place-1-1 covid-skin">
            <div className="grid center  place-1-1 covid-center-spike">
              <div className="grid center  covid-spike">
                {this.covidSpike()}
              </div>
            </div>

            <div className="grid center place-1-1 covid-spikes">
              {this.covidSpikes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Covid19;
