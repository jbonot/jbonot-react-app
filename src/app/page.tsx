import { NextPage } from "next";
import { IGravatarData, IGravatarProfile } from "../types";
import { Avatar, Container, Typography } from "@mui/material";

interface IPageProps {}

const getData = async () => {
  const res = await fetch(
    `https://www.gravatar.com/${process.env.EMAIL_HASH}.json`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};

const Home: NextPage<IPageProps> = async () => {
  // Vars & States - START
  const data: IGravatarData = await getData();
  const profile: IGravatarProfile | undefined = data.entry[0];
  // Vars & States - END

  // Render - START
  return (
    <Container maxWidth="md">
      <Typography variant="h3" className="mb-4">
        {data.entry[0].full_name}
      </Typography>
      <Avatar alt={profile.full_name} src={profile.thumbnailUrl} />
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </Typography>
    </Container>
  );
  // Render - END
};

export default Home;
