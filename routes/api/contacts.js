const express = require("express");

const cntrl = require("../../controllers/contacts");
const { validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contacts");

const router = express.Router();

router.get("/", authenticate, cntrl.listContacts);

router.get("/:contactId", authenticate, cntrl.getContactById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  cntrl.addContact
);

router.delete("/:contactId", authenticate, cntrl.removeContact);

router.put(
  "/:contactId",
  authenticate,
  validateBody(schemas.addSchema),
  cntrl.updateContactById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validateBody(schemas.updateFavoriteSchema),
  cntrl.updateFavorite
);

module.exports = router;
