import styled from 'styled-components';

export const ProductItemWrapper = styled.div`
  width: 226px;
`;

export const ImageOverflowContainer = styled.div`
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  position: relative;
  transition: transform 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    background-color: var(--color-image-overlay);
    background-size: 100%;
    z-index: 1;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProductItemTitle = styled.span`
  font-size: 14px;
  margin-right: 10px;
`;

export const ProductItemPrice = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
`;

export const ProductItemInfo = styled.div`
  width: 100%;
  padding: 18px 12px;
`;

export const ProductItemInfoUpperBoundary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 56px;
`;
