const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

/* ✅ MongoDB Connection (ONLY ONCE) */
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('DB Error:', err));

/* ✅ PORT FIX */
const PORT = process.env.PORT || 3000;

/* Routes */
const CustomerRoute = require('./route/CustomerRoute');
const OrderRoute = require('./route/OrderRoute');
const ProductRoute = require('./route/ProductRoute');
const PaymentRoute = require('./route/PaymentRoute');
const UserRoute = require('./route/UserRouter');

app.use('/api/v1/customers', CustomerRoute);
app.use('/api/v1/orders', OrderRoute);
app.use('/api/v1/payments', PaymentRoute);
app.use('/api/v1/products', ProductRoute);
app.use('/api/v1/users', UserRoute);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});


//oNSRpmVsTDq751WS