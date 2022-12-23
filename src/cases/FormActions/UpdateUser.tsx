import { Form } from "react-router-dom";

const UpdateUser = () => {
  return (
    <div>
      UpdateUser component
      <Form method="post">
        <p>Full name</p>
        <input type="text" name="fullname" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default UpdateUser;
