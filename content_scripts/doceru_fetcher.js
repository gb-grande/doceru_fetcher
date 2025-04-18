(() => {
    //guard
    if (window.hasRun) {
        return
    }
    window.hasRun = true;

    function getDownloadLink(sendResponseFunction) {
        let desiredDocument = document.querySelector('[data-pdf-url]');
        if (desiredDocument == null) {
            window.alert("There is no preview loaded")
            sendResponseFunction({link : ""})
            return;
        }
        
        let downloadLink = desiredDocument.getAttribute("data-pdf-url")
        console.log(downloadLink)
        sendResponseFunction({link : downloadLink})
    }
    
    browser.runtime.onMessage.addListener((message, _, sendResponse) =>{

        if (message.command == "getLink"){
            getDownloadLink(sendResponse)
        }
    })
}
)();