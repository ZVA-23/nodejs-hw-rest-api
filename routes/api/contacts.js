const express = require("express");

const cntrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", cntrl.listContacts);

router.get("/:contactId", cntrl.getContactById);

router.post("/", validateBody(schemas.addSchema), cntrl.addContact);

router.delete("/:contactId", cntrl.removeContact);

router.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  cntrl.updateContactById
);

module.exports = router;
