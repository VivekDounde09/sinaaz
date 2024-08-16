import axios from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

export const isLoggedIn = () => {
  return Cookies.get(`${process.env.APP_ENV}__user__isLoggedIn`);
};

const getUserToken = () => {
  if (Cookies.get('__userAuthToken')) {
    return Cookies.get('__userAuthToken');
  } else return false;
};

export const showErrorMessage = (message) => {
  if (message instanceof Array) {
    message.forEach((msg) => toast.error(msg));
  } else {
    toast.error(message);
  }
};

const responseFormatter = (status, data, error) => {
  return { status, data: data || null, error };
};

const handleApiError = (err) => {
  return responseFormatter(false, null, err.response?.data);
};

export const postReq = async (endpoint, data) => {
  const url = process.env.API_URL + endpoint;
  const headers = {
    Accept: 'application/json',
    // Authorization: `Bearer ${getUserToken()}`,
  };
  return await axios
    .post(url, data, { withCredentials: true, headers })
    .then((response) => {
      return responseFormatter(true, response.data, null);
    })
    .catch((err) => {
      return handleApiError(err);
    });
};

export const patchReq = async (endpoint, data) => {
  const url = process.env.API_URL + endpoint;

  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${getUserToken()}`,
  };

  return await axios
    .patch(url, data, { withCredentials: true, headers })
    .then((response) => {
      return responseFormatter(true, response.data, null);
    })
    .catch((err) => {
      return handleApiError(err);
    });
};
export const putReq = async (endpoint, data) => {
  const url = process.env.API_URL + endpoint;

  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${getUserToken()}`,
  };

  return await axios
    .put(url, data, { withCredentials: true, headers })
    .then((response) => {
      return responseFormatter(true, response.data, null);
    })
    .catch((err) => {
      return handleApiError(err);
    });
};

export const getReq = async (endpoint) => {
  const url = process.env.API_URL + endpoint;

  const headers = {
    Accept: 'application/json',
    // Authorization: `Bearer ${getUserToken()}`,
  };

  return await axios
    .get(url, { withCredentials: true, headers })
    .then((response) => {
      return responseFormatter(true, response.data, null);
    })
    .catch((err) => {
      return handleApiError(err);
    });
};

export const deleteReq = async (endpoint) => {
  const url = process.env.API_URL + endpoint;

  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${getUserToken()}`,
  };

  return await axios
    .delete(url, { withCredentials: true, headers })
    .then((response) => {
      return responseFormatter(true, response.data, null);
    })
    .catch((err) => {
      return handleApiError(err);
    });
};

export const postFile = async (endpoint, data) => {
  const url = process.env.API_URL + endpoint;
  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${getUserToken()}`,
    'Content-Type': 'multipart/form-data',
  };

  try {
    const response = await axios.post(url, data, {
      withCredentials: true,
      headers,
    });
    return responseFormatter(true, response.data, null);
  } catch (err) {
    console.log(err);
    return handleApiError(err);
  }
};

export const getHeroData = async () => {
  try {
    const res = await getReq('/hero-sections?populate=*');
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getBenefitsData = async () => {
  try {
    const res = await getReq('/benefits?populate=*');
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getIntroductionData = async () => {
  try {
    const res = await getReq('/introductions?populate=*');
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getChapterTwoData = async () => {
  try {
    const res = await getReq('/calculate-your-needs?populate=*');
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getChapterThreeData = async () => {
  try {
    const res = await getReq('/create-kai-zons?populate=*');
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getChapterFiveData = async () => {
  try {
    const res = await getReq('/how-it-works?populate=*');
    return res;
  } catch (error) {
    console.log(error);
  }
};
