button.addEventListener("click", sub);

function sub(e) {
  e.preventDefault();
  const input = document.getElementById("fname").value;
  const input1 = document.getElementById("lname").value;

  let formData = {
    name: input,
    lastName: input1,
  };

  const button = document.getElementById("button");
  let jsonString = JSON.stringify(formData);
  document.getElementById("output").append(jsonString);
}
