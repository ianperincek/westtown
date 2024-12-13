export default async function handler(req, res) {
  console.log("Incoming request:", req.body); // Add this to log request data

  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      console.log("Validation error: Missing fields.");
      res.status(400).json({ message: "All required fields must be filled." });
      return;
    }

    try {
      console.log("Form submission received successfully");
      res.status(200).json({ message: "Form submitted successfully!" });
    } catch (error) {
      console.error("Server error:", error);
      res
        .status(500)
        .json({ message: "Something went wrong. Please try again later." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
