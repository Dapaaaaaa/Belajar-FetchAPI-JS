import {
  getUsers,
  getComments,
  createPost,
  updatePost,
  deletePost
} from './api.js';

import { renderList } from './dom.js';

// GET Users
document.getElementById('ambilUser').onclick = async() => {
  const users = await getUsers();
  renderList(users);
}

// GET Comments
document.getElementById('ambilKomen').onclick = async() => {
  const comments = await getComments();
  renderList(comments);
}

// POST
document.getElementById('kirimData').onclick = async() => {
  const title = document.getElementById('title').value;

  if(!title) {
    alert('Judul tidak boleh kosong');
    return;
  }

  const data = await createPost(title);
  alert('Data Berhasil Dikirim ' + data.title);
};

// PUT (UPDATE)
document.getElementById('updateData').onclick = async() => {
  await updatePost();
  alert('Data Berhasil Diupdate');
};

// DELETE
document.getElementById('hapusData').onclick = async() => {
  await deletePost();
  alert('Data Berhasil Dihapus');
};