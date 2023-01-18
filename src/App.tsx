import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { publicRoutes } from './models';
import MyStore from './redux/store';
import { RoutesWithNotFound } from './utilities';

const Home = lazy(() => import('./pages/Home/Home'));
const Game = lazy(() => import('./pages/Game/Game'));

function App() {
  return (
    <Provider store={MyStore}>
      <Suspense fallback='loading...'>
        <RoutesWithNotFound>
          <Route path={'/'} element={<Home />} />
          <Route path={`/${publicRoutes.GAME}`} element={<Game />} />
        </RoutesWithNotFound>
      </Suspense>
    </Provider>
  );
}

export default App;
