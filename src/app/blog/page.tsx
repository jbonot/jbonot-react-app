// system imports
import { NextPage } from "next";
import { Container, Typography } from "@mui/material";
import Parser from "rss-parser";

// internal imports
import { BlogPreview } from "../components/BlogPreview";
import { IBlog } from "../types";

const getData = async () => {
  const url = process.env.BLOG_FEED_URL;
  let feed: IBlog | null = null;

  if (url) {
    try {
      const parser = new Parser();
      feed = (await parser.parseURL(url)) as IBlog;
    } catch (error) {
      console.error("Error fetching or parsing RSS feed:", error);
    }
  }
  return feed;
};

const Blog: NextPage = async () => {
  const data = await getData();

  if (!data) {
    return <Container maxWidth="md">Data not found</Container>;
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h3" className="mb-4">
        {data.title}
      </Typography>
      {data.items.map((entry) => {
        return <BlogPreview data={entry} />;
      })}
    </Container>
  );
};

export default Blog;
