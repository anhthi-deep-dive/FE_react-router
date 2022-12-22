import { Link } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <p>Root component</p>
      <Link to="/foo">Go to Foo</Link>
    </div>
  );
};

export default Root;
