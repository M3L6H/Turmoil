import React, { useEffect, useState } from 'react';

import { Button, Form, Icon, Modal, Section } from '../shoebuckle';

import InviteButton from './invite_button';

export default ({
  inverted,
  open,
  currentBeingId,
  createComrade,
  receiveFriendsModal,
  fetchBeings,
  beings,
  comrades,
  comradeBeings
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
          { beings.sort((a, b) => a.username.localeCompare(b.username)).map(being => being.id !== currentBeingId ? (
            <Section
              horizontal
              key={ being.id }
              className="friends-search-item"
            >
              <span className="username">{ being.username }</span>
              <InviteButton
                createComrade={ createComrade }
                currentBeingId={ currentBeingId }
                being={ being }
                comrades={ comrades }
                comradeBeings={ comradeBeings }
              />
            </Section>
          ) : null) }
          { beings.length === 0 && (
            <Section>No results found!</Section>
          ) }
        </Section>
      </Modal.Content>
    </Modal>
  );
};
