import React from 'react';

import { Modal } from '../shoebuckle';

export default ({ inverted, open, receiveFriendsModal }) => {

  console.log(open);

  return (
    <Modal
      open={ open }
      handleClose={ () => receiveFriendsModal(false) }
      inverted={ inverted }
    >
      <Modal.Header>Find Friends</Modal.Header>
      <Modal.Content>
        Content!
      </Modal.Content>
    </Modal>
  );
};
