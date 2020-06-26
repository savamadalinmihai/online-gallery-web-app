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
        <div class="project" href="">
            <figure>
                <img src="assets/img/folder.png" alt="">
                <h1>${folder.name}</h1>
            </figure>
        </div>
        `;
    },

    createFolder: function () {
        let folderName = $("#folder_name").val();
        let now = new Date();
        let hour = String(now.getHours());
        let minutes = String(now.getMinutes() + 1).padStart(2, '0');
        let seconds = String(now.getSeconds());
        let day = String(now.getDate()).padStart(2, '0');
        let month = String(now.getMonth() + 1).padStart(2, '0');
        let year = String(now.getFullYear());
        let dateOfCreation = year + "-" + month + "-" + day + " " +
            hour + ":" + minutes + ":" + seconds;


        let requestBody = {
            createdDate: dateOfCreation,
            name: folderName,
            numberOfFilesInside: +1
        };
        $.ajax({
            url: Folders.API_URL + "/folder",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(requestBody)
        }).done(function () {
            alert("Successfully created folder " + "'" + folderName + "'");
            Folders.getFolders();
        })
    },
    bindEvents: function () {
        $(".btn-success").click(function (event) {
            event.preventDefault();

            Folders.createFolder();
        })
    }
}

Folders.getFolders();
Folders.bindEvents();
