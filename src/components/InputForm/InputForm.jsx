import React from 'react';
import { WrapperInputStyle } from './style';

const InputForm = ( props ) => {
  const { placeholder = 'Nhập text', ...rests } = props;
  const handleonChangeInput = (e) => {
    props.onChange(e.target.value);
  }
  return (
    <WrapperInputStyle placeholder={placeholder} value={props.value} {...rests} onChange={handleonChangeInput} />
  );
};

export default InputForm;