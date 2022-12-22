export const loadUserData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "James",
      });
    }, 1000);
  });
