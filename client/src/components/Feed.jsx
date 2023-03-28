import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
// import Post from "./Post";
import Post from "./Post/Post.jsx";
import Card from "./Card/Card.jsx";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          <Card>
            <Post />
          </Card>

          {/* <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post /> */}
        </>
      )}
    </Box>
  );
};

export default Feed;
