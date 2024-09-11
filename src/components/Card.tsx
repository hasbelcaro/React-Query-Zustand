import { Repository } from "../hooks/types";

type CardProps = {
  repository: Repository;
};

function Card(props: CardProps) {
  const { repository } = props;

  return (
    <div>
      <div>
        <h1>{repository.name}</h1>
        <button>Like</button>
      </div>
    </div>
  );
}

export default Card;
