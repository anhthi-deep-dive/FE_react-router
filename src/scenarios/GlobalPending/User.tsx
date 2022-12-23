import { Link, useNavigation } from "react-router-dom";

const User = () => {
  const navigation = useNavigation();

  console.log(navigation.state);

  return (
    <div>
      User component <Link to="/product">Redirect to Product</Link>
    </div>
  );
};

export default User;
