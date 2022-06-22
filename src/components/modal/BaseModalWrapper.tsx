import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import './modal.scss'
import { white } from 'material-ui/styles/colors';
import { useTranslation } from 'react-i18next';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const {t} = useTranslation();

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>{t('ok')}</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box className="css-6z8jno" sx={{ ...style, width: 200, height:150 }}>
          <h2 id="child-modal-title">{t('order.message')}</h2>
          <Button onClick={handleClose}>{t('close')}</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const {t} = useTranslation();
  return (
    <div>
      <Button  className="css-1e6y48t-MuiButtonBase-root-MuiButton-root" onClick={handleOpen}>{t('button.pay')}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="css-1fo3i9n MuiBox-root" sx={{ ...style, width:500, height:550}}>
          <h2 id="parent-modal-title">{t('modal.title')}</h2>
          <form>
  <div className="form__col">
    <label className="label"> {t('label_1')} </label>
    <input  className="input" type="text" name="name" required placeholder="" />
 
    <label className="label"> {t('label_2')} </label>
    <input className="input" type="number" name="number" required placeholder="" />

    <label className="label"> {t('label_3')} </label>
    <input  className="input" type="text" name="address" required />
    
    <label className="label">  {t('label_4')} </label>
    <input className="input" type="number" name="number" required placeholder="1111-2222-3333-4444"/>

    <label className="label"> {t('label_5')} </label>
    <input className="input" type="number" name="number" required/>
    <label className="label__check">
      <input type="checkbox" required/> {t('checkbox')}
    </label>
  </div>
  </form>
  <ChildModal />
       
        </Box>
      </Modal>
    </div>
  );
}