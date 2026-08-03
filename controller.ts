import { Request, Response } from "express";

const webhooks: any[] = [];

export const receiveWebhook = (req: Request, res: Response) => {
  webhooks.unshift({
    receivedAt: new Date().toISOString(),
    body: req.body,
  });

  if (webhooks.length > 100) {
    webhooks.pop();
  }

res.status(200).json({
  received: true,
});
};

export const listWebhooks = (_: Request, res: Response) => {
  res.json(webhooks);
};