import { httpUrl } from "./vars";

const api = {
  // web
  createOrder: `${httpUrl}/payments/create-order`,
  processOrder: `${httpUrl}/payments/process-order`,
  orderResponse: `${httpUrl}/payments/order-response`,
  terms: `${httpUrl}/terms`,
  // api
  me: `${httpUrl}/api/users/me`,
  castes: `${httpUrl}/api/castes`,
  createUserProfile: `${httpUrl}/api/users/profile/create`,
  requestOtp: `${httpUrl}/api/auth/request-otp`,
  verifyOtp: `${httpUrl}/api/auth/verify-otp`,
  loadQuiz: `${httpUrl}/api/quiz/all`,
  wallet: `${httpUrl}/api/wallet/info`
};

export { api };
