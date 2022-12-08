const taskManager = {
    todo: [],
    complete: [],
    addTask: function(item) {
        this.todo.push(item)
        console.log('할 일 추가:', item);
    },
    completeTask: function(item) {
        this.complete.push(item)
        index_item = this.todo.indexOf(item)
        this.todo.splice(index_item, 1)
        console.log('완료:', item)
    },
    listAllTasks: function() {
        console.log('할 일 목록:', this.todo)
        console.log('완료 목록:', this.complete)
    },
    cancelCompletedTask: function(item) {
        index_cancel = this.complete.indexOf(item)
        this.complete.splice(index_cancel, 1)
        console.log('취소:', item)
        this.todo.push(item)
        this.todo.sort()
        this.complete.sort()
    }
}


taskManager.addTask('a')
taskManager.addTask('b')
taskManager.addTask('c')
taskManager.completeTask('a')
taskManager.listAllTasks('b')
taskManager.completeTask('c')
taskManager.listAllTasks()
taskManager.cancelCompletedTask('a')
taskManager.listAllTasks()