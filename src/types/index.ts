export interface IGravatarData {
  entry: IGravatarProfile[];
}

export interface IGravatarProfile {
  hash: string;
  requestHash: string;
  profileUrl: string;
  preferredUsername: string;
  thumbnailUrl: string;
  photos: {
    value: string;
    type: string;
  }[];
  last_profile_edit: string;
  displayName: string;
  name: {
    givenName: string;
    familyName: string;
    formatted: string;
  };
  full_name: string;
  urls: {
    title: string;
    value: string;
  }[];
}

export interface IBlogEntry {
  categories: string[];
  content: string;
  contentSnippet: string;
  creator: string;
  isoDate: string;
  link: string;
  pubDate: string;
  title: string;
}

export interface IBlog {
  items: IBlogEntry[];
  title: string;
  description: string;
  link: string;
  language: string;
  lastBuildDate: string;
}
