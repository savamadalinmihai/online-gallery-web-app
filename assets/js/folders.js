window.Folders = {
    API_URL: "http://localhost:8086",

    getFolders: function () {
        $.ajax({
            url: Folders.API_URL + "/folder",
            method: "GET"
        }).done(function (response) {
            Folders.displayFolders(response.content);
        })
    },

    displayFolders: function (folders) {
        let foldersHtml = '';

        folders.forEach(folder => foldersHtml += Folders.getHtmlForOneFolder(folder));

        $('.content').html(foldersHtml);

    },

    getHtmlForOneFolder: function (folder) {
        return `
        <a class="project" href="">
            <figure>
                <img src="assets/img/folder.png" alt="">
                <h1>${folder.name}</h1>
            </figure>
        </a>
        `;
    },
};
Folders.getFolders();