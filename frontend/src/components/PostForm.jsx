import { useState } from "react";
import { uploadPost } from "../api";
import { TextField, Button, Modal, Box, IconButton } from "@mui/material";
import { toast } from "react-toastify";
import CloseIcon from "@mui/icons-material/Close"; // Import the Close icon

const PostForm = ({ onPostCreated, open, onClose }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("text", text);
    formData.append("image", image);

    try {
      const { data } = await uploadPost(formData);
      onPostCreated(data);
    } catch (error) {
      toast.error("Failed to create post");
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2, // Rounded corners
          pt: 5,
        }}
      >
        {/* Close button in the top-left corner */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 5,
            left: 5,
            color: "text.secondary",
          }}
        >
          <CloseIcon />
        </IconButton>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Post Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            sx={{ mb: 2 }}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
            style={{ marginBottom: "16px" }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              textTransform: "none", // Prevent uppercase transformation
              fontWeight: "bold", // Make text bold
              py: 1.5, // Add padding to the button
              backgroundColor: "primary.main", // Use primary color
              "&:hover": {
                backgroundColor: "primary.dark", // Darken on hover
              },
            }}
          >
            Upload
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default PostForm;
