import { useNavigate, useNavigation } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  console.log(navigation.state);

  const redirectToUser = () => {
    navigate("/user");
  };

  return (
    <div>
      Product component{" "}
      <button onClick={redirectToUser}>Redirect to User</button>
    </div>
  );
};

export default Product;
