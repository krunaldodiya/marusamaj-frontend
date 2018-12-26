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
  requestOtp: `${httpUrl}/api/otp/request-otp`,
  verifyOtp: `${httpUrl}/api/otp/verify-otp`,
  guestLogin: `${httpUrl}/api/guest/login`,
  guestRegister: `${httpUrl}/api/guest/register`,
  authLogin: `${httpUrl}/api/auth/login`,
  authRegister: `${httpUrl}/api/auth/register`,
  getUsers: `${httpUrl}/api/users/all`,
  wallet: `${httpUrl}/api/wallet/info`,
  changeAvatar: `${httpUrl}/api/avatar/change`,
  requestRelation: `${httpUrl}/api/relation/request`,
  setMobileStatus: `${httpUrl}/api/settings/set-mobile-status`,
  setBirthdayStatus: `${httpUrl}/api/settings/set-birthday-status`,
  updateAadhaarCard: `${httpUrl}/api/settings/update-aadhaar-card`,
  updateSecondaryMobile: `${httpUrl}/api/settings/update-secondary-mobile`,
};

export { api };
