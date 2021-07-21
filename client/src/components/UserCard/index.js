import React from "react";


// function UserCard() {
//     return (
//     <div>
//       <h4>User Name</h4>
//       <h4>Bio</h4>
//       <h4>Avatar</h4>
//     </div>
//   );
// }

function UserCard(props) {
    return (
    <div>
      <h4>{props.username}</h4>
      <h4>{props.bio}</h4>
      <h4>{props.avatar}</h4>
    </div>
  );
}

export default UserCard;

