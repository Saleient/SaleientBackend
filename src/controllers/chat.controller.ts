import { auth } from "../lib/auth.js";
import { createError } from "../utils/AppError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import type { Request, Response } from "express";
import { z } from "zod";

const messageSchema = z.object({
  messages: z.array(z.any()).optional(),
  id: z.string().nullable().optional(),
  provider: z.string().nullable().optional(),
  enabledToolkits: z
    .array(
      z.object({
        slug: z.string(),
        isConnected: z.boolean(),
      })
    )
    .optional(),
});

export const chatController = {
  newChat: asyncHandler(async function (req: Request, res: Response) {
    const session = await auth.api.getSession({
      headers: new Headers(req.headers as Record<string, string>),
    });
    if (!session?.user) {
      throw createError.unauthorized("Unauthorized.");
    }
    const userEmail = session.user.email;
    if (!userEmail) {
      throw createError.badRequest("Email not Found for user");
    }
    const {message} = req.body;
    const newChat=await createC
  }),
};
export default chatController;
