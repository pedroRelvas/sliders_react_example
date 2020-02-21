import React, { useState } from "react";
import "./styles.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

export default function App() {
  /*   const [value, setValue] = useState(0);
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
  }; */

  const marks = [
    {
      value: 0,
      label: "0%"
    },
    {
      value: 20,
      label: "20%"
    },
    {
      value: 40,
      label: "40%"
    },
    {
      value: 60,
      label: "60%"
    },
    {
      value: 80,
      label: "80%"
    },
    {
      value: 100,
      label: "100%"
    }
  ];

  const useStylesBootstrap = makeStyles(theme => ({
    arrow: {
      color: "#4CB3BA"
    },
    tooltip: {
      backgroundColor: "#4CB3BA",
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontSize: 12,
      border: "10px"
    }
  }));

  const PrettoSlider = withStyles({
    root: {
      color: "#4CB3BA",
      height: 8
    },
    thumb: {
      height: 16,
      width: 16,
      backgroundColor: "#4CB3BA",
      border: "2px solid currentColor",
      marginTop: -6,
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
    const classes = useStylesBootstrap();
    return (
      <div>
        <Tooltip
          classes={classes}
          arrow
          open={open}
          enterTouchDelay={0}
          placement="top"
          title={value + ` %`}
        >
          {children}
        </Tooltip>
      </div>
    );
  }

  return (
    <div className="App">
      <h4>React Bootstrap Range Slider</h4>
      {/*  <MyComponent /> */}
      <h4>Material UI Slider</h4>
      <Typography gutterBottom>pretto.fr</Typography>
      <div className="parent-slider">
        <div className="position-absolute left-5">Reduzido</div>
        <div className="position-absolute right-0 left-0">Moderado</div>
        <div className="position-absolute right-5">Elevado</div>
        <div className="bar" />
        <div className="bar left-30" />
        <div className="bar left-70" />
        <div className="bar right-0" />
        <PrettoSlider
          className="top"
          ValueLabelComponent={ValueLabelComponent}
          aria-label="pretto slider"
          defaultValue={20}
          step={10}
          marks={marks}
          min={0}
          max={100}
          ThumbComponent="span"
          valueLabelDisplay="on"
        />
      </div>
    </div>
  );
}
