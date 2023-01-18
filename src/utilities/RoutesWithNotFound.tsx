import { Routes, Route } from 'react-router';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const RoutesWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path='*' element={<h1>Route not found.</h1>} />
    </Routes>
  );
};

export default RoutesWithNotFound;
