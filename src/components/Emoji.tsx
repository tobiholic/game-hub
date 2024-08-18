import { HStack, Image, ImageProps, Text } from '@chakra-ui/react';
import bullsEye from '../assets/Emojis/bulls-eye.webp';
import meh from '../assets/Emojis/meh.webp';
import thumbsUp from '../assets/Emojis/thumbs-up.webp';

interface Probs {
  rating: number;
}

const Emoji = ({ rating }: Probs) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '20px' },
    4: { src: thumbsUp, alt: 'recommend', boxSize: '20px' },
    5: { src: bullsEye, alt: 'exeptional', boxSize: '25px' },
  };

  const textRating =
    rating === 3
      ? 'meh'
      : rating === 4
      ? 'recommend'
      : rating === 5
      ? 'exeptional'
      : null;

  return (
    <>
      <HStack marginTop={3}>
        <Image {...emojiMap[rating]} />
        <Text marginTop={1} as="samp" fontSize="xs">
          {textRating}
        </Text>
      </HStack>
    </>
  );
};

export default Emoji;
