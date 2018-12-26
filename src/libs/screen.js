const getInitialScreen = (authUser) => {
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

  return "RequestOtpScreen";
};

export { getInitialScreen };
