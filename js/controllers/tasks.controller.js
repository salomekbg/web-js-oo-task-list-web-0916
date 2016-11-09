'use strict';
// Tasks Controller

function createTask() {
  let description = $("[name='task_description']").val()
  let priority = $("[name='task_priority']").val()
  let list_id = parseInt($('#select_list').val())
  new Task(description, priority, list_id)
  $("[name='task_description']").val('')
  $("[name='task_priority']").val('')
  $(`#list-${list_id}`).empty()
  store.tasks.forEach(function(task) {
    if (task.list_id === list_id) {
      $(`#list-${list_id}`).append(`<button data-id=${task.id} data-list_id=${list_id} class="destroy-task">x</button> ${task.description}, ${task.priority}<br> `)
    }
  })
}

function destroyTask(id, list_id) {
  store.tasks = store.tasks.filter(function(task) {
    return task.id !== id
  })
  $(`#list-${list_id}`).empty()
  store.tasks.forEach(function(task) {
      if (task.list_id === list_id) {
      $(`#list-${list_id}`).append(`<button data-id=${task.id} data-list_id=${list_id} class="destroy-task">x</button> ${task.description}, ${task.priority}<br> `)
    }
  })
}
