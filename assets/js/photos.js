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
                <div class="project" href="">
                    <figure>
                        <img src="${photo.imageData}" >
                    </figure>
                </div>
        `;
    },


};


Photos.getPhotos();
// Photos.bindEvents();
