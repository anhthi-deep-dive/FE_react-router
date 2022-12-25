import { Suspense } from "react";

import { Await, useLoaderData } from "react-router-dom";

import RootChild from "./RootChild";

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
          <>
            {(userInfo) => <i>Render props: {JSON.stringify(userInfo)}</i>}
            <RootChild />
          </>
        </Await>
      </Suspense>
    </div>
  );
};

export default Root;
