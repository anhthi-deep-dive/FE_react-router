import { redirect } from "react-router-dom";

export const updateUserAction = async (props) => {
  console.log("action props: ", props);

  const { request, params } = props;
  const userId = params.userId;
  const formData = await request.formData();
  const updatedUser = Object.fromEntries(formData);

  console.log("userId: ", userId);
  console.log("updatedUser: ", updatedUser);

  return redirect("/");
};
