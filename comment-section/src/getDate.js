// export const getDate = () => {
//   let executed = false;
//   return function () {
//     if (executed === false) {
//       executed = true;
//       let d;
//       return (d = Date.now());
//     }
//   };
// };

export const getDate = () => {
  let d = new Date();
  return d.toLocaleTimeString;
};
