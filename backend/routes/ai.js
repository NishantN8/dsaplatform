const router = require("express").Router();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/explain", async (req, res) => {
  const { code } = req.body;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: `Explain this code simply:\n${code}`,
      },
    ],
  });

  res.json({
    explanation: response.choices[0].message.content,
  });
});

module.exports = router;