import React, { useState } from 'react';
import { Modal, Input } from 'antd';
// import firebase from '../../firebase/config';

const ForgotPassword = ({ visible, closeModal }) => {
  const [email, setEmail] = useState('');

  const handleOk = async () => {
    // try {
    //   await firebase.auth().sendPasswordResetEmail(email);
    //   closeModal();
    // } catch (error) {
    //   console.error('Error sending password reset email:', error);
    // }
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <Modal
      title="Forgot Password"
      visible = {visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
    </Modal>
  );
};

export default ForgotPassword;
