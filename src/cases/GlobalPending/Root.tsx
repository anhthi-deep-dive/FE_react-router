import { Outlet, useNavigate, useNavigation } from "react-router-dom";

const Root = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  return (
    <div>
      <p>Root component</p>
      <i>Navigation state: {navigation.state}</i>
      <button onClick={() => navigate(-1)}>Go back</button>
      <p>Child component</p>
      <Outlet />
    </div>
  );
};

export default Root;
