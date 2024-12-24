const bmi = require("../models/bmi.js");

const submitBMI = (req, res) => {
  try {
    const { weight, height } = req.body;

    // Kiểm tra dữ liệu đầu vào
    if (!weight || !height) {
      return res
        .status(400)
        .json({ message: "Vui lòng cung cấp cân nặng và chiều cao." });
    }

    const calculatedBMI = bmi.calculateBMI(weight, height); // Tính chỉ số BMI
    bmi.addBMI({ weight, height, bmi: calculatedBMI }); // Lưu dữ liệu BMI

    res.json({
      message: `Chỉ số BMI của bạn là ${calculatedBMI.toFixed(2)}`,
      bmis: bmi.getBMIs(),
    });
  } catch (error) {
    res.status(400).json({ message: error.message }); // Xử lý lỗi và gửi phản hồi
  }
};

module.exports = { submitBMI };
