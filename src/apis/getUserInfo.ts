const getUserInfoApi = (delayTime = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "James",
        gender: "male",
        age: 28,
      });
    }, delayTime);
  });
};

export default getUserInfoApi;
