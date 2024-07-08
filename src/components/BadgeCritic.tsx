import { Badge } from '@chakra-ui/react';

interface Probs {
  score: number;
}

const BadgeCritic = ({ score }: Probs) => {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';

  return (
    <Badge colorScheme={color} fontSize="15px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default BadgeCritic;
