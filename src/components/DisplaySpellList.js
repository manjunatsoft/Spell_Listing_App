import React, { useEffect } from "react";
import { connect } from "react-redux";
import { listSpellsType } from "../redux/reducer";
import "../App.css";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const DisplaySpellList = (props) => {
  const handleChange = (event) => {
    props.listSpellsTypeAction(event.target.value);
  };
  useEffect(() => {
    props.listSpellsTypeAction("all");
  }, []);

  return (
    <div>
      <FormControl>
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          className="todo-input"
        >
          Spell List Category
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          defaultValue={"all"}
          className="todo-input"
        >
          <FormControlLabel
            value="all"
            control={<Radio />}
            label="All"
            onChange={handleChange}
          />
          <FormControlLabel
            value="favourites"
            control={<Radio />}
            label="Favourites"
            onChange={handleChange}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    listSpellsTypeAction: (obj) => dispatch(listSpellsType(obj)),
  };
};

//we can use connect method to connect this component with redux store
export default connect(null, mapDispatchToProps)(DisplaySpellList);
