const { Contact } = require("../models/contact");

const { HttpError, cntrlWrapper } = require("../helpers");

const listContacts = async (req, res) => {
  // const contacts = await contacts.listContacts();
  // if (!contacts) {
  //   throw HttpError(404, error.message);
  // }
  // res.json(contacts);
};

const getContactById = async (req, res) => {
  // const { contactId } = req.params;
  // const contact = await contacts.getContactById(contactId);
  // if (!contact) {
  //   throw HttpError(404, error.message);
  // }
  // res.json(contact);
};

const addContact = async (req, res) => {
  // const newContact = await contacts.addContact(req.body);
  // res.status(201).json(newContact);
};

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  // const result = await contacts.removeContact(contactId);
  // if (!result) {
  //   throw HttpError(404, error.message);
  // }
  // res.json({
  //   message: "Delete success",
  // });
};

const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  // const result = await contacts.updateContactById(contactId, req.body);
  // if (!result) {
  //   throw HttpError(404, error.message);
  // }
  // res.json(result);
};

module.exports = {
  listContacts: cntrlWrapper(listContacts),
  getContactById: cntrlWrapper(getContactById),
  addContact: cntrlWrapper(addContact),
  removeContact: cntrlWrapper(removeContact),
  updateContactById: cntrlWrapper(updateContactById),
};
