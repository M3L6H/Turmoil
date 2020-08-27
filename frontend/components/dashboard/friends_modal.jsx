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

  const submitSearch = () => fetchBeings(search);
  
  useEffect(() => {
    submitSearch();
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
          onKeyDown={ e => (e.keyCode === 13) && submitSearch() }
          button={
            <Button
              icon
              onClick={ submitSearch }
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
          { beings.map(being => (
            <Section
              key={ being.id }
              className="friends-search-item"
            >
              { being.username }
            </Section>
          )) }
          { beings.length === 0 && (
            <Section>No results found!</Section>
          ) }
        </Section>
      </Modal.Content>
    </Modal>
  );
};
