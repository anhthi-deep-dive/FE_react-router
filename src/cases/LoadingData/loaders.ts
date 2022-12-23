export const loadUserData = (props) => {
  console.log("load props: ", props);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "James",
      });
    }, 1000);
  });
};
