import useData from './useData';

export interface Genre {
  count: number;
  name: string;
  image_background: string;
}

const useGenres = () => useData<Genre>('/genres');
export default useGenres;
