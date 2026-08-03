import { Router } from "express";
import { receiveWebhook, listWebhooks } from "./controller";

const router = Router();

router.post(
  "/whatsapp/:integrationId/:token",
  receiveWebhook
);

router.get("/hooks", listWebhooks);

router.get("/", (_, res) => {
  res.json({
    service: "360 Webhook",
    status: "ok",
  });
});

export default router;