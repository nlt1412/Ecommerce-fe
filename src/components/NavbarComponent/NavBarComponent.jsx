import React from "react";
import { WrapperLableText, WrapperTextValue, WrapperContent, WrapperTextPrice } from "./style";
import { Checkbox, Rate } from "antd";
import { Link } from "react-router-dom";

const NavBarComponent = () => {
  const onChange = () => {};
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
  return options.map((option, index) => {
    return (
      <Link to={option.link} key={index} style={{ textDecoration: 'none' }}>
        <WrapperTextValue>{option.label}</WrapperTextValue>
      </Link>
    );
  });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}
          >
            {options.map((option, index) => {
              return (
                <Checkbox key={index} style={{ marginLeft: 0 }} value={option.value}>{option.label}</Checkbox>
              );
            })}
          </Checkbox.Group>
        );
        case 'star':
          return options.map((option, index) => {
            return (
              <div key={index} style={{ display: 'flex' }}>
                <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                <span>{`tu ${option} sao`}</span>
              </div>
            )
          })
          case 'price':
          return options.map((option, index) => {
            return (
              <WrapperTextPrice key={index}>{option}</WrapperTextPrice>
            )
          })
        default:
          return {}
    }
  };

  return (
    <div>
      <WrapperLableText>Danh mục</WrapperLableText>
      <WrapperContent>
      {renderContent("text", [
        { label: "Balo và vali", link: "/product/Balo_va_vali" },
        { label: "Bách hóa online", link: "/product/Bach_hoa_online" },
        { label: "Giày thể thao", link: "/product/Giay_the_thao" },
        { label: "Laptop", link: "/product/Laptop" },
        { label: "Xe máy", link: "/product/Xe_may" },
        { label: "Xe điện", link: "/product/Xe_đien" },
        { label: "Điện thoại Smartphone", link: "/product/Đien_thoai_Smartphone" },
        { label: "Đồ gia dụng", link: "/product/Đo_gia_dung" },
      ])}
      </WrapperContent>
    </div>
  );
};

export default NavBarComponent;
