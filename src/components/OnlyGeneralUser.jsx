import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function OnlyGeneralUserRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser && (currentUser.role == 1) ? (
    <Outlet />
  ) : (
    <Navigate to='/sign-in' />
  );
}