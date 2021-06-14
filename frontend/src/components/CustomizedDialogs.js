import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
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
  const history = useHistory();

  function gotocart() {
    history.push("/main/cart");
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="none" color="" onClick={handleClickOpen}>
        Order Online
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
            <Button autoFocus color="primary">
              Add to Cart
            </Button>
          </Typography>

          <Typography gutterBottom>
            Pizza, dish of Italian origin consisting of a flattened disk of
            bread dough topped with some combination of olive oil, oregano,
            tomato, olives, mozzarella or other cheese, and many other
            ingredients, baked quickly—usually, in a commercial setting, using a
            wood-fired oven heated to a very high temperature—and served hot ...
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={gotocart} autoFocus color="primary">
            Go to Cart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
