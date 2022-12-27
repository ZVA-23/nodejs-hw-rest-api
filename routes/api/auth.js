const express = require("express");

const { validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/user");
const cntrl = require("../../controllers/auth");

const router = express.Router();

router.post(
  "/users/register",
  validateBody(schemas.registerSchema),
  cntrl.register
);

router.post("/users/login", validateBody(schemas.loginSchema), cntrl.login);

router.get("/users/current", authenticate, cntrl.getCurrent);

router.get("/users/logout", authenticate, cntrl.logout);

module.exports = router;
