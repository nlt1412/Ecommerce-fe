import React, { useEffect } from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "../SignUpPage/style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import imageLogo from '../../assets/images/login.png';
import { useState } from 'react';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import * as UserService from '../../services/UserService';
import Loading from "../../components/LoadingComponent/Loading";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as message from '../../components/Message/Message';

const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleonChangeEmail = (value) => {
    setEmail(value);
  }

  const mutation = useMutationHooks(
    data => UserService.signupUser(data)
  );

  const { data, isPending, isSuccess, isError } = mutation;

  useEffect(() => {
    if (isSuccess) {
      message.success();
      handleNavigateSignIn();
    } else if (isError) {
      message.error();
    }
  }, [isSuccess, isError]);

  const handleonChangePassword = (value) => {
    setPassword(value);
  }

  const handleonChangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  }

  const handleNavigateSignIn = () => {
    navigate('/sign-in');
  }

  const handleSignUp = () => {
    mutation.mutate({email, password, confirmPassword})
  }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập vào tạo tài khoản</p>
          <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" value={email} onChange={handleonChangeEmail} />
          <div style={{ position: 'relative'}}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}>{
                isShowPassword ? (
                    <EyeFilled />
                  ) : (
                    <EyeInvisibleFilled />
                  )
                }
                </span>
                <InputForm placeholder="password" style={{ marginBottom: '10px' }} type={isShowPassword ? "text" : "password"}
                value={password} onChange={handleonChangePassword} />
            </div>
            <div style={{ position: 'relative' }}>
              <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
              >{
                isShowConfirmPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
                </span>
                <InputForm placeholder="confirm password" type={isShowConfirmPassword ? "text" : "password"}
                value={confirmPassword} onChange={handleonChangeConfirmPassword}/>
            </div>
            {data?.status === 'ERR' && <span style={{ color: 'red'}}>{data?.message}</span>}
            <Loading isLoading={isPending}>
          <ButtonComponent
            disabled={!email.length || !password.length || !confirmPassword.length}
            onClick={handleSignUp}
            size={40}
            styleButton={{
              background: 'rgb(255, 57, 69)',
              height: '48px',
              width: '100%',
              border: 'none',
              borderRadius: '4px',
              margin: '26px 0 10px'
            }}
            textbutton={"Đăng ký"}
            styletextbutton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
          ></ButtonComponent>
          </Loading>
          <p>Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigateSignIn}> Đăng nhập</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
            <Image src={imageLogo} preview={false} alt="image-logo" height="203px" width="203px"/>
            <h4>Mua sắm tại LTTD</h4>
        </WrapperContainerRight>
      </div>
    </div>
    )
}

export default SignUpPage;