// system imports
import { NextPage } from "next";
import { Container, Grid, Typography } from "@mui/material";
import Parser from "rss-parser";

// internal imports
import { BlogPreview } from "../../components/BlogPreview";
import { IBlog } from "../../types";

const getData = async () => {
  const url = process.env.BLOG_FEED_URL_LOCAL;
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
  // Vars & States - START
  const data = await getData();
  // Vars & States - END

  // Render - START
  if (!data) {
    return <Container maxWidth="md">Data not found</Container>;
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h3" className="mb-4">
        {data.title}
      </Typography>
      <Grid container spacing={2}>
        {data.items.map((entry, index) => {
          return (
            <Grid item md={3} sm={4} xs={6}>
              <BlogPreview key={entry.link} data={entry} index={index} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
  // Render - END
};

export default Blog;
