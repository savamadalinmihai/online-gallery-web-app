window.Photos = {
    API_URL: "http://localhost:8081",

    getPhotos: function () {
        $.ajax({
            url: Photos.API_URL + "/photos",
            method: "GET"
        }).done(function (response) {
            console.log(response);
        })
    }
};

Photos.getPhotos();