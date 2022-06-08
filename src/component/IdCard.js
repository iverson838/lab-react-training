function IdCard(props) {
  return (
    <div className="IdCard">
      <img src={props.picture} alt="profilePicture" />
      firstName={props.firstName}
      <br />
      lastName={props.lastName}
      <br />
      gender={props.gender}
      <br />
      height = {props.height}
      <br />
      birthdate = {props.birth.toLocaleDateString()}
    </div>
  );
}

export default IdCard;
