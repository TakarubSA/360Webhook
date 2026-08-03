import { Router } from "express";
import { receiveWebhook, listWebhooks } from "./controller";

const router = Router();

router.post(
  "/whatsapp/:integrationId/:token",
  receiveWebhook
);

router.get("/hooks", listWebhooks);

export default router;