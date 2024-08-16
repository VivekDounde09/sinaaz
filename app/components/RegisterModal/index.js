import { reactIcons } from '@/utils/icons';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { postReq } from '@/utils/apiHandlers';
import { signupvalidationSchema } from '@/utils/validation';
import { isYupError, parseYupError } from '@/utils/Yup';
import Cookies from 'js-cookie';

const RegisterModal = ({ close }) => {
  const [form, setForm] = useState({});
  const [formError, setFormError] = useState({});
  const [setLock, isSetLock] = useState(false);

  const lockFunction = () => {
    isSetLock(!setLock);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setFormError({ ...formError, [name]: '' });
  };
  // c

  const handleSubmit = async (e) => {
    console.log('fucntuon call');
    const toastId = toast.loading('Loading...');
    e.preventDefault();
    console.log(form, 'form');
    try {
      await signupvalidationSchema.validate(form, {
        abortEarly: false,
      });

      const res = await postReq('/auth/local/register', form);
      const { data, status, error } = res;
      if (status) {
        toast.success('Registration Successful');
        Cookies.set(`${process.env.APP_ENV}__user__isLoggedIn`, true, {
          expires: 1,
        });
        Cookies.set('__userAuthToken', data?.jwt, {
          expires: 1,
        });
        close();
        setForm(null);
      } else {
        Array.isArray(error.error.message)
          ? error?.error.message.map((msg) => toast.error(msg))
          : toast.error(error.error.message);
      }
    } catch (error) {
      if (isYupError(error)) {
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
          Register for FREE Course
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
              placeholder="First Name"
              name="firstName"
              className="appearance-none bg-primary-300 w-full para-18 px-5 py-3 rounded-[10px] outline-none"
              onChange={handleChange}
            />
            <div className="error">
              {formError.firstName && (
                <div className="form-eror">{formError.firstName}</div>
              )}
            </div>
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className="appearance-none bg-primary-300 w-full para-18 px-5 py-3 rounded-[10px] outline-none"
              onChange={handleChange}
            />
            <div className="error">
              {formError.lastName && (
                <div className="form-eror">{formError.lastName}</div>
              )}
            </div>
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="appearance-none bg-primary-300 w-full para-18 px-5 py-3 rounded-[10px] outline-none"
              onChange={handleChange}
            />
            <div className="error">
              {formError.username && (
                <div className="form-eror">{formError.username}</div>
              )}
            </div>
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              className="appearance-none bg-primary-300 w-full para-18 px-5 py-3 rounded-[10px] outline-none"
              onChange={handleChange}
            />
            <div className="error">
              {formError.email && (
                <div className="form-eror">{formError.email}</div>
              )}
            </div>
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Phone Number"
              name="phoneNo"
              className="appearance-none bg-primary-300 w-full para-18 px-5 py-3 rounded-[10px] outline-none"
              onChange={handleChange}
            />
            <div className="error">
              {formError.phoneNo && (
                <div className="form-eror">{formError.phoneNo}</div>
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
            <button className="blue-btn">Create an Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};
RegisterModal.propTypes = {
  close: PropTypes.func.isRequired,
};
export default RegisterModal;
