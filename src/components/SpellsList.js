import React from "react";
import { useEffect } from "react";
import { getSpellsList } from "../Axios";
import { connect } from "react-redux";
import Spells from "./Spells";
import { listSpells } from "../redux/reducer";

function SpellsList(props) {
  useEffect(async () => {
    props.listSpellsAction(await getSpellsList());
    // listSpells([])
  }, []);

  return (
    <div>
      <Spells />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    listSpellsAction: (obj) => dispatch(listSpells(obj)),
  };
};

export default connect(null, mapDispatchToProps)(SpellsList);
