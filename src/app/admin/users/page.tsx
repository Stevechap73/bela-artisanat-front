// "use client";
// import React, { useState, useEffect } from "react";
// import { Container, Box, Button } from "@mui/material";
// import Sidebar from "@/components/Sidebar";
// import Header2 from "@/components/Header2";
// import CustomTable from "@/components/CustomTable";
// import { getAllUsers, deleteUser } from "@/services/users";

// const ManageUsers = () => {
//   const [users, setUsers] = useState([]);
//    const [editModalOpen, setEditModalOpen] = useState(false);
//    const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     const getData = async () => {
//       const response = await getAllUsers;
//       setUsers(response.data);
//     };
//     getData();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await deleteUser(id);
//       // Actualiser la liste des utilisateurs après suppression
//       setUsers(users.filter((user) => user.id !== id));
//     } catch (error) {
//       console.error("There was an error deleting the user!", error);
//     }
//   };

//   const columns = [
//     { field: "id", headerName: "ID" },
//     { field: "firstName", headerName: "First Name" },
//     { field: "lastName", headerName: "Last Name" },
//     { field: "email", headerName: "Email" },
//   ];

//   return (
//     <div style={{ display: "flex" }}>
//       <Sidebar />
//       <Box style={{ flexGrow: 1 }}>
//         <Header2 />
//         <Container>
//           <h1>Manage Users</h1>
//           <Button
//             variant="contained"
//             color="primary"
//             style={{ marginBottom: 16 }}
//           >
//             Add User
//           </Button>
//           <CustomTable data={users} columns={columns} onDelete={handleDelete} />
//         </Container>
//       </Box>
//     </div>
//   );
// };

// export default ManageUsers;

// "use client";
// import React, { useState, useEffect } from "react";
// import { Container, Box, Button, Modal, TextField } from "@mui/material";
// import Sidebar from "@/components/Sidebar";
// import Header2 from "@/components/Header2";
// import CustomTable from "@/components/CustomTable";
// import { getAllUsers, deleteUser, updateUser } from "@/services/users";
// import { UserType } from "@/utils/Type";

// const ManageUsers = () => {
//   const [users, setUsers] = useState<UserType[]>([]);
//   const [editModalOpen, setEditModalOpen] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     const getData = async () => {
//       const response = await getAllUsers;
//       setUsers(response.data);
//     };
//     getData();
//   }, []);

//   const handleDelete = async (id: UserType) => {
//     try {
//       await deleteUser(Number(id));
//       // Actualiser la liste des utilisateurs après suppression
//       setUsers(users.filter((user) => user.id !== Number(id)));
//     } catch (error) {
//       console.error("There was an error deleting the user!", error);
//     }
//   };

//   const handleEdit = (user: UserType) => {
//     setCurrentUser(user);
//     setEditModalOpen(true);
//   };

//   const handleSave = async () => {
//     try {
//       await updateUser(currentUser.id, currentUser);
//       // Actualiser la liste des utilisateurs après modification
//       setUsers(
//         users.map((user) => (user.id === currentUser.id ? currentUser : user))
//       );
//       setEditModalOpen(false);
//     } catch (error) {
//       console.error("There was an error updating the user!", error);
//     }
//   };

//   const handleChange = (e) => {
//     setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
//   };

//   const columns = [
//     { field: "id", headerName: "ID" },
//     { field: "firstName", headerName: "First Name" },
//     { field: "lastName", headerName: "Last Name" },
//     { field: "email", headerName: "Email" },
//   ];

//   return (
//     <div style={{ display: "flex" }}>
//       <Sidebar />
//       <Box style={{ flexGrow: 1 }}>
//         <Header2 />
//         <Container>
//           <h1>Manage Users</h1>
//           <Button
//             variant="contained"
//             color="primary"
//             style={{ marginBottom: 16 }}
//           >
//             Add User
//           </Button>
//           <CustomTable
//             data={users}
//             columns={columns}
//             onDelete={handleDelete}
//             onEdit={handleEdit}
//           />
//         </Container>
//       </Box>
//       <Modal open={editModalOpen} onClose={() => setEditModalOpen(false)}>
//         <Box
//           style={{
//             padding: 20,
//             backgroundColor: "white",
//             margin: "20px auto",
//             maxWidth: 500,
//           }}
//         >
//           <h2>Edit User</h2>
//           <TextField
//             label="First Name"
//             name="firstName"
//             value={currentUser?.firstName || ""}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Last Name"
//             name="lastName"
//             value={currentUser?.lastName || ""}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Email"
//             name="email"
//             value={currentUser?.email || ""}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleSave}
//             style={{ marginRight: 8 }}
//           >
//             Save
//           </Button>
//           <Button variant="contained" onClick={() => setEditModalOpen(false)}>
//             Cancel
//           </Button>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default ManageUsers;

"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Box, Button, Modal, TextField } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import Header2 from "@/components/Header2";
import CustomTable from "@/components/CustomTable";
import { getAllUsers, deleteUser, updateUser } from "@/services/users";
import { UserType } from "@/utils/Type";

const ManageUsers = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);

  useEffect(() => {
    const getData = async () => {
      const response = await getAllUsers;
      setUsers(response.data);
    };
    getData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteUser(id);
      // Actualiser la liste des utilisateurs après suppression
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("There was an error deleting the user!", error);
    }
  };

  const handleEdit = (user: UserType) => {
    setCurrentUser(user);
    setEditModalOpen(true);
  };

  const handleSave = async () => {
    if (currentUser) {
      try {
        await updateUser(Number(currentUser.id), currentUser);
        // Actualiser la liste des utilisateurs après modification
        setUsers(
          users.map((user) => (user.id === currentUser.id ? currentUser : user))
        );
        setEditModalOpen(false);
      } catch (error) {
        console.error("There was an error updating the user!", error);
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (currentUser) {
      setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
    }
  };

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "firstName", headerName: "First Name" },
    { field: "lastName", headerName: "Last Name" },
    { field: "email", headerName: "Email" },
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Box style={{ flexGrow: 1 }}>
        <Header2 />
        <Container>
          <h1>Manage Users</h1>
          <Button
            variant="contained"
            color="primary"
            style={{ marginBottom: 16 }}
          >
            Add User
          </Button>
          <CustomTable
            data={users}
            columns={columns}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </Container>
      </Box>
      <Modal open={editModalOpen} onClose={() => setEditModalOpen(false)}>
        <Box
          style={{
            padding: 20,
            backgroundColor: "white",
            margin: "20px auto",
            maxWidth: 500,
          }}
        >
          <h2>Edit User</h2>
          <TextField
            label="First Name"
            name="firstName"
            value={currentUser?.firstName || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={currentUser?.lastName || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={currentUser?.email || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            style={{ marginRight: 8 }}
          >
            Save
          </Button>
          <Button variant="contained" onClick={() => setEditModalOpen(false)}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ManageUsers;
