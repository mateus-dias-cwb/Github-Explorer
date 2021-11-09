import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com"
}

export function RepositoryList() {
  return (
    <section ClassName="repository-list">
      <h1>Lista de Repositorios</h1>
      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </ section>
  );
}
