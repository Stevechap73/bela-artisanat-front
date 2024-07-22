"use client";
import React, { useState, useEffect } from "react";
import { Container, Box, Button, Modal, TextField } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import Header2 from "@/components/Header2";
import CustomTable from "@/components/CustomTable";
import { getAllUsers, deleteUser, updateUser } from "@/services/users";
import { UserType } from "@/utils/Type";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  pseudo: yup.string().required("Pseudo is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .max(255, "Password must be at most 255 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain 8 characters, one uppercase, one lowercase, one number, and one special case character"
    ),
  address: yup.string().required("Address is required"),
  phone: yup.string().required("Phone is required"),
  roleId: yup.number().required("Role is required"),
});

const ManageUsers = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);

  const fetchData = async () => {
    const response = await getAllUsers;
    setUsers(response.data);
  };

  useEffect(() => {
    fetchData();
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

  const handleSave = async (values: UserType) => {
    if (currentUser) {
      try {
        await updateUser(Number(currentUser.id), values);
        // Actualiser la liste des utilisateurs après modification
        fetchData();
        setEditModalOpen(false);
      } catch (error) {
        console.error("There was an error updating the user!", error);
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: currentUser?.firstName || "",
      lastName: currentUser?.lastName || "",
      pseudo: currentUser?.pseudo || "",
      email: currentUser?.email || "",
      password: currentUser?.password || "",
      address: currentUser?.address || "",
      phone: currentUser?.phone || "",
      roleId: currentUser?.roleId || 0,
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: handleSave,
  });

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
            maxHeight: "80vh",
            overflow: "auto",
          }}
        >
          <h2>Edit User</h2>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              label="First Name"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Pseudo"
              name="pseudo"
              value={formik.values.pseudo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.pseudo && Boolean(formik.errors.pseudo)}
              helperText={formik.touched.pseudo && formik.errors.pseudo}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Role"
              name="roleId"
              type="number"
              value={formik.values.roleId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.roleId && Boolean(formik.errors.roleId)}
              helperText={formik.touched.roleId && formik.errors.roleId}
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginRight: 8 }}
            >
              Save
            </Button>
            <Button variant="contained" onClick={() => setEditModalOpen(false)}>
              Cancel
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ManageUsers;
