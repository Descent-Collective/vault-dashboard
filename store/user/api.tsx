type IAuth = {
  signup: (data: {}) => Promise<void>;
};

const user: IAuth = {
  signup: async (data: {}) => {
    // call the abi contract methods here to create a new user

    return; // return the response from the contract
  },
};

export default user;
