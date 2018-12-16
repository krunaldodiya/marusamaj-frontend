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
  updateUserCaste: `${httpUrl}/api/users/caste/update`,
  updateUserProfile: `${httpUrl}/api/users/profile/update`,
  updateUserFamily: `${httpUrl}/api/users/family/update`,
  requestOtp: `${httpUrl}/api/auth/request-otp`,
  verifyOtp: `${httpUrl}/api/auth/verify-otp`,
  getUsers: `${httpUrl}/api/users/all`,
  wallet: `${httpUrl}/api/wallet/info`
};

export { api };
