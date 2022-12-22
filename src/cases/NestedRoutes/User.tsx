import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();

  return (
    <div>
      <i>User component: {params.userId}</i>
    </div>
  );
};

export default User;
