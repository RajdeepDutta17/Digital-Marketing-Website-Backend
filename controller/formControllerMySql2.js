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

    let connect;
    try {
      connect = await pool.getConnection();
    } catch (err) {
      console.log(err);
      res.status(200).json({
        status: 0,
        msg: "Connection Error!!!",
      });
    }
    let saveData;

    try {
      [saveData] = await connect.execute(
        `INSERT INTO fdata (name,email,phone,service,message) VALUES ('${fullName}','${emailId}',${phoneNumber},'${service}','${message}')`
      );
      connect.release();
    } catch (err) {
      console.log(err);
      return res.status(200).json({
        status: 0,
        msg: "DataBase Error!!!",
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
