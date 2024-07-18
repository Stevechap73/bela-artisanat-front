"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Box, Button, Modal, TextField } from "@mui/material";
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
// import {
//   getAllProducts,
//   addProduct,
//   updateProduct,
//   deleteProduct,
// } from "@/services/products";
// import { ProductType } from "@/utils/Type";

const ManageProducts = () => {
  const [products, setProducts] = useState<productType[]>([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<productType | null>(
    null
  );
  const [newProduct, setNewProduct] = useState<productType>({
    id: 0,
    categoryId: 0,
    title: "",
    description: "",
    image: "",
    price: 0,
    status: "",
  });

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
      // Actualiser la liste des produits après suppression
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("There was an error deleting the product!", error);
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
        // Actualiser la liste des produits après modification
        setProducts(
          products.map((product) =>
            product.id === currentProduct.id ? currentProduct : product
          )
        );
        setEditModalOpen(false);
      } catch (error) {
        console.error("There was an error updating the product!", error);
      }
    }
  };

  const handleSaveAdd = async () => {
    try {
      const response = await addProduct(newProduct);
      // Actualiser la liste des produits après ajout
      setProducts([...products, response.data]);
      setAddModalOpen(false);
    } catch (error) {
      console.error("There was an error adding the product!", error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (currentProduct) {
      setCurrentProduct({ ...currentProduct, [e.target.name]: e.target.value });
    } else {
      setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    }
  };

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "categoryId", headerName: "Category ID" },
    { field: "title", headerName: "Title" },
    { field: "description", headerName: "Description" },
    { field: "image", headerName: "Image" },
    { field: "price", headerName: "Price" },
    { field: "status", headerName: "Status" },
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Box style={{ flexGrow: 1 }}>
        <Header2 />
        <Container>
          <h1>Manage Products</h1>
          <Button
            variant="contained"
            color="primary"
            style={{ marginBottom: 16 }}
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
          style={{
            padding: 20,
            backgroundColor: "white",
            margin: "20px auto",
            maxWidth: 500,
          }}
        >
          <h2>Edit Product</h2>
          <TextField
            label="Category ID"
            name="categoryId"
            value={currentProduct?.categoryId || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Title"
            name="title"
            value={currentProduct?.title || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={currentProduct?.description || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Image"
            name="image"
            value={currentProduct?.image || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            name="price"
            value={currentProduct?.price || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Status"
            name="status"
            value={currentProduct?.status || ""}
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
          <h2>Add Product</h2>
          <TextField
            label="Category ID"
            name="categoryId"
            value={newProduct.categoryId}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Title"
            name="title"
            value={newProduct.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Image"
            name="image"
            value={newProduct.image}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Status"
            name="status"
            value={newProduct.status}
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

export default ManageProducts;
