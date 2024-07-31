export default {
  namespaced: true,
  state: () => ({
    // state properties
    tasks: [],
    conditionFilter: "ALL",
    tasksFilter: [],
  }),
  mutations: {
    // mutation methods
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
    REMOVE_TASK(state, indexRemove) {
      state.tasks.splice(indexRemove, 1);
    },
    UPDATE_TASK(state, { index, taskUpdated }) {
      state.tasks[index] = taskUpdated;
    },
    SET_TASKS_FILTER(state, tasksFilter) {
      state.tasksFilter = tasksFilter;
    },
    SET_CONDITION_FILTER(state, condition) {
      state.conditionFilter = condition;
    },
  },
  actions: {
    addTask({ commit, state }, payload) {
      commit("SET_TASKS", [...state.tasks, payload]);
    },
    saveLocalStorage({ state }) {
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    getTasksLocalStorage({ commit }) {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      if (tasks) {
        commit("SET_TASKS", tasks);
      }
    },
    removeTask({ state, commit }, idTask) {
      const index = state.tasks.findIndex((task) => task.idTask === idTask);
      if (index !== -1) {
        commit("REMOVE_TASK", index);
      }
    },
    updateTask({ commit, state }, taskUpdated) {
      const index = state.tasks.findIndex(
        (task) => task.idTask === taskUpdated.idTask
      );
      if (index > -1) {
        commit("UPDATE_TASK", { index, taskUpdated });
      }
    },
    setFilter({ commit, state }, conditionFilter) {
      conditionFilter = conditionFilter || "ALL";
      commit("SET_CONDITION_FILTER", conditionFilter);
      if (conditionFilter === "ALL") {
        commit("SET_TASKS_FILTER", [...state.tasks]);
        return;
      }
      const tasksFilter = state.tasks.filter(
        (task) => task.status === conditionFilter
      );
      commit("SET_TASKS_FILTER", tasksFilter);
    },
    // action methods
  },
  getters: {
    // getter methods
    tasks: (state) => state.tasks,
    selectedTask: (state) => state.selectedTask,
  },
};
