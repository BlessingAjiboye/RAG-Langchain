import { Router } from "express";
import { inMemoryChat } from "./chat.js";
import nocache from "nocache";

const router = Router();

router.get("/v1/in-memory-ai-text", nocache(), inMemoryChat);

export default router;
