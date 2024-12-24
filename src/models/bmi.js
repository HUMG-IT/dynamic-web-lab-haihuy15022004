const bmiData = [];

const calculateBMI = (weight, height) => {
  if (height <= 0) throw new Error("Chiều cao phải lớn hơn 0");
  const bmi = weight / (height * height);
  return bmi;
};

const addBMI = (bmiRecord) => {
  bmiData.push(bmiRecord);
};

const getBMIs = () => {
  return bmiData;
};

module.exports = { calculateBMI, addBMI, getBMIs };
