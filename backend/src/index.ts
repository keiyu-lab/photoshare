import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from '../src/generated/prisma/client';
import { verifyJwt } from "./middleware/jwt";

dotenv.config();
const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;



/**
 * ユーザがDBに登録されているか確認
 * されていなければ格納
*/
app.post('/users/sync', verifyJwt, async (req, res) => {
  const { cognito_sub, email } = req.body;

  try {
    // すでに登録されているか確認
    const existing = await prisma.user.findUnique({
      where: { cognito_sub },
    });

    if (!existing) {
      await prisma.user.create({
        data: {
          cognito_sub,
          email,
        },
      });
    }

    res.status(200).json({ message: 'User synced' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to sync user' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
