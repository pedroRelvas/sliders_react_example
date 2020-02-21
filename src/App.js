import React, { useState } from "react";
import "./styles.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

export default function App() {
  const [value, setValue] = useState(0);
  const MyComponent = () => {
    return (
      <RangeSlider
        value={value}
        tooltip="on"
        tooltipPlacement="top"
        step="10"
        variant
        onChange={changeEvent => setValue(changeEvent.target.value)}
      />
    );
  };

  const PrettoSlider = withStyles({
    root: {
      color: "#52af77",
      height: 8
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus,&:hover,&$active": {
        boxShadow: "inherit"
      }
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)"
    },
    track: {
      height: 4,
      borderRadius: 4
    },
    rail: {
      height: 4,
      borderRadius: 4
    }
  })(Slider);

  function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
      <>
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
          {children}
        </Tooltip>
      </>
    );
  }

  return (
    <div className="App">
      <h4>React Bootstrap Range Slider</h4>
      <MyComponent />
      <h4>Material UI Slider</h4>
      <Typography gutterBottom>pretto.fr</Typography>
      <PrettoSlider
        ValueLabelComponent={ValueLabelComponent}
        aria-label="pretto slider"
        defaultValue={20}
        step={10}
        ThumbComponent="span"
        valueLabelDisplay="on"
      />
    </div>
  );
}
