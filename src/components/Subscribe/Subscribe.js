import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Subscribe = props => {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined"  size="small" color="primary" onClick={handleClickOpen} >
        订阅
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">订阅星狗更新</DialogTitle>
        <DialogContent>
          <DialogContentText>您正在订阅星狗网的消息,这意味着星狗网发布新文章或者新功能时,您将即时获得通知. 请在下方输入您的邮箱:</DialogContentText>
          <TextField autoFocus margin="dense" id="name" label="电子邮箱" type="email" fullWidth/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">取消</Button>
          <Button onClick={handleClose} color="primary">确定</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Subscribe;