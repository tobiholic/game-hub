import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import ms from 'ms';
import GameMovie from '../entities/Trailer';

const useGameMovies = (gameId: number) => {
  const apiClient = new APIClient<GameMovie>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  });
};

export default useGameMovies;
