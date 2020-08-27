import React, { useEffect, useState } from 'react';

import { Button, Form, Icon, Modal, Section } from '../shoebuckle';

export default ({
  inverted,
  open,
  receiveFriendsModal,
  beings,
  fetchBeings
}) => {
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    fetchBeings(search);
  }, []);

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
          value={ search }
          onChange={ e => {
            if (e.currentTarget.value.match(/[^\w_]/)) return;
            setSearch(e.currentTarget.value);
          } }
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
        <Section
          outline
          className="friends-search-list"
        >
          Hi
        </Section>
      </Modal.Content>
    </Modal>
  );
};
