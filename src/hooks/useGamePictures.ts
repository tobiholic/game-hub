import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import ms from 'ms';
import GamePictures from '../entities/GamePictures';

const useGamePictures = (gameId: number) => {
  const apiClient = new APIClient<GamePictures>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  });
};

export default useGamePictures;
