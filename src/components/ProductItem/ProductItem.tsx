import * as Styled from './ProductItem.styles.tsx';
import ShoppingCartLogo from '../@common/ShoppingCartLogo.tsx';
import useUpdateCartList from '../../hooks/useUpdateCartList.ts';
import { useRecoilValue } from 'recoil';
import { productQuantitySelector } from '../../stores/cartListStore.ts';
import StepperInput from '../@common/StepperInput/StepperInput.tsx';

type ProductItemProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const ProductItem = ({ id, name, price, imageUrl }: ProductItemProps) => {
  const { updateCartList } = useUpdateCartList();
  const productQuantity = useRecoilValue(productQuantitySelector(id));

  const handleAddToCartButton = () => {
    updateCartList({ itemId: id, value: 1 });
  };

  const CartButton = () => {
    return (
      <Styled.CartButton onClick={handleAddToCartButton}>
        <ShoppingCartLogo isFlipped={true} width={24} height={22} fill='#AAAAAA' />
      </Styled.CartButton>
    );
  };

  const handleStepperInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCartList({ itemId: id, value: parseInt(e.target.value, 10) });
  };

  return (
    <Styled.ProductItemWrapper>
      <Styled.ImageOverflowContainer>
        <Styled.ImageContainer>
          <Styled.ProductItemImage src={imageUrl} />
        </Styled.ImageContainer>
      </Styled.ImageOverflowContainer>
      <Styled.ProductItemInfo>
        <Styled.ProductItemInfoUpperBoundary>
          <Styled.ProductItemTitle>{name}</Styled.ProductItemTitle>
          {productQuantity === 0 ? <CartButton /> : <StepperInput value={productQuantity} onChange={handleStepperInputChange} />}
        </Styled.ProductItemInfoUpperBoundary>
        <Styled.ProductItemPrice>{price.toLocaleString()}원</Styled.ProductItemPrice>
      </Styled.ProductItemInfo>
    </Styled.ProductItemWrapper>
  );
};

export default ProductItem;
