import { FC } from 'react';
import './App.css';
import { AppRoute } from './App.models';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { DetailPlayer } from './pages/DetailPlayer/DetailPlayer'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

const App: FC = () => {

  const routes: AppRoute[] = [
    {
      path: '/players/:id',
      component: <DetailPlayer />
    },
    {
      path: '/players',
      component: <Home />,
    },
  ];

  const createRoute = (route: AppRoute) => {
    return <Route path={route.path} element={route.component} key={route.path} />;
  };

  return (
    <>
      <div className='App-header'>
        <QueryClientProvider client={queryClient}>
          <Routes>
            {routes.map((route) => createRoute(route))}
            <Route path="/" element={<Navigate replace to="/players" />} />
          </Routes>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
