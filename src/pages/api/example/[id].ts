// pages/api/hello.js
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

const api = nc<NextApiRequest, NextApiResponse>();

api.get((req, res) => {
  const { id } = req.query;
  res.send(`your id is ${id}`);
});

export default api;
