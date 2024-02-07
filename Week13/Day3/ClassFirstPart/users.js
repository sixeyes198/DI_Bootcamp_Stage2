///fetch users here

export async function users() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    throw new Error("Cant find users");
  }
}

// module.exports = {
//   users,
// };
