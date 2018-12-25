import { httpUrl } from "./vars";

const api = {
  // web
  createOrder: `${httpUrl}/payments/create-order`,
  processOrder: `${httpUrl}/payments/process-order`,
  orderResponse: `${httpUrl}/payments/order-response`,
  terms: `${httpUrl}/terms`,
  // api
  me: `${httpUrl}/api/users/me`,
  getUserById: `${httpUrl}/api/users/id`,
  castes: `${httpUrl}/api/castes`,
  getUsersByMobile: `${httpUrl}/api/users/mobile`,
  updateUserCaste: `${httpUrl}/api/users/caste/update`,
  updateUserProfile: `${httpUrl}/api/users/profile/update`,
  requestOtp: `${httpUrl}/api/auth/request-otp`,
  verifyOtp: `${httpUrl}/api/auth/verify-otp`,
  login: `${httpUrl}/api/guest/login`,
  register: `${httpUrl}/api/guest/register`,
  getUsers: `${httpUrl}/api/users/all`,
  wallet: `${httpUrl}/api/wallet/info`,
  changeAvatar: `${httpUrl}/api/avatar/change`,
  requestRelation: `${httpUrl}/api/relation/request`,
};

export { api };
