'use strict';

const Task = (function createTask() {
  let id = 0
  return class {
    constructor(description, priority, list_id){
      this.description = description
      this.priority = priority
      this.id = id++
      this.list_id = list_id
      store.tasks = [...store.tasks, this]
    }
  }
}())
