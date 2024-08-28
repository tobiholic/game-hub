import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';

const WelcomeModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hasSeenModal, setHasSeenModal] = useState(false);

  const ModalOverlayOne = () => (
    <ModalOverlay backdropFilter="blur(10px)" width="100%" />
  );

  const [overlay, setOverlay] = React.useState(<ModalOverlayOne />);

  useEffect(() => {
    const modalShown = localStorage.getItem('modalShown');

    if (!modalShown) onOpen();

    setOverlay(<ModalOverlayOne />);
  }, [onOpen]);

  const handleClose = () => {
    onClose();
    localStorage.setItem('modalShown', 'true');
    setHasSeenModal(true);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} isCentered size="xl">
        {overlay}
        <ModalContent margin={10}>
          <ModalHeader>About this project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Welcome! <br />
            This site is just a demo to show off my React skills. It's not a
            real, working website, so no personal data is collected here.
            Because of that, there’s no need for a privacy policy. For more info
            on data security, visit
            <Link
              textDecoration="link"
              textColor="#3D789D"
              target="_blank"
              href="https://www.tobischmid.com/data-protection/"
            >
              {''} tobischmid.com/data-protection.
            </Link>
            <br />
            <br />
            Have a great day, Tobias
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClose}>
              Understood, have a look around
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WelcomeModal;
