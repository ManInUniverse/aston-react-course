import { useNavigate, useParams } from 'react-router-dom';

import { useGetPictureByIdQuery } from '../../services/picture-api';
import { formatDateTime } from '../../utils';
import { AppRoute } from '../../const';
import { addToFavoritesAction } from '../../store/user-api-actions';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getUserData } from '../../store/slices/user-slice/selectors';

import { ReactComponent as LocationIcon } from '../../assets/location-icon.svg';
import { ReactComponent as DownloadIcon } from '../../assets/download-icon.svg';

import { FavoriteButton } from '../../components/favorite-button/favorite-button';

export const PicturePage = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data: picture } = useGetPictureByIdQuery(id as string);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getUserData);

  const isFavorite = userData?.favorites.some((id) => id === picture?.id);

  const handleFavoriteButtonClick = () => {
    if (userData && picture) {
      dispatch(
        addToFavoritesAction({
          email: userData.email,
          id: picture.id,
        })
      );
    } else {
      navigate(AppRoute.SignIn);
    }
  };

  if (isLoading) {
    return <p className="text-center text-3xl my-10">Loading...</p>;
  }

  return (
    <section className="flex justify-center">
      {picture && (
        <>
          <div className="flex flex-col rounded-md shadow-lg overflow-hidden border border-neutral-200  ">
            <div
              className="px-5 py-2 flex items-center flex-wrap"
              style={{ backgroundColor: `${picture.color}` }}
            >
              <h1 className="sr-only">{picture.description}</h1>

              <dl className="flex gap-5 mr-5 flex-wrap">
                <div className="flex items-center px-3 py-2 rounded-md shadow-sm bg-neutral-100 border border-neutral-200">
                  <dt className="mr-1 whitespace-nowrap">Created at:</dt>
                  <dd className="whitespace-nowrap">
                    {formatDateTime(picture.creationDate, 'MMMM D, YYYY')}
                  </dd>
                </div>

                <div className="flex items-center px-3 py-2 rounded-md shadow-sm bg-neutral-100 border border-neutral-200">
                  <dt className="mr-1 whitespace-nowrap">Views:</dt>
                  <dd className="whitespace-nowrap">{picture.views}</dd>
                </div>

                <div className="flex items-center px-3 py-2 rounded-md shadow-sm bg-neutral-100 border border-neutral-200">
                  <dt className="mr-1 whitespace-nowrap">Downloads:</dt>
                  <dd className="whitespace-nowrap">{picture.downloads}</dd>
                </div>

                {picture.locationName && (
                  <div className="flex items-center px-3 py-2 rounded-md shadow-sm bg-neutral-100 border border-neutral-200">
                    <dt className="mr-1 whitespace-nowrap">
                      <LocationIcon width="20px" height="20px" fill="grey" />

                      <span className="sr-only">Location:</span>
                    </dt>
                    <dd className="whitespace-nowrap">{picture.locationName}</dd>
                  </div>
                )}
              </dl>

              <div className="ml-auto flex">
                <FavoriteButton active={!!isFavorite} onButtonClick={handleFavoriteButtonClick} />

                <a
                  className="p-3 rounded-md shadow-sm bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 ml-4 block"
                  href={picture.downloadLink}
                  title="Download full-size picture"
                  target="_blank"
                  rel="noreferrer"
                >
                  <DownloadIcon stroke="grey" />

                  <span className="sr-only">Download</span>
                </a>
              </div>
            </div>

            <img src={picture.urlRegular} alt={picture.description} title={picture.description} />
          </div>
        </>
      )}
    </section>
  );
};
