import { HStack, Image, Link } from '@chakra-ui/react';
import logo from '../assets/logo/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <>
      <HStack padding="10px">
        <Link href="/">
          <Image width="80px" src={logo} objectFit="cover"></Image>
        </Link>
        <SearchInput />
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
};

export default NavBar;
