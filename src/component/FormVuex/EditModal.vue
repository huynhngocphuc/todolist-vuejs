<template>
  <div class="overlay">
    <div class="layout-form ">
      <h2>Edit task: {{ selectedTaskUpdate.idTask }}</h2>
      <div class="line"></div>
      <div class="layout-input">
        <label for="" class="label-input"> Task name</label>
        <input
          type="text"
          placeholder="task name"
          v-model="selectedTaskUpdate.name"
          @keyup.enter="handleUpdateTask"
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
        <button class="btn-primary btn-cancel" @click="setIsOpenModal(false)">
          Cancel
        </button>
        <button class="btn-primary" @click="handleUpdateTask">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "EditModal",
  created(){
    this.selectedTaskUpdate = {...this.selectedTask};
  },
  data(){
    return {
      selectedTaskUpdate: null,
    }
  },
  computed: {
    ...mapState("formEdit", ["selectedTask"]),
  },
  methods: {
    ...mapActions("formInput",["updateTask","saveLocalStorage"]),
    ...mapActions("formEdit",["setIsOpenModal"]),
    handleUpdateTask() {
      if(this.selectedTask.name.trim()){
        this.updateTask(this.selectedTaskUpdate);
        this.saveLocalStorage()
      }
      this.setIsOpenModal(false);
    }
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
