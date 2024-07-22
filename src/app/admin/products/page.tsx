"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import {
  Container,
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import Sidebar from "@/components/Sidebar";
import Header2 from "@/components/Header2";
import CustomTable from "@/components/CustomTable";
import { productType } from "@/utils/Type";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "@/services/getProducts";

const ManageProducts = () => {
  const [products, setProducts] = useState<productType[]>([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<productType | null>(
    null
  );
  const [newProduct, setNewProduct] = useState<productType>({
    categoryId: 0,
    title: "",
    description: "",
    image: "",
    price: 0,
    status: "",
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  useEffect(() => {
    const getData = async () => {
      const response = await getAllProducts;
      setProducts(response.data);
    };
    getData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product.id !== id));
      setSnackbarMessage("Product deleted successfully!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("There was an error deleting the product!", error);
      setSnackbarMessage("Failed to delete product.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleEdit = (product: productType) => {
    setCurrentProduct(product);
    setEditModalOpen(true);
  };

  const handleAdd = () => {
    setAddModalOpen(true);
  };

  const handleSaveEdit = async () => {
    if (currentProduct) {
      try {
        await updateProduct(Number(currentProduct.id), currentProduct);
        setProducts(
          products.map((product) =>
            product.id === currentProduct.id ? currentProduct : product
          )
        );
        setEditModalOpen(false);
        setSnackbarMessage("Product updated successfully!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
      } catch (error) {
        console.error("There was an error updating the product!", error);
        setSnackbarMessage("Failed to update product.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    }
  };

  const handleSaveAdd = async () => {
    try {
      const response = await addProduct(newProduct);
      setProducts([...products, response.data]);
      setAddModalOpen(false);
      setSnackbarMessage("Product added successfully!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("There was an error adding the product!", error);
      setSnackbarMessage("Failed to add product.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const parsedValue =
      name === "categoryId" || name === "price" ? Number(value) : value;
    if (currentProduct) {
      setCurrentProduct({ ...currentProduct, [name]: parsedValue });
    } else {
      setNewProduct({ ...newProduct, [name]: parsedValue });
    }
  };

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "categoryId", headerName: "Category ID" },
    { field: "title", headerName: "Title" },
    // { field: "description", headerName: "Description" },
    // { field: "image", headerName: "Image" },
    { field: "price", headerName: "Price" },
    { field: "status", headerName: "Status" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Header2 />
        <Container sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Manage Products
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mb: 2 }}
            onClick={handleAdd}
          >
            Add Product
          </Button>
          <CustomTable
            data={products}
            columns={columns}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </Container>
      </Box>
      <Modal open={editModalOpen} onClose={() => setEditModalOpen(false)}>
        <Box
          sx={{
            padding: 4,
            backgroundColor: "white",
            margin: "20px auto",
            maxWidth: 500,
            maxHeight: "80vh",
            overflow: "auto",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Edit Product
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Category ID"
                name="categoryId"
                value={currentProduct?.categoryId || ""}
                onChange={handleChange}
                fullWidth
                margin="normal"
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Title"
                name="title"
                value={currentProduct?.title || ""}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                name="description"
                value={currentProduct?.description || ""}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Image"
                name="image"
                value={currentProduct?.image || ""}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Price"
                name="price"
                value={currentProduct?.price || ""}
                onChange={handleChange}
                fullWidth
                margin="normal"
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Status"
                name="status"
                value={currentProduct?.status || ""}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSaveEdit}
                sx={{ marginRight: 2 }}
              >
                Save
              </Button>
              <Button
                variant="contained"
                onClick={() => setEditModalOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Modal open={addModalOpen} onClose={() => setAddModalOpen(false)}>
        <Box
          sx={{
            padding: 4,
            backgroundColor: "white",
            margin: "20px auto",
            maxWidth: 500,
            maxHeight: "80vh",
            overflow: "auto",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Add Product
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Category ID"
                name="categoryId"
                value={newProduct.categoryId}
                onChange={handleChange}
                fullWidth
                margin="normal"
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Title"
                name="title"
                value={newProduct.title}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                name="description"
                value={newProduct.description}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Image"
                name="image"
                value={newProduct.image}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Price"
                name="price"
                value={newProduct.price}
                onChange={handleChange}
                fullWidth
                margin="normal"
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Status"
                name="status"
                value={newProduct.status}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSaveAdd}
                sx={{ marginRight: 2 }}
              >
                Save
              </Button>
              <Button
                variant="contained"
                onClick={() => setAddModalOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ManageProducts;
