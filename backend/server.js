// server.js
const express = require("express");
const cors = require("cors"); // Import cors
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const port = 3001;

// Enable All CORS Requests
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Import routes
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// Create an HTTP server and pass it to Socket.io
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
