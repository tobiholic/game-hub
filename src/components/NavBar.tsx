import { HStack, Image, Link } from '@chakra-ui/react';
import logo from '../assets/logo/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Probs {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Probs) => {
  return (
    <>
      <HStack padding="10px">
        <Link href="http://localhost:5173/">
          <Image src={logo} boxSize="70px"></Image>
        </Link>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
};

export default NavBar;
