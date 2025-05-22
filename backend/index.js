const express = require("express"); //FOR CREATING SERVER
const cors = require("cors"); //TO ALLOW CROSS ORIGIN REQUESTS
const fs = require("fs"); //FOR FILE SYSTEM OPERATIONS
const bcrypt = require("bcrypt"); //FOR HASHING PASSWORDS
const app = express(); //CREATING EXPRESS APP
const PORT = process.env.PORT || 5000; //PORT NUMBER

app.use(cors());
app.use(express.json());

const USERS_FILE = "users.json";
if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, "[]");

app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password, mobile } = req.body;
    const users = JSON.parse(fs.readFileSync(USERS_FILE));
    if (users.find(u => u.email === email)) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ name, email, password: hashedPassword, mobile });
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
