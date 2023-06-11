const express = require('express')
const app=express()
app.use(express.json())
const TodoList = []

  app.post('/addItem',(req,res)=>{
      const Id = req.body.Todo.Id;
      const todo = req.body.Todo.todo;
      const Todo = {
          Id : Id,
          todo : todo
      };
      for(let i = 0; i < TodoList.length; i++){
          if(Id == TodoList[i].Id){
              res.send("Same Id Todo exist alredy");
              return;
          }
      }
      TodoList.push(Todo);
      console.log(TodoList);
      res.send(`Todo Added`);
  })
  
  app.get('/getToDoList',(req,res)=>{
      console.log(TodoList);
      res.send(TodoList);
  })
  
  app.put('/updateitem', (req, res)=>{
      const Id = req.body.Todo.Id;
      const todo = req.body.Todo.todo;
      for (let i = 0; i < TodoList.length; i++) {
        if (Id == TodoList[i].Id) {
          TodoList[i].todo = todo;
          res.send("Todo Updated");
          return;
        }
      }
      res.send("Same Id are not exist")
  })
  
  app.delete('/deleteitem',(req,res)=>{
      const Id = req.body.Id;
      let idx = -1;
      for(let i = 0; i < TodoList.length; i++){
          if(Id == TodoList[i].Id){
              idx = i;
              break;
          }
      }
      if(idx == -1){
          res.send("Same Id are not exist");
          return;
      }
      for(let i = idx; i < TodoList.length; i++){
          TodoList[i] = TodoList[i+1];
      }
      TodoList.pop();
      res.send("Todo Deleted");
  })
  

app.listen(3000,()=>{
    console.log("Server is running");
})
