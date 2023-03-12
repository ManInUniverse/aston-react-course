import { ReactComponent as PlusIcon } from '../../assets/plus-icon.svg';
import { ReactComponent as CheckMarkIcon } from '../../assets/check-mark-icon.svg';

type Props = {
  isActive: boolean;
  onButtonClick: () => void;
};

export const FavoriteButton = ({ isActive, onButtonClick }: Props) => {
  return (
    <button
      onClick={onButtonClick}
      className={`${isActive ? 'bg-green-500' : 'bg-neutral-200'} rounded-md p-2`}
      title="Add to favorites"
    >
      {isActive ? (
        <CheckMarkIcon width="20" height="20" fill="white" />
      ) : (
        <PlusIcon width="20" height="20" fill="grey" />
      )}

      <span className="sr-only">Add to favorites</span>
    </button>
  );
};
