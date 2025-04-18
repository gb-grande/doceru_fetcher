async function getDownloadLink() {
    const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
    browser.tabs.sendMessage(tab.id, { command: "getLink" }).then(response => {
        if (response.link == "") {
            return;
        }
        console.log(response)
        let linkAnchor = document.getElementById("download-link");
        linkAnchor.href = response.link
        linkAnchor.classList.remove(".hide")

      }).catch(err => console.error("Erro:", err));
    

}

function listen(){
    console.log("GANGNAN STYLE!")
    document.getElementById("fetch-download").addEventListener("click", getDownloadLink)
}




console.log("PORRA")
browser.tabs
    .executeScript({file : "/content_scripts/doceru_fetcher.js"})
    .then(listen)