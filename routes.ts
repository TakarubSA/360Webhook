import { Router } from "express";
import { receiveWebhook } from "./controller";

const router = Router();

router.post(
  "/whatsapp/:integrationId/:token",
  receiveWebhook
);

export default router;