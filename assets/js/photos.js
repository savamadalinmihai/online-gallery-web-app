window.Photos = {
    API_URL: "http://localhost:8086",

    getPhotos: function () {
        $.ajax({
            url: Photos.API_URL + "/photo",
            method: "GET"
        }).done(function (response) {
            Photos.displayPhotos(response.content);
        })
    },

    displayPhotos: function (photos) {
        let photosHtml = '';

        photos.forEach(photo => photosHtml += Photos.getHtmlForOnePhoto(photo));

        $('.content').html(photosHtml);

    },

    getHtmlForOnePhoto: function (photo) {
        return `
        <a class="project" href="">
            <figure>
                <img src="${photo.imageData}" alt="">
            </figure>
        </a>
        `;
    },


};

Photos.getPhotos();
// Photos.bindEvents();


// upload zone

// class FileUploadHandler {
//     constructor() {
//         this.dropzone = new Dropzone("#my-awesome-dropzone");
//         this.dropzone.on("addedfile", this.onfileUpload);
//     }
//
//     onfileUpload(file) {
//         debugger;
//         $.ajax({
//             url: "http://localhost:63342/photo/upload",
//             type: "POST",
//             data: file,
//             processData: false
//         });
//         debugger;
//     }
// }
// window.FileUploader = new FileUploadHandler();