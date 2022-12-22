import { useLoaderData } from "react-router-dom";

const Root = () => {
  const data = useLoaderData();

  return (
    <div>
      Root component <i>User data: {JSON.stringify(data)}</i>
    </div>
  );
};

export default Root;
