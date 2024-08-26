import { HStack, Icon, Tooltip, WrapItem } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import {
  FaAndroid,
  FaApple,
  FaLaptop,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { Platform } from '../entities/Platform';

interface Probs {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Probs) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaLaptop,
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
    <HStack
      alignItems="center"
      marginY={2}
      overflow="scroll"
      sx={{
        '&::webkitScrollbar': {
          display: 'none', // Hide scrollbar in Webkit browsers (Chrome, Safari)
        },
        msOverflowStyle: 'none', // Hide scrollbar in IE and Edge
        scrollbarWidth: 'none', // Hide scrollbar in Firefox
      }}
    >
      {platforms.map((platform) => {
        const PlatformIcon = iconMap[platform.slug];
        return (
          <Tooltip
            key={platform.slug}
            label={platform.name}
            hasArrow
            placement="top"
          >
            {/* Use a span to wrap the Icon to ensure ref forwarding works correctly */}
            <span>
              <Icon as={PlatformIcon} color="gray.500" />
            </span>
          </Tooltip>
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
