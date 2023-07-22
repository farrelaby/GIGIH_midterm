require("dotenv").config();
const app = require("./app/index");
const PORT = 8000;

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
