import React, { useContext } from "react";
import { HiOutlineEyeOff, HiOutlineEye } from 'react-icons/hi'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import iconcoolshop from "../assets/logo-2.png";
import AuthService from "../services/AuthService"
import { AppContext } from "../Providers/ApplicationContext"
import Modals from '../components/Modals'
import config from "../config";

const Login = () => {
  const navigate = useNavigate()
  const { setToken, setUserLogin } = useContext(AppContext)
  const [message, setMessage] = useState('')
  const [type, setType] = useState('password');
  const [isShow, setIsShow] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  document.title = "Login"

  const handleToggle = () => {
    if (type === 'password') {
      setType('text');
      setIsShow(true);
    } else {
      setType('password');
      setIsShow(false);
    }
  }

  const onSubmit = (data) => {//for test data when submit

    // Lay thong tin user dang dang nhap bang token
    const fetchApiGetInfoUserLogin = async (token, callback) => {
      const result = await AuthService.getProfile(token)

      // Neu lay duoc thong tin user thi luu vao AppContext
      // Nguoc lai xoa token
      if (result.success) {
        setUserLogin(result.data)
      } else {
        setToken('')
      }
      callback(result.success)
    }

    // Call api dang nhap
    const fetchApiLogin = async () => {
      const result = await AuthService.login(data)

      // Neu dang nhap thanh cong thi luu token va chuyen huong toi home
      if (result.success) {
        localStorage.setItem('token', result.data)
        setToken(result.data)

        await fetchApiGetInfoUserLogin(result.data, (boolean) => {
          // Neu lay duoc thong tin user tu token
          if (boolean) {
            navigate(config.routes.home)
          }
        })
      } else {
        setMessage("Tên tài khoản hoặc mật khẩu không chính xác!")
      }
    }

    fetchApiLogin()
  }

  return (
    <div className="h-[100vh] relative bg-LightBlue w-full">
      <div
        className="h-98 shadow-md rounded-[12px] p-2 text-center bg-slate-50
        w-full"
      >
        <h3 className="text-MainBlue font-semibold">Quản lý App CoolShop </h3>
      </div>
      {/* set this component is center */}
      <form method="post" onSubmit={handleSubmit(onSubmit)}>
        <div
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        w-[423px] min-h-[416px] rounded-b-[12px] shadow-lg bg-white"
        >
          <div className="h-[20px] w-full bg-BlackCool"></div>
          <div className="w-full mt-[16px]">
            <img className="mx-auto h-[53px] " src={iconcoolshop} alt="icon" />
          </div>
          <div className="account flex flex-col w-[90%] mx-auto mt-2">
            <h6 className="font-semibold">Tài khoản</h6>
            <div className="">
              {/* validate by register */}
              <input name="username" {...register('username', { required: true })}
                className="rounded-full w-[90%]  shadow-md p-2"
                placeholder="Nhập tài khoản ..."
              /> </div>
          </div>
          <div className="account flex flex-col w-[90%] mx-auto mt-8 relative">
            <h6 className="font-semibold">Mật khẩu</h6>
            <div className="">
              {/* validate by register */}
              <input name="password" {...register('password', { required: true, minLength: 4 })}
                className="rounded-full w-[90%]  shadow-md py-2 pr-12 pl-4"
                type={type}
                placeholder="Nhập mật khẩu ..."
              />
            </div>
            <div className="absolute right-[45px] bottom-[5px]" onClick={handleToggle}>
              {isShow ? <HiOutlineEye size={30} /> : <HiOutlineEyeOff size={30} />}
            </div>
          </div>
          <div>
            <label className="flex w-[90%] mx-auto mt-2">
              <input type="checkbox" className="mx-1" />
              <p>Lưu mật khẩu</p>
            </label>
          </div>
          <div className="w-full text-center mt-4">
            <button type="submit" className="bg-DarkBlue text-center rounded-full">
              <h5 className="px-8 py-2  text-white font-bold">Đăng nhập</h5>
            </button>
          </div>
          {/* Error messages */}
          <div className="w-[90%] mx-auto m-1">

            {Object.keys(errors).length !== 0 && (
              <ul>
                {errors.username?.type === 'required' && <li className="text-ErrorColor"> *User is required</li>}
                {errors.password?.type === 'required' && <li className="text-ErrorColor"> *Password is required</li>}
                {errors.password?.type === 'minLength' && <li className="text-ErrorColor"> *nhap tren 6 ky tu</li>}
              </ul>
            )}

          </div>
        </div>
      </form>

      <Modals.Alert message={message} isOpen={message !== ''} handler={() => setMessage('')} />
    </div>
  );
};

export default Login;
