const UsersData = (props) => {
  return (
    <div>
      <img src={`https://robohash.org/${props.id}`} />
      <h2>Name:{props.name}</h2>
      <h3>User Name:{props.username}</h3>
      <h3>Email:{props.email}</h3>
    </div>
  );
};

export default UsersData;
