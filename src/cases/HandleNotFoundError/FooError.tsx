import { useRouteError } from "react-router-dom";

const FooError = () => {
  const error = useRouteError() as { statusText: string; message: string };

  return (
    <div>
      <p>Sorry, an unexpected error has occurred in Foo component</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default FooError;
