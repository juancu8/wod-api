const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts;
};

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded = DB.workouts.find(
    (workout) => workout.name === newWorkout.name
  );
  if (isAlreadyAdded) return;

  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
};

const getWorkoutById = (id) => {
  const workout = DB.workouts.find((workout) => workout.id === id);
  return workout;
};

const updateWorkout = (id, changes) => {
  const indexForUpdated = DB.workouts.findIndex((workout) => workout.id === id);
  if (indexForUpdated === -1) return;

  const updatedWorkout = {
    ...DB.workouts[indexForUpdated],
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timezone: "UTC" }),
  };

  DB.workouts[indexForUpdated] = updatedWorkout;

  saveToDatabase(DB);
  return updatedWorkout;
};

const deleteWorkout = (id) => {
  const indexForDeleted = DB.workouts.findIndex((workout) => workout.id === id);
  if (indexForDeleted === -1) return;
  DB.workouts.splice(indexForDeleted, 1);
  saveToDatabase(DB);
};

module.exports = {
  getAllWorkouts,
  createNewWorkout,
  getWorkoutById,
  updateWorkout,
  deleteWorkout,
};
