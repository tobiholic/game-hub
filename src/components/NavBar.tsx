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
        <Link href="https://portfolio-gamehub.tobischmid.com/">
          <Image src={logo} width={100} height={90}></Image>
        </Link>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
};

export default NavBar;
