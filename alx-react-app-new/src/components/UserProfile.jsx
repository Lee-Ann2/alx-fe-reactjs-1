const UserProfile = (props) => {
    return (
      <div style={{border: '1px solid gray', padding: '10px', margin: '10px'}}>
        <h2 style={{ color: 'red' }}>{props.name}</h2>
        <p style={{color:'green'}}>Age:<span style={{ fontWeight: 'bold' }}> {props.age}</span></p>
        <p style={{fontWeight:'bold'}}>Bio: {props.bio}</p>
      </div>
    );
  };

  export default UserProfile;