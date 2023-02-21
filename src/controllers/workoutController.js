const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status: "OK", data: allWorkouts });
};

const getWorkoutById = (req, res) => {
  const workoutId = req.params.workoutId;
  if (!workoutId) return;

  const workout = workoutService.getWorkoutById(workoutId);
  res.status(200).send({ status: "OK", data: workout });
};

const createWorkout = (req, res) => {
  const { body } = req;

  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  const createdWorkout = workoutService.createWorkout(newWorkout);
  res.status(201).send({ status: "OK", data: createdWorkout });
};

const updateWorkout = (req, res) => {
  const {
    body,
    params: { workoutId },
  } = req;
  if (!workoutId) return;

  const updatedWorkout = workoutService.updateWorkout(workoutId, body);
  res.status(200).send({ status: "OK", data: updatedWorkout });
};

const deleteWorkout = (req, res) => {
  const workoutId = req.params.workoutId;
  if (!workoutId) return;

  workoutService.deleteWorkout(workoutId);
  res.status(204).send({ status: "OK" });
};

module.exports = {
  getAllWorkouts,
  getWorkoutById,
  getAllWorkouts,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
