function shirts(
  size: string = "large",
  message: string = "i am learning type script"
) {
  console.log(
    `making a ${size} shirt with the mesage of ${message} on its back`
  );
}
shirts();
shirts("extra large");
shirts("small","do you like coding?");