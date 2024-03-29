// system imports
import { Box, Typography } from "@mui/material";
import React from "react";

// internal imports
import { IBlogEntry } from "@/types";

interface IBlogPreviewProps {
  data: IBlogEntry;
  index: number; // Used only for the random image generator
}

export const BlogPreview: React.FC<IBlogPreviewProps> = ({
  data,
  index
}): JSX.Element => {
  return (
    <Box className="pb-2 mb-2">
      <div className="mb-2">
        <Box
          component="img"
          alt={data.title}
          src={`https://picsum.photos/852/567?random=${index}`}
        />
        <Typography variant="h6">{data.title}</Typography>
      </div>
      <Typography variant="body1">{data.contentSnippet}</Typography>
      <Typography variant="body1">{data.creator}</Typography>
    </Box>
  );
};
