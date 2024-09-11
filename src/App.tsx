import Card from "./components/Card";
import { useFetchRepositories } from "./hooks/useRepos";

function App() {
  const { data, isLoading } = useFetchRepositories();
  if (isLoading) return <div>Loading...</div>;
  console.log(data);

  return (
    <div>
      {data?.map((repository) => (
        <Card key={repository.id} repository={repository} />
      ))}
    </div>
  );
}

export default App;
