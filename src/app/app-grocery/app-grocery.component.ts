import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  // styleUrls: ['./app-grocery.component.css']
  styleUrls: ['../../../src/assets/bootstrap/css/bootstrap.min.css']
})
export class AppGroceryComponent implements OnInit {

  task = {
    name:'',
    id:0
  };
  tasks =[];
  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
    if(this.task.id === 0){
      this.tasks.push({
        id: (new Date()).getTime(),
        name: this.task.name,
        strike: false
        });
    }

    this.task = {
      name: '',
      id: 0
  };

    // this.tasks.push({name: this.task });
    // this.task='';
  }

  onEdit(item){
  this.task=item;
  }

  onDelete(item){
    for(var i=0;i<this.tasks.length;i ++){
      if(this.tasks[i].id == item.id){
        this.tasks.splice(i,1);
        this.task.name='';
        break;
      }
      
    }
  }

  onStrike(item)
  {
    for(var i=0;i<this.tasks.length;i++){
      if(this.tasks[i].id == item.id){{
        if(this.tasks[i].strike){
          this.tasks[i].strike = false;
        } else {
          this.tasks[i].strike = true;
        }
        break;
      }

      }
    }

  }

}
