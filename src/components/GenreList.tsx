import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const { data } = useGenres();

  return (
    <>
      <ul>
        {data.map((genres) => (
          <li key={genres.count}>{genres.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
