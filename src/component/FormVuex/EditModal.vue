<template>
  <div v-if="isModalEnable" class="overlay">
    <div class="layout-form">
      <h2>Edit task: {{ selectedTaskUpdate.idTask }}</h2>
      <div class="line"></div>
      <div class="layout-input">
        <label for="" class="label-input"> Task name</label>
        <input
          type="text"
          placeholder="task name"
          v-model="selectedTaskUpdate.name"
        />
      </div>

      <div class="layout-input">
        <label for="" class="label-input"> Status</label>
        <select class="list-status" v-model="selectedTaskUpdate.status">
          <option value="Inprogress">Inprogress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div class="line"></div>
      <div class="filter-buttons">
        <button class="btn-primary btn-cancel" @click="handleCloseModel">
          Cancel
        </button>
        <button class="btn-primary" @click="handleUpdateTask">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditModal",
  props: {
    isModalEnable: Boolean,
    selectedTask: {
      type: Object,
      default: () => ({
        idTask: Date.now().toString(),
        name: "",
        status: "Inprogress",
      }),
    },
    save: Function,
    cancel: Function,
  },

  data() {
    return {
      selectedTaskUpdate: { ...this.selectedTask },
    };
  },
  methods: {
    handleCloseModel() {
      this.cancel();
    },
    handleUpdateTask() {
      this.save(this.selectedTaskUpdate);
      this.cancel();
    },
  },
  watch: {
    selectedTask: {
      handler(newVal) {
        this.selectedTaskUpdate = { ...newVal };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
