import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <p>Root component</p>
      <Outlet />
    </div>
  );
};

export default Root;
