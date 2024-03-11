import { NextPage } from "next";
import { IGravatarProfile } from "./types";

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
  const data: IGravatarProfile = await getData();

  return <div>{data.entry[0].full_name}</div>;
};

export default Home;
