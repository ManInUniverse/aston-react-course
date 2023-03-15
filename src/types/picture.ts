export type Picture = {
  id: string;
  description: string;
  locationName: string | null;
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
  alt_description: string | null;
  description: string | null;
  location?: {
    name: string | null;
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

export type SearchResponse = {
  total: number;
  total_pages: number;
  results: PictureDTO[];
};
