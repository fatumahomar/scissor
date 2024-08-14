import { Request, Response } from "express";
import LinkModel from "../models/url";

export function home(req: Request, res: Response): void {
  if (!req.xhr) {
    res.render("homepage", {
      title: "URL Shortner",
    });
  }
}

export const redirect = async (req: Request, res: Response): Promise<void> => {
  try {
    const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
    const data = await LinkModel.findOneAndUpdate(
      { shortUrl: fullUrl },
      { $inc: { totalHits: 1 }, lastUsed: new Date() }
    );

    if (data) {
      if (data.totalHits > 10) {
        res.send(`<h1>You have been rate limited !</h1>`);
        return;
      }
      res.redirect(data.url);
      return;
    }
    res.send(`<h1>You may be Lost!</h1>`);
  } catch (err: unknown) {
    console.error("Some error occurred:", err);
    res.status(500).send("Internal Server Error");
  }
};

// Simple tests
if (process.env.NODE_ENV === 'test') {
  console.log("Running simple tests...");

  // Mock objects
  const mockReq = {} as Request;
  const mockRes = {
    render: () => {},
    send: () => {},
    redirect: () => {},
    status: () => mockRes,
  } as unknown as Response;


  // Test home function
  try {
    home(mockReq, mockRes);
    console.log("home function test passed");
  } catch (error) {
    console.error("home function test failed", error);
  }

  // Test redirect function
  (async () => {
    try {
      await redirect(mockReq, mockRes);
      console.log("redirect function test passed");
    } catch (error) {
      console.error("redirect function test failed", error);
    }
  })();

  console.log("Functions working ");
}