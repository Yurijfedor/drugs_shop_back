const User = require("../models/usersModel");
const Order = require("../models/ordersModel");

exports.getOrdersByUser = async (req, res) => {
  try {
    const { email, phone } = req.query;
    const users = await User.find({ email, phone });

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = users[0];
    const orders = await Order.find({ user: user._id }).populate("products");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const { name, email, phone, address, cart, totalCost } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      const order = new Order({
        user: user._id,
        products: cart,
        totalPrice: totalCost,
        status: "pending",
      });

      const newOrder = await order.save();

      await User.findByIdAndUpdate(user._id, {
        $push: { orders: newOrder._id },
      });

      return res.status(201).json(newOrder);
    } else {
      user = new User({
        name,
        email,
        phone,
        address,
      });

      const newUser = await user.save();

      const userId = newUser._id;

      const order = new Order({
        user: userId,
        products: cart,
        totalPrice: totalCost,
        status: "pending",
      });

      const newOrder = await order.save();

      await User.findByIdAndUpdate(userId, { $push: { orders: newOrder._id } });

      res.status(201).json(newOrder);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
