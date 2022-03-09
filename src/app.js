const express = require("express");
const productRouter = require('./routes/product')
const app = express();

// Middleware
app.use(express.json());


// Route

app.use('/api', productRouter)

const PORT = 3004;

app.listen(PORT, () => {
  console.log(`server is running port ${PORT}`);
});

// next cho phép chạy cv gì đó ở middleware
// next thực thi những cv
