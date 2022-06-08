function Greetings(props) {
  let greeting;
  switch (props.lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    default:
      greeting = 'Hello';
  }

  return (
    <div className="Greetings">
      <p>
        {greeting} {props.children}
      </p>
    </div>
  );
}

export default Greetings;
