const getUser = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Gagal ambil data");
    }

    const data = await response.json();

    const list = document.getElementById("li");
    list.innerHTML = "";

    data.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name;
      list.appendChild(li);
    });
  } catch (error) {
    console.error(error.message);
  }
};

document.getElementById("ambilData").onclick = getUser;

const getComments = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");

    if (!response.ok) {
      throw new Error("Gagal ambil data");
    }

    const data = await response.json();

    const list = document.getElementById("li");
    list.innerHTML = "";

    data.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name;
      list.appendChild(li);
    });
  } catch (error) {
    console.error(error.message);
  }
};

document.getElementById("ambilKomen").onclick = getComments;

const sendPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Belajar Fetch",
      body: "Aku lulusan RPL",
      userId: 1,
    }),
  });

  const data = await res.json();
  console.log(data);
};

sendPost();
