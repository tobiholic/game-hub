import bullsEye from '../assets/Emojis/bulls-eye.webp';
import thumbsUp from '../assets/Emojis/thumbs-up.webp';
import meh from '../assets/Emojis/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Probs {
  rating: number;
}

const Emoji = ({ rating }: Probs) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '25px' },
    4: { src: thumbsUp, alt: 'recommend', boxSize: '25px' },
    5: { src: bullsEye, alt: 'exeptional', boxSize: '33px' },
  };
  return <Image {...emojiMap[rating]} marginTop={3} />;
};

export default Emoji;
