import Results from '@/components/Results';

export default async function SearchPage({ params }) {
  const seachTerm = params.searchTerm;
  const API_KEY = "7c56ffd1c4a4c188bed0d2da9bd3a4f3";
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${seachTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results &&
        results.length ===
        <h1 className='text-center pt-6'>No results found</h1>}
      {results && <Results results={results} />}
    </div>
  );
}
