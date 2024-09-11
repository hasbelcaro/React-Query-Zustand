import { useFetchRepositories } from "./hooks/useRepos";

function App() {
  const { data, isLoading } = useFetchRepositories();
  if (isLoading) return <div>Loading...</div>;
  console.log(data);

  return (
    <div>
      {data?.map((repo) => (
        <div>
          <h1>{repo.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
