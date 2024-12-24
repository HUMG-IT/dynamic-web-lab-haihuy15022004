document
  .getElementById("nameForm")
  .addEventListener("submit", async function (e) {
    // Ngăn hành vi mặc định của form (ngăn tải lại trang)
    e.preventDefault();

    // Lấy giá trị nhập từ trường input có id là 'name'
    const name = document.getElementById("name").value;

    // Gửi yêu cầu POST đến server tại route '/submit' với dữ liệu JSON
    const response = await fetch("http://localhost:3000/api/v1/submit", {
      method: "POST", // Sử dụng phương thức POST để gửi dữ liệu
      headers: {
        "Content-Type": "application/json", // Định nghĩa kiểu nội dung gửi là JSON
      },
      body: JSON.stringify({ name: name }), // Chuyển đổi đối tượng { name: name } thành chuỗi JSON
    });

    // Chờ phản hồi từ server và chuyển đổi phản hồi từ JSON thành đối tượng JavaScript
    const data = await response.json();

    // Hiển thị thông điệp trả về từ server trong phần tử có id là 'response'
    document.getElementById("nameResponse").textContent = data.message;
  });

document
  .getElementById("bmiForm")
  .addEventListener("submit", async function (e) {
    // Ngăn hành vi mặc định của form (ngăn tải lại trang)
    e.preventDefault();

    // Lấy giá trị từ các trường input có id là 'weight' và 'height'
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    // Kiểm tra đầu vào hợp lệ
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      document.getElementById("bmiResponse").textContent =
        "Vui lòng nhập cân nặng và chiều cao hợp lệ.";
      return;
    }

    // Gửi yêu cầu POST đến server tại route '/submit-bmi' với dữ liệu JSON
    const response = await fetch("http://localhost:3000/api/v1/submit-bmi", {
      method: "POST", // Sử dụng phương thức POST để gửi dữ liệu
      headers: {
        "Content-Type": "application/json", // Định nghĩa kiểu nội dung gửi là JSON
      },
      body: JSON.stringify({ weight: weight, height: height }), // Chuyển đổi đối tượng thành chuỗi JSON
    });

    // Chờ phản hồi từ server và chuyển đổi phản hồi từ JSON thành đối tượng JavaScript
    const data = await response.json();

    // Hiển thị thông điệp trả về từ server trong phần tử có id là 'bmiResponse'
    if (response.ok) {
      document.getElementById("bmiResponse").textContent = data.message;
    } else {
      document.getElementById(
        "bmiResponse"
      ).textContent = `Lỗi: ${data.message}`;
    }
  });
