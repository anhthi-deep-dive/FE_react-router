import { Suspense } from "react";

import { Await, useLoaderData } from "react-router-dom";

const Root = () => {
  const loaderData = useLoaderData() as {
    getUserInfoPromise: Promise<unknown>;
  };

  return (
    <div>
      <p>Root component</p>
      <Suspense fallback="Loading...">
        <Await
          resolve={loaderData.getUserInfoPromise}
          errorElement={<div>Error on Root </div>}
        >
          {(userInfo) => <i>Resolve data: {JSON.stringify(userInfo)}</i>}
        </Await>
      </Suspense>
    </div>
  );
};

export default Root;
