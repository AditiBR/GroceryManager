import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['../../../src/assets/bootstrap/css/bootstrap.min.css']
})
export class AppGroceryComponent implements OnInit {
  task = {
    name:'',
    id:0
  };
  tasks =[];
  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
   // Validation if there are only blank spaces nothing gets added to the list
    if(!this.task.name.trim())
    {
      this.task = {
        name: '',
        id: 0
    };  
      return;
    }   
  
   // Add first item to the list
    if(this.tasks.length == 0){
      this.tasks.push({
        id: (new Date()).getTime(),
        name: this.task.name,
        strike: false
        });
        this.task = {
          name: '',
          id: 0
      };
    
        return;
    }

    // If list has any items check if entered item is alreday there in the list, allow to add that item only if it is marked as done previously if it is not marked as complete do not add that item as it is still there in the list
    var addtoList = true;    
  
    for(var i=0;i<this.tasks.length;i ++){
        if(this.tasks[i].name.toLowerCase() == this.task.name.toLowerCase()){
              if(!this.tasks[i].strike)
              {
                  addtoList= false;
              }           
        }         
      }
      if(addtoList){
          this.tasks.push({
                        id: (new Date()).getTime(),
                        name: this.task.name,
                         strike: false
                      });
      } 
    this.task = {
      name: '',
      id: 0
    };    
  }

  //Edit an existing item in the list
  onEdit(item){
  this.task=item;
  }

  //Delete an existing item in the list
  onDelete(item){
    for(var i=0;i<this.tasks.length;i ++){
      if(this.tasks[i].id == item.id){
        this.tasks.splice(i,1);
        this.task.name='';
        break;
      }      
    }
  }

 // Mark item as complete
  onStrike(item)
  {
    for(var i=0;i<this.tasks.length;i++){
      if(this.tasks[i].id == item.id){{
        if(this.tasks[i].strike){
          this.tasks[i].strike = false;
        } else {
          this.tasks[i].strike = true;
        }
        break;
      }
      }
    }
  }
}
