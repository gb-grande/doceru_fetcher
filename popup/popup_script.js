
async function getDownloadLink() {
    const [tab] = await browser.tabs.query({ active: true, currentWindow: true });

    try {
        const response = await browser.tabs.sendMessage(tab.id, { command: "getLink" });
        console.log(response)
        if (!response || !response.link) return;

        const linkAnchor = document.getElementById("download-link");
        linkAnchor.href = response.link;
        linkAnchor.classList.remove("hide");
  } catch (err) {
    console.error("Erro ao tentar pegar link:", err);
  }

}

function listen(){
    document.getElementById("fetch-download").addEventListener("click", getDownloadLink)
}




listen()