import { Request, Response } from "express";

const webhooks: any[] = [];

export const receiveWebhook = (req: Request, res: Response) => {
  webhooks.unshift({
    receivedAt: new Date().toISOString(),
    body: req.body,
  });

  // Keep only the latest 100
  if (webhooks.length > 100) {
    webhooks.pop();
  }

  res.sendStatus(200);
};

export const listWebhooks = (_: Request, res: Response) => {
  res.json(webhooks);
};