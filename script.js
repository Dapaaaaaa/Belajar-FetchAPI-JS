// Get User Data
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

// Get Comments Data
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

// Post Data
document.getElementById("kirimData").onclick = async () => {
  const title = document.getElementById("title").value;

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      body: "isi dari post",
      userId: 1,
    }),
  });

  const data = await res.json();
  alert("Data Berhasil Dikirim " + data.title);
  console.log(data);
};

// Update Data PUT
await fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({title: "judul di update", body: "isi di update", userId: 1})
});

// DELETE Data 
await fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
});