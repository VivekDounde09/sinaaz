import { reactIcons } from '@/utils/icons';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { signInValidationSchema } from '@/utils/validation';
import { postReq } from '@/utils/apiHandlers';
import toast from 'react-hot-toast';
import { isYupError, parseYupError } from '@/utils/Yup';
import Cookies from 'js-cookie';

const LoginModal = ({ close }) => {
  const [form, setForm] = useState({});
  const [formError, setFormError] = useState({});
  const [setLock, isSetLock] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setFormError({ ...formError, [name]: '' });
  };

  const lockFunction = () => {
    isSetLock(!setLock);
  };

  const handleSubmit = async (e) => {
    console.log('fucntuon call');
    const toastId = toast.loading('Loading...');
    e.preventDefault();
    console.log(form, 'form');
    try {
      await signInValidationSchema.validate(form, {
        abortEarly: false,
      });

      const res = await postReq('/auth/local', form);
      const { data, status, error } = res;
      if (status) {
        toast.success('Login Successful');
        Cookies.set('__userAuthToken', data?.jwt);
        Cookies.set(`${process.env.APP_ENV}__user__isLoggedIn`, true, {
          expires: 1,
        });
        close();
      } else {
        Array.isArray(error.message)
          ? error?.message.map((msg) => toast.error(msg))
          : toast.error(error.message);
      }
    } catch (error) {
      if (isYupError(error)) {
        console.log(error);
        setFormError(parseYupError(error));
      } else {
        console.log(error);
      }
    }
    toast.dismiss(toastId);
  };
  return (
    <div className="fixed h-screen w-full top-0 bg-black bg-opacity-50 z-50 flex-center">
      <div className="bg-white rounded-20 max-w-[625px] pt-12 px-12 pb-8 relative mx-2">
        <button
          onClick={() => close(false)}
          className="absolute right-6 top-6 rounded-full h-10 w-10 bg-primary-300 text-xl flex-center"
        >
          {reactIcons.modalClose}
        </button>
        <h1 className="text-[#12171B] font-outfit lg:text-[30px] text-[25px] font-semibold text-center md:text-left">
          Login for FREE Course
        </h1>
        <p className="para-18 py-3 text-center md:text-left">
          Lörem ipsum vasick salig polyrat ben. Nyns hypogen yn. Du kan vara
          drabbad. Lörem ipsum vasick salig polyrat ben. Nyns hypogen yn. Du kan
          vara drabbad.
        </p>
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col gap-5 my-3"
        >
          <div className="">
            <input
              type="text"
              name="identifier"
              placeholder="Enter Username"
              className="appearance-none bg-primary-300 w-full para-18 px-5 py-3 rounded-[10px] outline-none"
              onChange={handleChange}
            />
            <div className="error">
              {formError.identifier && (
                <div className="form-eror">{formError.identifier}</div>
              )}
            </div>
          </div>
          <div className="">
            <div className="relative">
              <input
                type={setLock ? 'text' : 'password'}
                placeholder="Enter Password"
                className="appearance-none bg-primary-300 w-full para-18 px-5 py-3 rounded-[10px] outline-none"
                onChange={handleChange}
                name="password"
              />
              <span
                onClick={lockFunction}
                className="ay-center cursor-pointer right-6 text-26 text-black font-bold"
              >
                {setLock ? reactIcons.unlock : reactIcons.lock}
              </span>
            </div>
            <div className="error">
              {formError.password && (
                <div className="form-eror">{formError.password}</div>
              )}
            </div>
          </div>

          <div className="flex items-center md:justify-end justify-center ">
            <button type="submit" className="blue-btn ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
LoginModal.propTypes = {
  close: PropTypes.func.isRequired,
};
export default LoginModal;
