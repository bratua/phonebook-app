import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsUpdating,
  selectIsLoggedIn,
} from 'redux/auth/selectors';

export const useAuthState = () => {
  const user = useSelector(selectUser);
  const isUpdating = useSelector(selectIsUpdating);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return { user, isUpdating, isLoggedIn };
};
