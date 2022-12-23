const ctrlWrapper = (listContacts) => {
  const func = async (req, res, next) => {
    try {
      await listContacts(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return func;
};

module.exports = ctrlWrapper;
