import React from 'react';

 const SelectedUser = ({ selected, selectUser }) => {
  if (!selected) return null;

     return (
         <h3>SelectedUser</h3>
     )
//   return (
//     <Card />
//       <Message
//         onDismiss={() => selectUser(null)}
//       />
//       <Image src={selected.avatar} />
//       <Card.Content>
//         <Card.Header>{selected.username}</Card.Header>
//       </Card.Content>
//     </Card>
//   );
};

export default SelectedUser;