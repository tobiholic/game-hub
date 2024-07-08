import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <>
      <ul>
        {genres.map((genres) => (
          <li key={genres.count}>{genres.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
