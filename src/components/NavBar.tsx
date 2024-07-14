import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './searchInput';

interface Probs {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Probs) => {
  return (
    <>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px"></Image>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
};

export default NavBar;
