import { useRecoilState } from 'recoil';
import { cartListAtom } from '../stores/cartListStore.ts';
import { setCartListInLocalStorage } from '../utils/localStorageCartList.ts';

type UpdateCartListParams = {
  itemId: number;
  value: number;
};

const useUpdateCartList = () => {
  const [cartList, setCartList] = useRecoilState(cartListAtom);

  const updateCartList = ({ itemId, value }: UpdateCartListParams) => {
    const newCartList = JSON.parse(JSON.stringify(cartList));

    if (!newCartList[itemId]) {
      newCartList[itemId] = {
        quantity: 1,
      };
    }

    if (newCartList[itemId] && value <= 0) {
      delete newCartList[itemId];
    }

    if (newCartList[itemId] && value > 0) {
      newCartList[itemId].quantity = value;
    }

    setCartListInLocalStorage(newCartList);

    setCartList(newCartList);
  };

  return { updateCartList };
};

export default useUpdateCartList;