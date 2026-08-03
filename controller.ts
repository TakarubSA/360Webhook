import { Request, Response } from "express";

export const receiveWebhook = (
  req: Request,
  res: Response
) => {
  const { integrationId, token } = req.params;

  console.log({
    integrationId,
    token,
    body: req.body,
  });

  res.sendStatus(200);
};