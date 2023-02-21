const Workout = require("../db/Workout");
const { v4: uuid } = require("uuid");

const getAllWorkouts = () => {
  try {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
  } catch (error) {
    throw error;
  }
};

const getWorkoutById = (id) => {
  try {
    const workout = Workout.getWorkoutById(id);
    return workout;
  } catch (error) {
    throw error;
  }
};

const createWorkout = (newWorkout) => {
  const workoutToInsert = {
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timezone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timezone: "UTC" }),
    ...newWorkout,
  };

  try {
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
  } catch (error) {
    throw error;
  }
};

const updateWorkout = (id, changes) => {
  try {
    const updatedWorkout = Workout.updateWorkout(id, changes);
    return updatedWorkout;
  } catch (error) {
    throw error;
  }
};

const deleteWorkout = (id) => {
  try {
    Workout.deleteWorkout(id);
    return;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllWorkouts,
  getWorkoutById,
  getAllWorkouts,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
