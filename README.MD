Учебный проект в рамках React-интенсива компании Aston

### Реализованы следующие требования к функциональности:

### 1 уровень (необходимый минимум)

### React

- Функциональные компоненты с хуками в приоритете над классовыми
- Есть четкое разделение на умные и глупые компоненты
- Есть рендеринг списков [MoviesList](./src/components/Movies/MoviesList/MoviesList.tsx), [MainSlider](./src/components/Main/MainSlider/MainSlider.tsx), [WishlistMovies](./src/pages/Wishlist/WishlistMovies/WishlistMovies.tsx)
- Реализована хотя бы одна форма [Authorization](./src/components/Authorization/Authorization.tsx), [Registration](./src/components/Registration/Registration.tsx)
- Есть применение Context API [App](./src/App.tsx), [Movies](./src/components/Movies/Movies.tsx)
- Есть применение предохранителя [ErrorBoundary](./src/hoc/ErrorBoundary/ErrorBoundary.tsx)
- Есть хотя бы один кастомный хук [useUser](./src/hooks/useUser.tsx)
- Хотя бы несколько компонентов используют PropTypes [MoviesCart](./src/components/Movies/MoviesCart/MoviesCart.tsx), [HeaderControl](./src/components/Header/HeaderControl/HeaderControl.tsx)
- Поиск не должен триггерить много запросов к серверу
- Есть применение lazy + Suspense [App](./src/App.tsx)

### Redux

- Используем Modern Redux with Redux Toolkit [store](./src/store/store.tsx)
- Используем слайсы [popUpSlice](./src/store/popUpSlice.tsx), [userSlice](./src/store/userSlice.tsx)
- Есть хотя бы одна кастомная мидлвара []()
- Используется RTK Query [MoviesService](./src/services/MoviesService.ts), [UsersService](./src/services/UsersService.ts), [WishlistService](./src/services/WishlistService.ts)
- Используется Transforming Responses []()

### 2 уровень (необязательный)

- Проведена оптимизация приложения
- Используются мемоизированные селекторы
- Используется нормализованная структура стейта

### TypeScript

- Использование TypeScript
