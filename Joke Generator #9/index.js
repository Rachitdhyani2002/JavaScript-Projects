async function Generate() {
    const resp = await fetch('https://v2.jokeapi.dev/joke/Any');
    var data = await resp.json();
    if (data.error == false && data.type ==="twopart") {
        document.querySelector('.joke').innerHTML = data.setup;
        setTimeout(() => {
            document.querySelector('.joke').innerHTML = data.delivery;
        }, 3000);
    }
    else if (data.type === "single") {
        document.querySelector('.joke').innerHTML = data.joke;
    }
}
