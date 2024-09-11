import React from "react";

import { useFetchRepositories } from "./hooks/useRepos";

function App() {
  const { data, isLoading } = useFetchRepositories();
  if (isLoading) return <div>Loading...</div>;
  console.log(data);

  return <div>Hello world</div>;
}

export default App;
