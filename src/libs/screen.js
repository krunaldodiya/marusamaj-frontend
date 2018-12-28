const getInitialScreen = (authUser, authMobile = null) => {
  if (authUser) {
    const { caste_updated, profile_updated } = authUser;

    if (!caste_updated) {
      return "ManageCasteScreen";
    }

    if (!profile_updated) {
      return "ManageProfileScreen";
    }

    return "TabsScreen";
  }

  if (authMobile) {
    return "AccountListScreen";
  }

  return "RequestOtpScreen";
};

export { getInitialScreen };
