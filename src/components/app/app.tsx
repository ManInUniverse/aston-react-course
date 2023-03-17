import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppRoute } from '../../const';

import { Layout } from '../layout/layout';
import { PrivateRoute } from '../private-route/private-route';
import { Fallback } from '../fallback/fallback';
import { ErrorBoundary } from '../error-boundary/error-boundary';

const MainPage = lazy(() => import('../../pages/main-page/main-page'));
const PicturePage = lazy(() => import('../../pages/picture-page/picture-page'));
const SearchResultsPage = lazy(() => import('../../pages/search-results-page/search-results-page'));
const FavoritesPage = lazy(() => import('../../pages/favorites-page/favorites-page'));
const HistoryPage = lazy(() => import('../../pages/history-page/history-page'));
const SignInPage = lazy(() => import('../../pages/sign-in-page/sign-in-page'));
const SignUpPage = lazy(() => import('../../pages/sign-up-page/sign-up-page'));
const NotFoundPage = lazy(() => import('../../pages/not-found-page/not-found-page'));

export const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout />}>
            <Route
              index
              element={
                <ErrorBoundary>
                  <MainPage />
                </ErrorBoundary>
              }
            />

            <Route
              path={AppRoute.Picture}
              element={
                <ErrorBoundary>
                  <PicturePage />
                </ErrorBoundary>
              }
            />

            <Route
              path={AppRoute.Search}
              element={
                <ErrorBoundary>
                  <SearchResultsPage />
                </ErrorBoundary>
              }
            />

            <Route
              path={AppRoute.Favorites}
              element={
                <ErrorBoundary>
                  <PrivateRoute>
                    <FavoritesPage />
                  </PrivateRoute>
                </ErrorBoundary>
              }
            />

            <Route
              path={AppRoute.History}
              element={
                <ErrorBoundary>
                  <PrivateRoute>
                    <HistoryPage />
                  </PrivateRoute>
                </ErrorBoundary>
              }
            />
          </Route>

          <Route
            path={AppRoute.SignIn}
            element={
              <ErrorBoundary>
                <SignInPage />
              </ErrorBoundary>
            }
          />

          <Route
            path={AppRoute.SignUp}
            element={
              <ErrorBoundary>
                <SignUpPage />
              </ErrorBoundary>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
