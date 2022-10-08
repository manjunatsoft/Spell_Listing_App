import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";
import { getSpellsListItem } from "../Axios";
import { favListSpells } from "../redux/reducer";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function SpellDetails(props) {
  // console.log(props,'props');
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState({});

  const addToFavorites = async (item) => {
    let temp = props?.favList || [];
    let data = [...(props?.favList || []), item];
    // console.log('hello')
    props.favListSpellsAction(data);
    setOpen(false);
  };

  const handleClickOpen = async () => {
    setOpen(true);
    // console.log('hello')
    let data = await getSpellsListItem(props.itemurl);
    console.log("data", data);
    setItem(data);
  };
  const handleClose = () => {
    setOpen(false);
  };
  console.log(item, "item");
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {props.name}
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {item.name}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {(item?.desc || []).map((description) => {
            return (
              <div>
                <Typography gutterBottom>{description}</Typography>
                <hr />
              </div>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button type="button" autoFocus onClick={() => addToFavorites(item)}>
            Add To Favorites
          </Button>
          <Button type="button" autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    favList: state.favList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    favListSpellsAction: (obj) => dispatch(favListSpells(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpellDetails);

// export default DetailedList;
