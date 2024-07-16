export default function Animals() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
  
    return (
      <div>
        <h1>Animals: </h1>
        <ul>
          {animals.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>
      </div>
    );
  }

  //jsx can render arrays

  function ListItem(props) {
    return props.animal.startsWith("L") && <li>{props.animal}</li>
  }
  
  // function List(props) {
  //   if (!props.animals) {
  //     return <div>Loading...</div>;
  //   }
  
  //   if (props.animals.length === 0) {
  //     return <div>There are no animals in the list!</div>;
  //   }

  //   return (
  //     <ul>
  //       {props.animals.map((animal) => {
  //         return <ListItem key={animal} animal={animal} />;
  //       })}
  //     </ul>
  //   );
  // }

  function List(props) {
    return (
      <>
        {!props.animals && <div>Loading...</div>}
        {props.animals && props.animals.length > 0 && (
          <ul>
            {props.animals.map((animal) => {
              return <ListItem key={animal} animal={animal} />;
            })}
          </ul>
        )}
        {props.animals && props.animals.length === 0 && <div>There are no animals in the list!</div>}
      </>
    );
  }
  
  export function App() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
  
    return (
      <div>
        <h1>Animals: </h1>
        <List animals={animals} />
      </div>
    );
  }