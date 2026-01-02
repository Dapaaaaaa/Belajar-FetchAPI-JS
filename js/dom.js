export const renderList = (data) => {
    if(!Array.isArray(data)) {
        console.error("Data yang diberikan bukan array", data);
        return;
    }

    const list = document.getElementById('list');
    list.innerHTML = "";

    data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.name || item.title;
        list.appendChild(li);
    });
};