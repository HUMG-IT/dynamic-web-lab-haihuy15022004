const bmiData = [];

const calculateBMI = (weight, height) => {
  if (height <= 0) throw new Error("Chiều cao phải lớn hơn 0");
  const bmi = weight / (height * height);
  return bmi;
};

const addBMI = (bmi) => {
  bmiData.push(bmi);
};

const getBMIs = () => {
  return bmiData;
};

module.exports = { calculateBMI, addBMI, getBMIs };
