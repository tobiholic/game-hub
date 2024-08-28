import { HStack, Icon, Tooltip } from '@chakra-ui/react';
import Platform from '../entities/Platform';
import iconMap from '../entities/PlatformIcons';

interface Probs {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Probs) => {
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
        const platformIcon = iconMap[platform.slug];
        return (
          <Tooltip
            key={platform.slug}
            label={platform.name}
            hasArrow
            placement="top"
          >
            {/* Use a span to wrap the Icon to ensure ref forwarding works correctly */}
            <span>
              <Icon as={platformIcon} color="gray.500" />
            </span>
          </Tooltip>
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
