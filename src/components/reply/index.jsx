import React from 'react';
import Modal from '@material-ui/core/Modal';
import ReplyPage from '../../pages/reply';

const Reply = ({ open }) => (
  <Modal open={open} >
    <ReplyPage />
  </Modal>
);

export default Reply;
