'use strict';

const List = (function createList() {
  let id = 0
  return class {
    constructor(title){
      this.title = title
      this.id = id++
      store.lists = [...store.lists, this]
    }
  }
}())
