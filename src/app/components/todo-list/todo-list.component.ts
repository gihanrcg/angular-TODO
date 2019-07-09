import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos : object[];
  todoTitle : string;
  idForTodo : number;

  constructor() { }

  ngOnInit() {
    
    this.idForTodo = 4;
    this.todoTitle = '';
    this.todos = [
      {
        'id' : 1,
        'title' : 'Finish Homeworks',
        'completed' : false,
        'editing' : false
      },
      {
        'id' : 2,
        'title' : 'MS Club',
        'completed' : false,
        'editing' : false
      },
      {
        'id' : 3,
        'title' : 'Test code',
        'completed' : false,
        'editing' : false
      }
    ]
  }

  addTodo() : void{

    if(this.todoTitle.trim().length === 0){
      return ;
    }

    this.todos.push({
      id : this.idForTodo,
      title : this.todoTitle,
      completed : false,
      editing:false
    })

    this.todoTitle = '';
    this.idForTodo++;
  }

  deleteTodo(id : number) : void{
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  completeTodo(id : number) : void{

    console.log(id);

  }
}
