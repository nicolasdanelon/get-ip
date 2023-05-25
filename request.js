export function makeRequest(element) {
    // https://github.com/Rob--W/cors-anywhere/issues/301
    const url = 'https://cors-proxy.fringe.zone/https://ipconfig.io/json';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.table(data);
            element.innerHTML = data.ip;
        })
        .catch(error => {
            console.error('Error: ', error);
        });
}