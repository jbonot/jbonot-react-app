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
