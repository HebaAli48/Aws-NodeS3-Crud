import { useEffect, useState } from "react";
import { fetchPosts } from "../api";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Grid, // Correct import for MUI v5
} from "@mui/material";
import PostForm from "./PostForm";
import { toast } from "react-toastify";
import AddIcon from "@mui/icons-material/Add"; // Import the Add icon
import dayjs from "dayjs"; // Import dayjs for date formatting

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchPosts().then((res) => setPosts(res.data));
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePostCreated = (newPost) => {
    setPosts([newPost, ...posts]);
    toast.success("Post created successfully!");
    handleClose();
  };

  return (
    <div>
      {/* Add Post Button aligned to the right */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3, mt: 2 }}>
        <Button
          variant="contained"
          onClick={handleOpen}
          startIcon={<AddIcon />} // Add icon to the button
          sx={{
            textTransform: "none", // Prevent uppercase transformation
            fontWeight: "bold", // Make text bold
          }}
        >
          Add Post
        </Button>
      </Box>

      {/* Modal for adding a new post */}
      <PostForm
        open={open}
        onClose={handleClose}
        onPostCreated={handlePostCreated}
      />

      {/* Grid for 4 cards per line on large screens */}
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={post._id} gap={2}>
            <Card
              sx={{
                height: "100",
                display: "flex",
                flexDirection: "column",
                padding: 2, // Padding inside the card
                mb: 2,
              }}
            >
              {/* Fixed height for the image */}
              <CardMedia
                component="img"
                height="200"
                image={post.imageUrl}
                alt={post.text}
                sx={{
                  objectFit: "contain", // Ensure the image fits within the fixed height
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {post.text}
                </Typography>

                {/* Display the createdAt date in a formatted way */}
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    color: "text.secondary",
                    mb: 2,
                    fontStyle: "italic",
                  }}
                >
                  Posted on:{" "}
                  {dayjs(post.createdAt).format("MMMM D, YYYY h:mm A")}
                </Typography>

                {/* Centered "See More" button with mt: 5 */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 5, // Top margin of 40px
                  }}
                >
                  <Button variant="outlined" size="small">
                    See More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PostList;
