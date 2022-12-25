import { useAsyncValue } from "react-router-dom";

const RootChild = () => {
  const userInfo = useAsyncValue();

  return <i>RootChild component: {JSON.stringify(userInfo)}</i>;
};

export default RootChild;
