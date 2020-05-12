var app = new function() { 

    this.el = document.getElementById('todo');   
    
    this.todo = ["Javascript" , "Todo List" , "Project"];

  //start add and delete method in FetchAll()
    this.FetchAll = function() { 
      var data = '';
        for (i = 0; i < this.todo.length; i++) {
          data += '<tr>';
          data += '<td><p class="content">' + this.todo[i] + '</p></td>';
          data += '<td><button class="bn" onclick="app.Delete(' + i + ')">Delete</button></td>';
          data += '</tr>';
        }
      return this.el.innerHTML = data;
    };

    //add 
    this.Add = function () {
      el = document.getElementById('add_Task');
      var Task = el.value;
      if (Task) {
        this.todo.push(Task.trim());
        el.value = '';
        this.FetchAll();
      }
    };
  
    //delete
    this.Delete = function (item) {
      this.todo.splice(item, 1);
      this.FetchAll();
    };  
  }
  app.FetchAll(); //calling the “FetchAll()”