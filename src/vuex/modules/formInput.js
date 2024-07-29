export default {
  namespaced: true,
  state: () => ({
    // state properties
    tasks: [],
    selectedTask: null,
  }),
  mutations: {
    // mutation methods
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
    SET_SELECTED_TASK(state, task) {
      state.selectedTask = task;
    },
  },
  actions: {
    addTask({commit, state, dispatch}, payload) {
      commit("SET_TASKS", [...state.tasks, payload]);
      dispatch('saveLocalStorage')
      console.log("🚀 ~ addTask ~ payload:", payload) 
    },
    saveLocalStorage({state}) {
      console.log("save localSrorage run...",state.task);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    // action methods
  },
  getters: {
    // getter methods
    tasks: (state) => state.tasks,
    selectedTask: (state) => state.selectedTask,
  },
};
