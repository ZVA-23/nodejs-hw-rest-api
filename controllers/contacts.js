const { Contact } = require("../models/contacts");
const { HttpError, cntrlWrapper } = require("../helpers");

const listContacts = async (req, res) => {
  const { id: owner } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const contacts = await Contact.find(owner, {
    skip,
    limit,
  }).populate("owner");
  if (!contacts) {
    throw HttpError(404, error.message);
  }
  res.json(contacts);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(contactId);
  if (!contact) {
    throw HttpError(404, error.message);
  }
  res.json(contact);
};

const addContact = async (req, res) => {
  const { id: owner } = req.user;
  const newContact = await Contact.create({ ...req.body, owner });
  res.status(201).json(newContact);
};

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, error.message);
  }
  res.json({
    message: "Delete success",
  });
};

const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, error.message);
  }
  res.json(result);
};

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, error.message);
  }
  res.json(result);
};

module.exports = {
  listContacts: cntrlWrapper(listContacts),
  getContactById: cntrlWrapper(getContactById),
  addContact: cntrlWrapper(addContact),
  removeContact: cntrlWrapper(removeContact),
  updateContactById: cntrlWrapper(updateContactById),
  updateFavorite: cntrlWrapper(updateFavorite),
};
