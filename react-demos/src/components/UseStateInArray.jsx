import { useState } from "react";

const UseStateInArray = () => {
  const [friends, setFriends] = useState(["Waqas", "Ahsan", "Luqman"]);

  const newFriendHandler = () => setFriends([...friends, "Shaheer"]);

  const removeFriendHandler = () =>
    setFriends(friends.filter((f) => f !== "Ahsan"));

  const updateFriendHandler = () =>
    setFriends(friends.map((f) => (f === "Luqman" ? "Munawar" : f)));
  return (
    <div>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
      <button onClick={newFriendHandler}>Add Friend</button>
      <button onClick={removeFriendHandler}>Remove Friend</button>
      <button onClick={updateFriendHandler}>Update Friend</button>
    </div>
  );
};
export default UseStateInArray;
