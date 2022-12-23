import getUserInfoApi from "src/apis/getUserInfo";

export const loadUserData = async (props) => {
  console.log("load props: ", props);

  const userInfo = await getUserInfoApi();
  return userInfo;
};
