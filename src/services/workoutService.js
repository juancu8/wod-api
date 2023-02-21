const Workout = require("../db/Workout");
const { v4: uuid } = require("uuid");

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};

const getWorkoutById = (id) => {
  const workout = Workout.getWorkoutById(id);
  return workout;
};

const createWorkout = (newWorkout) => {
  const workoutToInsert = {
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timezone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timezone: "UTC" }),
    ...newWorkout,
  };

  const createdWorkout = Workout.createNewWorkout(workoutToInsert);
  return createdWorkout;
};

const updateWorkout = (id, changes) => {
  const updatedWorkout = Workout.updateWorkout(id, changes);
  return updatedWorkout;
};

const deleteWorkout = (id) => {
  Workout.deleteWorkout(id);
  return;
};

module.exports = {
  getAllWorkouts,
  getWorkoutById,
  getAllWorkouts,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
