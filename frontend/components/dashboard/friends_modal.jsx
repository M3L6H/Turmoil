import React from 'react';

import { Button, Form, Icon, Modal, Section } from '../shoebuckle';

export default ({ inverted, open, receiveFriendsModal }) => {

  console.log(open);

  return (
    <Modal
      open={ open }
      handleClose={ () => receiveFriendsModal(false) }
      inverted={ inverted }
      className="friends-search-modal"
    >
      <Modal.Header>Find Friends</Modal.Header>
      <Modal.Content>
        <Form.Input
          placeholder="Search..."
          button={
            <Button
              icon
              content={
                <Icon
                  name="search"
                />
              }
            />
          }
        />
        <Section outline>
          Hi
        </Section>
      </Modal.Content>
    </Modal>
  );
};
