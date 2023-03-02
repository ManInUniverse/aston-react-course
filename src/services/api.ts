import { Picture, PictureDTO } from '../types/picture';

const BASE_URL = 'https://api.unsplash.com';
const API_ACCESS_KEY = process.env.REACT_APP_API_ACCESS_KEY;
const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    Authorization: `Client-ID ${API_ACCESS_KEY}`,
  },
};

const getPictureFromDto = ({
  id,
  alt_description,
  location: { name, city, country },
  urls: { regular, small },
  color,
  views,
  downloads,
  links: { download },
  created_at,
}: PictureDTO): Picture => ({
  id,
  description: alt_description,
  locationName: name,
  locationCity: city,
  locationCountry: country,
  urlRegular: regular,
  urlSmall: small,
  color,
  views,
  downloads,
  downloadLink: download,
  creationDate: created_at,
});

export const fetchRandomPictures = async () => {
  const PICTURES_COUNT = 12;
  const response = await fetch(`${BASE_URL}/photos/random?count=${PICTURES_COUNT}`, FETCH_OPTIONS);
  const data = (await response.json()) as PictureDTO[];
  const pictures = data.map(getPictureFromDto);

  return pictures;
};

export const fetchPictureById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/photos/${id}`, FETCH_OPTIONS);
  const dto = (await response.json()) as PictureDTO;
  const picture = getPictureFromDto(dto);

  return picture;
};
