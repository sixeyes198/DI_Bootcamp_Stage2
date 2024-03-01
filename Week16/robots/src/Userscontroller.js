const UsersData = (props) => {
  return (
    <div>
      <img src={`https://robohash.org/${props.id}`} />
      <h1>Name:{props.name}</h1>
      <h2>UserName:{props.username}</h2>
      <h3>Email:{props.email}</h3>
    </div>
  );
};

export default UsersData;
