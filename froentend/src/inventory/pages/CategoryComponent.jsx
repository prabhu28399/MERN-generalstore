import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  IconButton,
  Tooltip,
  Avatar,
} from "@mui/material";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Category as CategoryIcon,
} from "@mui/icons-material";

const CategoryComponent = ({
  categories,
  loading,
  error,
  onAdd,
  onEdit,
  onDelete,
}) => {
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" py={8}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" py={8}>
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <CategoryIcon color="primary" sx={{ mr: 2, fontSize: "2rem" }} />
          Inventory Categories
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={onAdd}
          sx={{ textTransform: "none" }}
        >
          Add Category
        </Button>
      </Box>

      <Paper elevation={3} sx={{ overflow: "hidden" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "grey.100" }}>
                <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Description</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.length > 0 ? (
                categories.map((category) => (
                  <TableRow
                    key={category.id}
                    hover
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{category.id}</TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Avatar
                          sx={{
                            bgcolor: "primary.light",
                            color: "primary.contrastText",
                            width: 32,
                            height: 32,
                            mr: 2,
                          }}
                        >
                          <CategoryIcon fontSize="small" />
                        </Avatar>
                        <Typography variant="body1">{category.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {category.description || "No description"}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={category.is_active ? "Active" : "Inactive"}
                        color={category.is_active ? "success" : "default"}
                        size="small"
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="Edit">
                        <IconButton
                          color="primary"
                          onClick={() => onEdit(category)}
                          sx={{ mr: 1 }}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton
                          color="error"
                          onClick={() => onDelete(category.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ py: 4 }}>
                    <Typography variant="body1" color="text.secondary">
                      No categories found. Add one to get started.
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

CategoryComponent.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      is_active: PropTypes.bool,
    })
  ).isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

CategoryComponent.defaultProps = {
  loading: false,
  error: null,
};

export default CategoryComponent;
