function fetchData(id) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(() => {
            resolve(`Дані для ID: ${id}`);
}, delay);
    });
}

async function processData() {
    const elm = document.getElementById("output");
    elm.innerHTML = "<p>Завантаження даних...</p>";

    try {
    const parall = await Promise.all([
        fetchData(1),
        fetchData(2),
        fetchData(3)
    ]);
    elm.innerHTML += `<p>Паралельні результати: ${parall.join(", ")}</p>`;
    console.log("Паралельні результати:", parall);

    const three = [4, 5, 6];
    for await (const result of three.map(id => fetchData(id))) {
        elm.innerHTML += `<p>Послідовний результат: ${result}</p>`;
        console.log("Послідовний результат:", result);
    }
} catch (error) {
    elm.innerHTML += `<p>Помилка: ${error.message}</p>`;
    console.log("Помилка:", error);
}
}

document.getElementById("start").addEventListener("click", () => {
processData();
});