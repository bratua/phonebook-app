import { useSelector } from 'react-redux';
import {
  selectUser,
  selectToken,
  selectIsUpdating,
  selectIsLoggedIn,
} from 'redux/auth/selectors';

export const useAuthState = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const isUpdating = useSelector(selectIsUpdating);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return { user, token, isUpdating, isLoggedIn };
};
