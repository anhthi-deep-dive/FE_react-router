import { useLoaderData } from "react-router-dom";

const Root = () => {
  const data = useLoaderData();

  return (
    <div>
      <p>Root component</p>
      <i>User data: {JSON.stringify(data)}</i>
    </div>
  );
};

export default Root;
