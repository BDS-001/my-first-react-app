const todos = [
    { task: "mow the yard", id: 'unique-id-1' },
    { task: "Work on Odin Projects", id: 'unique-id-2' },
    { task: "feed the cat", id: 'unique-id-3'},
  ];
  
  export function TodoList() {
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    );
  }

  //not reccommended to use array index, list can change