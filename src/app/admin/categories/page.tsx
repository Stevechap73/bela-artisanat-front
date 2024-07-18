"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Box, Button, Modal, TextField } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import Header2 from "@/components/Header2";
import CustomTable from "@/components/CustomTable";
import { CategoryType } from "@/utils/Type";
import {
  addCategory,
  deleteCategory,
  getAllCategories,
  updateCategory,
} from "@/services/category";

const ManageCategories = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<CategoryType | null>(
    null
  );
  const [newCategory, setNewCategory] = useState<CategoryType>({
    id: 0,
    name: "",
  });

  useEffect(() => {
    const getData = async () => {
      const response = await getAllCategories;
      setCategories(response.data);
    };
    getData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteCategory(id);
      // Actualiser la liste des rôles après suppression
      setCategories(categories.filter((category) => category.id !== id));
    } catch (error) {
      console.error("There was an error deleting the category!", error);
    }
  };

  const handleEdit = (category: CategoryType) => {
    setCurrentCategory(category);
    setEditModalOpen(true);
  };

  const handleAdd = () => {
    setAddModalOpen(true);
  };

  const handleSaveEdit = async () => {
    if (currentCategory) {
      try {
        await updateCategory(Number(currentCategory.id), currentCategory);
        // Actualiser la liste des rôles après modification
        setCategories(
          categories.map((category) =>
            category.id === currentCategory.id ? currentCategory : category
          )
        );
        setEditModalOpen(false);
      } catch (error) {
        console.error("There was an error updating the category!", error);
      }
    }
  };

  const handleSaveAdd = async () => {
    try {
      const response = await addCategory(newCategory);
      // Actualiser la liste des rôles après ajout
      setCategories([...categories, response.data]);
      setAddModalOpen(false);
    } catch (error) {
      console.error("There was an error adding the category!", error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (currentCategory) {
      setCurrentCategory({
        ...currentCategory,
        [e.target.name]: e.target.value,
      });
    } else {
      setNewCategory({ ...newCategory, [e.target.name]: e.target.value });
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
          <h1>Manage Categories</h1>
          <Button
            variant="contained"
            color="primary"
            style={{ marginBottom: 16 }}
            onClick={handleAdd}
          >
            Add Role
          </Button>
          <CustomTable
            data={categories}
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
            value={currentCategory?.name || ""}
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
            value={newCategory.name}
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

export default ManageCategories;
