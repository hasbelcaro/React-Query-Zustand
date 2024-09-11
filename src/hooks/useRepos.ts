import { useQuery } from "@tanstack/react-query";
import api from "../api/github";

async function fetchRepos() {
  const { data } = await api.get("/users/hasbelcaro/repos");
  return data;
}

export function useFetchRepositories() {
  return useQuery({ queryKey: ["repos"], queryFn: fetchRepos });
}
