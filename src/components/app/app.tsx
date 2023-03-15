import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';

import { Layout } from '../layout/layout';
import { PrivateRoute } from '../private-route/private-route';

import { MainPage } from '../../pages/main-page/main-page';
import { PicturePage } from '../../pages/picture-page/picture-page';
import { SearchResultsPage } from '../../pages/search-results-page/search-results-page';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { HistoryPage } from '../../pages/history-page/history-page';
import { SignInPage } from '../../pages/sign-in-page/sign-in-page';
import { SignUpPage } from '../../pages/sign-up-page/sign-up-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<MainPage />} />

          <Route path={AppRoute.Picture} element={<PicturePage />} />

          <Route path={AppRoute.Search} element={<SearchResultsPage />} />

          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />

          <Route
            path={AppRoute.History}
            element={
              <PrivateRoute>
                <HistoryPage />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path={AppRoute.SignIn} element={<SignInPage />} />

        <Route path={AppRoute.SignUp} element={<SignUpPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
