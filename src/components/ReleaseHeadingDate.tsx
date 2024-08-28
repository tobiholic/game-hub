import { Text } from '@chakra-ui/react';

interface Probs {
  date: string;
}

const ReleaseHeadingDate = ({ date }: Probs) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const releaseDate = date ? new Date(date) : null;
  const [month, day, year] = [
    releaseDate?.getMonth(),
    releaseDate?.getDate(),
    releaseDate?.getFullYear(),
  ];

  return (
    <>
      <Text as="i" fontSize="sm">
        Released: {`${day}. ${months[month!]} ${year}`}
      </Text>
    </>
  );
};

export default ReleaseHeadingDate;
