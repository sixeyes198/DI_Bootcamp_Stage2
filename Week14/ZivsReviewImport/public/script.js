const container = document.querySelector("div");

const result = async () => {
  try {
    const res = await fetch("http://localhost:3001/posts");
    console.log(res);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
result();
