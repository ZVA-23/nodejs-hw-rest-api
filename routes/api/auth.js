const express = require("express");

const {
  validateBody,
  authenticate,
  resize,
  upload,
} = require("../../middlewares");
const { schemas } = require("../../models/user");
const cntrl = require("../../controllers/auth");

const router = express.Router();

router.post(
  "/users/register",
  validateBody(schemas.registerSchema),
  cntrl.register
);

router.get("/users/verify/:verificationToken", cntrl.verify);

router.post("/users/login", validateBody(schemas.loginSchema), cntrl.login);

router.get("/users/current", authenticate, cntrl.getCurrent);

router.get("/users/logout", authenticate, cntrl.logout);

router.patch(
  "/users/avatars",
  authenticate,
  upload.single("avatar"),
  resize,
  cntrl.updateAvatar
);

module.exports = router;
