const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  try {
    return DB.workouts;
  } catch (error) {
    throw {
      status: 500,
      message: error?.message || error,
    };
  }
};

const getWorkoutById = (id) => {
  try {
    const workout = DB.workouts.find((workout) => workout.id === id);
    if (!workout) {
      throw {
        status: 404,
        message: `Can't findworkout with the id ${id}`,
      };
    }
    return workout;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded = DB.workouts.find(
    (workout) => workout.name === newWorkout.name
  );
  if (isAlreadyAdded) {
    throw {
      status: 400,
      message: `Workout with the name ${newWorkout.name} already exits`,
    };
  }

  try {
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
  } catch (error) {
    throw {
      status: error?.status || 500,
      message: error?.message || error,
    };
  }
};

const updateWorkout = (id, changes) => {
  try {
    const indexForUpdated = DB.workouts.findIndex(
      (workout) => workout.id === id
    );
    if (indexForUpdated === -1) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${id}'`,
      };
    }

    const updatedWorkout = {
      ...DB.workouts[indexForUpdated],
      ...changes,
      updatedAt: new Date().toLocaleString("en-US", { timezone: "UTC" }),
    };

    DB.workouts[indexForUpdated] = updatedWorkout;

    saveToDatabase(DB);
    return updatedWorkout;
  } catch (error) {
    throw {
      status: error?.status || 500,
      message: error?.message || error,
    };
  }
};

const deleteWorkout = (id) => {
  try {
    const indexForDeleted = DB.workouts.findIndex(
      (workout) => workout.id === id
    );
    if (indexForDeleted === -1) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${id}'`,
      };
    }
    DB.workouts.splice(indexForDeleted, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllWorkouts,
  createNewWorkout,
  getWorkoutById,
  updateWorkout,
  deleteWorkout,
};
