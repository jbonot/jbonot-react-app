// system imports
import { Box, Typography } from "@mui/material";
import React from "react";

// internal imports
import { IBlogEntry } from "@/app/types";

interface IBlogPreviewProps {
  data: IBlogEntry;
}

export const BlogPreview: React.FC<IBlogPreviewProps> = ({
  data
}): JSX.Element => {
  return (
    <Box className="pb-2 mb-2">
      <div className="mb-2">
        <Typography variant="h6">{data.title}</Typography>
        <Typography variant="caption">{data.pubDate}</Typography>
      </div>
      <Typography variant="body1">{data.contentSnippet}</Typography>
    </Box>
  );
};
