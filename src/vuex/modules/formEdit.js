export default {
  namespaced: true,
  state: () => ({
    // state properties
    isOpenModal: false,
    selectedTask: null,
  }),
  mutations: {
    // mutation methods
    SET_IS_OPEN_MODAL(state, isOpen) {
      state.isOpenModal = isOpen;
    },
    SET_SELECTED_TASK(state, task) {
      state.selectedTask = task;
    },
  },
  actions: {
    setIsOpenModal({ commit }, payload) {
      commit("SET_IS_OPEN_MODAL", payload);
    },
    setSelectedTask({ commit, rootState }, idTask) {
        const { tasks } = rootState.formInput;
        const taskSelected = tasks.find((task) => task.idTask === idTask);
        commit("SET_SELECTED_TASK", taskSelected);
    },
    // action methods
  },
  getters: {
    // getter methods
  },
};
