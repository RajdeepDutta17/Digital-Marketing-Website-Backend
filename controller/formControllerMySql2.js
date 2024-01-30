const pool = require("../config/mySql2");

const createFormMySql = async (req, res) => {
  try {
    const { fullName, emailId, phoneNumber, service, message } = req.body;

    if (!fullName && !emailId && !phoneNumber && !service && !message) {
      return res.status(400).json({
        status: 0,
        msg: "The provided fields cannot be empty!!!",
      });
    }

    const connect = await pool.getConnection();

    const [saveData] = await connect.execute(
      `INSERT INTO fdata (name,email,phone,service,message) VALUES ('${fullName}','${emailId}',${phoneNumber},'${service}','${message}')`
    );

    connect.release();

    if (!saveData) {
      return res.status(400).json({
        status: 0,
        msg: "Could not save the data!!!",
      });
    }

    res.status(201).json({
      status: 1,
      msg: "Data saved sucessfully!!",
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

module.exports = { createFormMySql };
