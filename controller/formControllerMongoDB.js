const form = require("../model/formModelMongoDB");

const createFormMongoDB = async (req, res) => {
  try {
    const { fullName, emailId, phoneNumber, service, message } = req.body;

    if (!fullName && !emailId && !phoneNumber && !service && !message) {
      return res.status(400).json({
        status: 0,
        msg: "The provided fields cannot be empty!!!",
      });
    }

    const saveData = await form.create({
      name: fullName,
      email: emailId,
      phone: phoneNumber,
      service: service,
      message: message,
    });

    if (!saveData) {
      return res.status(400).json({
        status: 0,
        msg: "Could not save the data!!!",
      });
    }

    return res.status(201).json({
      status: 1,
      msg: "Data saved successfully!!",
      data: saveData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 0,
      msg: "Server Error!!!",
    });
  }
};

module.exports = { createFormMongoDB };
