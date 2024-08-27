import { IconType } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import {
  FaLaptop,
  FaWindows,
  FaPlaystation,
  FaApple,
  FaXbox,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';

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

export default iconMap;
