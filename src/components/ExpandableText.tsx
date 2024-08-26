import React, { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';

interface Probs {
  children: string;
}

const ExpandableText = ({ children }: Probs) => {
  const [expanded, setExpended] = useState(false);
  const limit = 350;
  const handleExpand = () => {
    expanded ? setExpended(false) : setExpended(true);
  };
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + '...';

  return (
    <Text>
      {summary}
      <Button
        onClick={handleExpand}
        size="xs"
        colorScheme="yellow"
        display="inline"
        marginStart={2}
      >
        {expanded ? 'show less' : 'show more'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
