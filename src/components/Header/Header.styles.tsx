import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: var(--color-header);
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0px;
  z-index: 999;
  flex: 0 0 80px;

  @media screen and (max-width: 1750px) {
    padding: 0 80px;
  }
  @media screen and (max-width: 576px) {
    padding: 0 40px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  justify-content: space-between;
`;

export const LogoButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  padding-bottom: 4px;
  cursor: pointer;
`;

export const LogoTitle = styled.h1`
  margin: 4px 0 0 12px;
  color: var(--color-white);
  font-weight: 900;
  font-size: 32px;
  line-height: 58px;
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 58px;
  margin: 0 16px 14px 0;
`;

export const ShoppingCartButton = styled.button`
  display: flex;
  background: transparent;
  border: none;
  align-items: center;
  cursor: pointer;
`;

export const ShoppingCartButtonText = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 12px;
  color: var(--color-white);
  margin-right: 6px;
`;

export const ShoppingCartQuantity = styled.div`
  background-color: var(--color-shopping-cart-quantity);
  border-radius: 50%;
  width: 26px;
  height: 26px;
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
