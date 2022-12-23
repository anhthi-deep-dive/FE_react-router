import { useRouteError } from "react-router-dom";

const UserError = () => {
  const error = useRouteError() as { statusText: string; message: string };

  return (
    <div>
      <p>Sorry, an unexpected error has occurred in User component</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default UserError;
