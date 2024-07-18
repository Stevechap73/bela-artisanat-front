"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Box, Button, Modal, TextField } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import Header2 from "@/components/Header2";
import CustomTable from "@/components/CustomTable";
// import { getAllRoles, addRole, updateRole, deleteRole } from "@/services/roles";
import { RoleType } from "@/utils/Type";
import { addRole, deleteRole, getAllRoles, updateRole } from "@/services/role";

const ManageRoles = () => {
  const [roles, setRoles] = useState<RoleType[]>([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState<RoleType | null>(null);
  const [newRole, setNewRole] = useState<RoleType>({ id: 0, name: "" });

  useEffect(() => {
    const getData = async () => {
      const response = await getAllRoles;
      setRoles(response.data);
    };
    getData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteRole(id);
      // Actualiser la liste des rôles après suppression
      setRoles(roles.filter((role) => role.id !== id));
    } catch (error) {
      console.error("There was an error deleting the role!", error);
    }
  };

  const handleEdit = (role: RoleType) => {
    setCurrentRole(role);
    setEditModalOpen(true);
  };

  const handleAdd = () => {
    setAddModalOpen(true);
  };

  const handleSaveEdit = async () => {
    if (currentRole) {
      try {
        await updateRole(Number(currentRole.id), currentRole);
        // Actualiser la liste des rôles après modification
        setRoles(
          roles.map((role) => (role.id === currentRole.id ? currentRole : role))
        );
        setEditModalOpen(false);
      } catch (error) {
        console.error("There was an error updating the role!", error);
      }
    }
  };

  const handleSaveAdd = async () => {
    try {
      const response = await addRole(newRole);
      // Actualiser la liste des rôles après ajout
      setRoles([...roles, response.data]);
      setAddModalOpen(false);
    } catch (error) {
      console.error("There was an error adding the role!", error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (currentRole) {
      setCurrentRole({ ...currentRole, [e.target.name]: e.target.value });
    } else {
      setNewRole({ ...newRole, [e.target.name]: e.target.value });
    }
  };

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Box style={{ flexGrow: 1 }}>
        <Header2 />
        <Container>
          <h1>Manage Roles</h1>
          <Button
            variant="contained"
            color="primary"
            style={{ marginBottom: 16 }}
            onClick={handleAdd}
          >
            Add Role
          </Button>
          <CustomTable
            data={roles}
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
          <h2>Edit Role</h2>
          <TextField
            label="Name"
            name="name"
            value={currentRole?.name || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveEdit}
            style={{ marginRight: 8 }}
          >
            Save
          </Button>
          <Button variant="contained" onClick={() => setEditModalOpen(false)}>
            Cancel
          </Button>
        </Box>
      </Modal>
      <Modal open={addModalOpen} onClose={() => setAddModalOpen(false)}>
        <Box
          style={{
            padding: 20,
            backgroundColor: "white",
            margin: "20px auto",
            maxWidth: 500,
          }}
        >
          <h2>Add Role</h2>
          <TextField
            label="Name"
            name="name"
            value={newRole.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveAdd}
            style={{ marginRight: 8 }}
          >
            Save
          </Button>
          <Button variant="contained" onClick={() => setAddModalOpen(false)}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ManageRoles;
