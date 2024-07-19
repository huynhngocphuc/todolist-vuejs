<template lang="">
  <div class="layout-form">
    <h2>TODO APP</h2>
    <div class="line"></div>
    <div class="layout-input">
      <label for="" class="label-input"> Task name</label>
      <input type="text" placeholder="task name" />
    </div>
    <div class="action">
      <button class="btn-primary">ADD</button>
    </div>
    <div class="line"></div>

    <div class="filter-buttons">
      <button class="btn-primary">Completed</button>
      <button class="btn-primary">Inprogress</button>
      <button class="btn-primary">ALL</button>
    </div>
    <div class="list-task">
      <div class="task">
        <div class="task-content">Learn Vuejs</div>
        <div class="line-left"></div>
        <div class="task-status">Inprogress</div>
        <div class="line-left"></div>
        <div class="task-actions">
          <div class="edit-btn">
            <i class="fa-solid fa-pen"></i>
            <button class="">Edit</button>
          </div>
          <button class="delete-btn">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
      <div class="task">
        <div class="task-content">Learn Vuejs</div>
        <div class="line-left"></div>
        <div class="task-status">Inprogress</div>
        <div class="line-left"></div>
        <div class="task-actions">
          <div class="edit-btn">
            <i class="fa-solid fa-pen"></i>
            <button>Edit</button>
          </div>
          <button class="delete-btn">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormInput",
  data() {
   
    return {
      // taskList: [],
      // taskInput: "",
      // filterStatus: "ALL"
    };
  },
};
</script>
<style lang="scss"></style>
