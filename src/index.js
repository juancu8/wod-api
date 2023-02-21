const express = require("express");
const v1WorkoutsRoutes = require("./v1/routes/workoutsRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/workouts", v1WorkoutsRoutes);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
