'use strict';

function createList() {
  let title = $("[name='list_title']").val()
  new List(title)
  $("[name='list_title']").val('')
  $('#lists').empty()
  $('#select_list').empty()
  store.lists.forEach(function(list) {
    $('#lists').append(`<div class="list"><h2><button data-id=${list.id} class="destroy-list">x</button> ${list.title} </h2><ul id=list-${list.id}></ul></div>`)
    $("#select_list").append(`<option value=${list.id}>${list.title}</option>`)
  })
}

function destroyList(id) {
  store.lists = store.lists.filter(function(list) {
    return list.id !== id
  })
  $('#lists').empty()
  $('#select_list').empty()
  store.lists.forEach(function(list) {
    $('#lists').append(`<div class="list"><h2><button data-id=${list.id} class="destroy-list">x</button> ${list.title} </h2><ul id=list-${list.id}></ul></div>`)
    $("#select_list").append(`<option value=${list.id}>${list.title}</option>`)
  })
}
