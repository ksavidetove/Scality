async function fetchDataFromAPI(url) {
    try {
        const reponse = await fetch(url);
        const data = await reponse.json()

        return data;
    } catch (err) {
        console.error(err);
    }
}