![Pictorial](https://github.com/ManInUniverse/aston-react-course/blob/main/src/assets/logo-main.png)

# Проект "Pictorial"

Личный проект в рамках React-интенсива Aston. Pictorial - это сервис для поиска, просмотра и скачивания изображений. С помощью данного приложения ты сможешь найти изображения и фотографии на любой вкус!

Зарегистрируйся, и сможешь добавлять понравившиеся картинки в список избранного, а также просматривать историю поиска.

## При разработке было использовано:

- React.js (сборка - Create React App);
- TypeScript;
- Redux Toolkit (+ RTK Query);
- React Router;
- Day.js;
- Tailwind CSS;

## Особенности проекта:

- Преимущественно используются функциональные компоненты;
- Есть разделение на "глупые" и "умные" компоненты ([SearchForm](./src/components/search-form/search-form.tsx)/[Search](./src/components/search/search.tsx), [FavoriteList](./src/components/favorite-list/favorite-list.tsx)/[FavoritesPage](./src/pages/favorites-page/favorites-page.tsx), [Toggler](./src/components/toggler/toggler.tsx)/[ThemeControl](./src/components/theme-control/theme-control.tsx));
- Есть рендеринг списков ([PictureList](./src/components/picture-list/picture-list.tsx), [HistoryList](./src/components/history-list/history-list.tsx));
- Применены управляемые компоненты форм ([SignInForm](./src/components/sign-in-form/sign-in-form.tsx), [SignUpForm](./src/components/sign-up-form/sign-up-form.tsx));
- Применен Context API для изменения цветовой темы ([ThemeProvider](./src/components/theme-provider/theme-provider.tsx), [Layout](./src/components/layout/layout.tsx));
- Присутствуют ErrorBoundaries ([ErrorBoundary](./src/components/error-boundary/error-boundary.tsx));
- Используется кастомный хук [useDebounce](./src/hooks/useDebounce.ts) в работе поисковых запросов;
- В компоненте [PrivateRoute](./src/components/private-route/private-route.tsx) использованы PropTypes;
- Используется lazy-загрузка модулей страниц приложения ([App](./src/components/app/app.tsx));
- В качестве state-менеджера использован Redux + Redux Toolkit ([store](./src/store/));
- Используется кастомная middleware [logger](./src/store/middleware/logger.ts) для логирования действий пользователя;
- Запросы к API обрабатываются с помощью RTK Query ([pictureAPI](./src/services/picture-api.ts));
- Реализована авторизация с использованием localStorage;
