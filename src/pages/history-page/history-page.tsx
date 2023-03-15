import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getUserData } from '../../store/slices/user-slice/selectors';
import { clearHistoryAction } from '../../store/user-api-actions';

import { ReactComponent as ClearIcon } from '../../assets/clear-icon.svg';

import { HistoryList } from '../../components/history-list/history-list';

export const HistoryPage = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getUserData);

  const onClearHistoryButtonClick = () => {
    if (userData) {
      dispatch(clearHistoryAction({ email: userData.email }));
    }
  };

  return (
    <section className="px-10">
      <h1 className="sr-only">Search history</h1>

      {userData && (
        <>
          {userData.history.length ? (
            <>
              <button
                onClick={onClearHistoryButtonClick}
                title="Clear history"
                className="px-3 py-1 rounded-md shadow-sm bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 mb-4 block ml-auto"
              >
                <ClearIcon fill="grey" />

                <span className="sr-only">Clear history</span>
              </button>

              <HistoryList historyItems={userData.history} />
            </>
          ) : (
            <p className="text-center text-3xl my-10">Your search history will be displayed here</p>
          )}
        </>
      )}
    </section>
  );
};
