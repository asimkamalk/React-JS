const List = () => {
  const userList = [
    {
      id: 1,
      name: "Asim Kamal",
      age: 22,
    },
    {
      id: 2,
      name: "Waqas",
      age: 25,
    },
    {
      id: 3,
      name: "Shaheer",
      age: 24,
    },
    {
      id: 4,
      name: "Luqman",
      age: 22,
    },
  ];
  return (
    <div>
      {userList.map(({ id, name, age }) => (
        <ul key={id}>
          <li>Name: {name}</li>
          <li>Age: {age}</li>
        </ul>
      ))}
    </div>
  );
};
export default List;
