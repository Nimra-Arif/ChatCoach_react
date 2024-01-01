import axios from "axios";
const baseURL = "https://admin.chatcoach.io/api/";

export const viewContent = async () => {
  const response = await axios.post(`${baseURL}viewcontent`);

  return response.data;
};

export const completeRegistration = async (emailProvided) => {
  const body = { email: emailProvided };
  const response = await axios.post(`${baseURL}completeregistration`, body);

  return response.data;
};

export const freeVersion = async (emailProvided) => {
  const body = { email: emailProvided };
  const response = await axios.post(`${baseURL}UseFreeVersion`, body);

  return response.data;
};

export const completePayment = async (emailProvided) => {
  const body = { email: emailProvided };
  const response = await axios.post(`${baseURL}CompletePayment`, body);

  return response.data;
};
