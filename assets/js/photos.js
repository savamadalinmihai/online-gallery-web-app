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

        $('.xop-container').html(photosHtml);

    },

    getHtmlForOnePhoto: function (photo) {
        return `
        <a class="project" href="">
            <figure>
                <img src="${photo.url}" alt="">
                    <figcaption>
                        <div>
                            <h3>${photo.name}</h3>
                            <p class="cta">View project</p>
                        </div>
                    </figcaption>
            </figure>
        </a>
        `;
    },

};

Photos.getPhotos();
Photos.bindEvents();