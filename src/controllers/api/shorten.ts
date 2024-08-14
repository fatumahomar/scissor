import { Request, Response } from "express";
import LinkModel from "../../models/url";
import { validateUrl, randomizeString } from "../../utils";

const shorten = async function (req: Request, res: Response) {
  try {
    const { url, customDomain, userId } = req.body;

    // Validate inputs
    const urlValidity = await validateUrl(url);
    if (!url || typeof url !== "string" || !urlValidity) {
      return res.status(400).json({ error: "Invalid or missing 'url' field" });
    }

    if (customDomain && typeof customDomain !== "string") {
      return res.status(400).json({ error: "Invalid 'customDomain' field" });
    }

    if (!userId || typeof userId !== "string") {
      return res
        .status(400)
        .json({ error: "Invalid or missing 'userId' field" });
    }

    const shortUrl = randomizeString(customDomain, req.get("host"));

    await LinkModel.create({
      url,
      customDomain,
      userId,
      shortUrl,
    });

    let data = await LinkModel.find({ userId }).sort({ createdAt: -1 });
    return res.status(200).json({ data: data });
  } catch (err: any) {
    if (err.code === 11000) {
      // Duplicate key error
      console.log(err);
      return res
        .status(400)
        .json({ error: "Some error occurred, possible duplicate data" });
    }
    console.error("Some error occurred:", err);
    return res.status(500).json({
      error: "Invalid or missing 'url' field",
    });
  }
};

const populate = async function (req: Request, res: Response) {
  try {
    const { userId } = req.body;

    // Validate inputs
    if (!userId || typeof userId !== "string") {
      return res
        .status(400)
        .json({ error: "Invalid or missing 'userId' field" });
    }

    let data = await LinkModel.find({ userId }).sort({ createdAt: -1 });
    return res.status(200).json({ data: data });
  } catch (err: any) {
    console.error("Some error occurred:", err);
    return res.status(500).json({
      error: "Invalid or missing 'url' field",
    });
  }
};
const base = async function (_req: Request, res: Response) {
  try {
    return res.status(200).json({
      message: "Welcome to the scissor API",
      endpoints: {
        "/api/shorten": {
          description: "Shortens a url",
          method: "POST",
        },
        "/api/populate": {
          description: "Populate data for the user",
          method: "POST",
        }
      }
    });
  } catch (err: any) {
    console.error("Some error occurred:", err);
    return res.status(500).json({
      error: "Invalid or missing 'url' field",
    });
  }
};
export { shorten, populate, base };
