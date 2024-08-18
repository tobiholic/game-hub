import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { Platform } from '../hooks/usePlatforms';

interface Probs {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Probs) => {
  const iconMap: { [key: string]: IconType } = {
    windows: FaWindows,
    playstation: FaPlaystation,
    mac: FaApple,
    xbox: FaXbox,
    nintendo: SiNintendo,
    linux: FaLinux,
    web: BsGlobe,
    android: FaAndroid,
    ios: MdPhoneIphone,
  };

  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon
          key={platform.slug}
          as={iconMap[platform.slug]}
          color="gray.500"
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
