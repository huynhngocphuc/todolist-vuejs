export default {
  namespaced: true,
  state: () => ({
    // state properties
    tasks: [],
  }),
  mutations: {
    // mutation methods
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
    REMOVE_TASK(state, indexRemove) {
      state.tasks.splice(indexRemove, 1);
    },
    UPDATE_TASK(state, {index, taskUpdated}) {
      // console.log("🚀 ~ UPDATE_TASK ~ index:", taskUpdated)
      
      state.tasks[index] = taskUpdated;
    },
  },
  actions: {
    addTask({ commit, state, dispatch }, payload) {
      console.log("🚀 ~ addTask running ....");
      commit("SET_TASKS", [...state.tasks, payload]);
    },
    saveLocalStorage({ state }) {
      console.log("save localSrorage run...");
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    getTasksLocalStorage({ commit }) {
      console.log("get task localSrorage run...");
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
      console.log("🚀 ~ updateTask ~ taskUpdated:", taskUpdated)
      const index = state.tasks.findIndex(
        (task) => task.idTask === taskUpdated.idTask
      );
      console.log("🚀 ~ updateTask ~ index:", index)
      if (index > -1) {
        commit("UPDATE_TASK", { index, taskUpdated });
      }
    },
    // action methods
  },
  getters: {
    // getter methods
    tasks: (state) => state.tasks,
    selectedTask: (state) => state.selectedTask,
  },
};
