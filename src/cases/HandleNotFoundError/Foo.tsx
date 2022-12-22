const Foo = () => {
  throw new Error("Something went wrong at Foo component");

  return <div>Foo component</div>;
};

export default Foo;
