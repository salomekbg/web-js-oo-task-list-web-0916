$(document).ready(function() {
  $("input[id='submit_list']").click(function(event) {
    event.preventDefault()
    createList()
  })

  $('#lists').on('click', '.destroy-list', function() {
    event.preventDefault()
    let id = $(this).data('id')
    destroyList(id)
  })

  $("input[id='submit_task']").click(function(event) {
    event.preventDefault()
    createTask()
  })

  $('#lists').on('click', '.destroy-task', function() {
    event.preventDefault()
    let id = $(this).data('id')
    let list_id = $(this).data('list_id')
    destroyTask(id, list_id)
  })
})
