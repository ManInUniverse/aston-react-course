import { ReactComponent as FavoriteIcon } from '../../assets/favorite-icon.svg';
import { ReactComponent as FavoriteFilledIcon } from '../../assets/favorite-filled-icon.svg';

type Props = {
  active: boolean;
  onButtonClick: () => void;
};

export const FavoriteButton = ({ active, onButtonClick }: Props) => {
  return (
    <button
      onClick={onButtonClick}
      className="bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-md shadow-sm p-2"
      title={active ? 'Remove from favorites' : 'Add to favorites'}
    >
      {active ? (
        <FavoriteFilledIcon width="27" height="27" fill="red" />
      ) : (
        <FavoriteIcon width="27" height="27" fill="grey" />
      )}

      <span className="sr-only">{active ? 'Remove from favorites' : 'Add to favorites'}</span>
    </button>
  );
};
