// Task -7
const axios = require("axios");

axios
  .get("https://api.github.com/")
  .then((response) => {
    console.log(response);
  })
  .catch((error) =>
    console.log("Error failed to fetch data ::", error.message)
  );
