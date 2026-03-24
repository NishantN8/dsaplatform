const router = require("express").Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/explain", async (req, res) => {
  try {
    const { code } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const prompt = `
Explain this code like I am 10 years old.

Also include:
1. What problem it solves
2. Step-by-step explanation
3. Simple example

Code:
${code}
`;

    const result = await model.generateContentStream(prompt);

    res.setHeader("Content-Type", "text/plain");

    for await (const chunk of result.stream) {
      const text = chunk.text();
      res.write(text);
    }

    res.end();

  } catch (err) {
    console.error(err);
    res.status(500).send("Error");
  }
});

module.exports = router;