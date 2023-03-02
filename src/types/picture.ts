export type Picture = {
  id: string;
  description: string;
  locationName: string | null;
  locationCity: string | null;
  locationCountry: string | null;
  urlRegular: string;
  urlSmall: string;
  color: string;
  views: number;
  downloads: number;
  downloadLink: string;
  creationDate: string;
};

export type Pictures = Picture[];

export type PictureDTO = {
  id: string;
  alt_description: string;
  location: {
    name: string | null;
    city: string | null;
    country: string | null;
  };
  urls: {
    regular: string;
    small: string;
  };
  color: string;
  views: number;
  downloads: number;
  links: {
    download: string;
  };
  created_at: string;
};
