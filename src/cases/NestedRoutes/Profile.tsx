import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <p>Profile component</p>
      <Outlet />
    </div>
  );
};

export default Profile;
