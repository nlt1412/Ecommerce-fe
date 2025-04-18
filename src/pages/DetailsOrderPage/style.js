import styled from "styled-components";

// Header thông tin đơn hàng
export const WrapperHeaderUser = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
`;

// Nhóm thông tin người dùng, giao hàng, thanh toán
export const WrapperInfoUser = styled.div`
  flex: 1;
  min-width: 300px;
`;

export const WrapperLabel = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
`;

export const WrapperContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  color: #555;

  span {
    font-weight: 500;
    color: #222;
  }

  .status-payment {
    color: red;
    font-weight: bold;
  }

  .name-delivery {
    font-weight: 600;
  }
`;

// Vùng sản phẩm + tổng tiền
export const WrapperStyleContent = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const WrapperItemLabel = styled.div`
  width: 250px;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;

// Mỗi dòng sản phẩm
export const WrapperProduct = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
`;

export const WrapperNameProduct = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  gap: 12px;

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border: 1px solid #eaeaea;
    padding: 2px;
    border-radius: 4px;
  }

  div {
    font-size: 14px;
    color: #333;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
`;

export const WrapperItem = styled.div`
  width: 250px;
  font-size: 14px;
  text-align: center;
  font-weight: ${props => props.bold ? 'bold' : '400'};
  color: ${props => props.red ? 'red' : '#333'};
`;

// Tổng tiền, phí ship, tổng cộng
export const WrapperAllPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  padding: 4px 0;

  ${WrapperItemLabel}, ${WrapperItem} {
    width: auto;
    min-width: 150px;
    text-align: right;
  }
`;
