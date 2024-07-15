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
import React from 'react';
import { useEffect } from 'react';

const WelcomeModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const ModalOverlayOne = () => <ModalOverlay backdropFilter="blur(10px)" />;

  const [overlay, setOverlay] = React.useState(<ModalOverlayOne />);

  useEffect(() => {
    onOpen();
    setOverlay(<ModalOverlayOne />);
  }, [onOpen]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        {overlay}
        <ModalContent>
          <ModalHeader>About this project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Welcome! <br />
            Please note that this site is a demonstration of my skills in React
            development. It is not a functional website, and as such, no personal data
            will be collected from you. Consequently, there is no privacy policy in place.
            I hope you find the demonstration informative and enjoyable. For more
            information about data security please visit
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
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Understood, have a look around
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WelcomeModal;
