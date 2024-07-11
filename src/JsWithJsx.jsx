export function Avatar() {
    const avatar = '#';
    const description = 'Description of the image';
    return (
      <img
        className="test-image"
        src={avatar}
        alt={description}
        style={{backgroundColor: 'black', color: 'pink'}}
      />
    );
  }

  export function TodoList() {
    const person = {
        name: 'Test Person',
        theme: {
          backgroundColor: 'black',
          color: 'pink'
        }
      };

    return (
      <div style={person.theme}>
        <h1>{person.name}&aposs Todos</h1>
        <img
          className="avatar"
          src="#"
          alt={person.name}
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }
