import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import "../css/restaurantfull.css";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  const [cart, setCart] = useState([]);
  const history = useHistory();

  function gotocart() {
    console.log("We are in gotcart");
    history.push("/main/cart");
  }

  const handleClickOpens = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // function gotocart1(x) {
  //   console.log("We are in gotcart:" + x.menu);
  //   // history.push("/main/cart");
  // }
  return (
    <div>
      <Button variant="none" color="" onClick={handleClickOpens}>
        {props.text}
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <h4> {props.name}</h4>
          <p>
            {" "}
            {props.state} , {props.city}
          </p>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>Menu: {props.menu}</Typography>
          <Typography gutterBottom>
            Price: {props.price}
            {/* <Button autoFocus color="primary">
              Add to Carts
            </Button> */}
          </Typography>

          <Typography gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborums
          </Typography>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={carthandle(props.name)} autoFocus color="primary">
            Go to Cart
          </Button> */}
          <Button
            // className="modal-btn"
            autoFocus
            color="primary"
          >
            Add to cart
          </Button>
          <Button
            onClick={gotocart}
            // className="modal-btn"
            autoFocus
            color="primary"
          >
            Go to Cart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
