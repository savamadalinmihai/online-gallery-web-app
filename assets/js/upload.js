Dropzone.options.myDropzone = {
    // Prevents Dropzone from uploading dropped files immediately
    autoProcessQueue: true,
    accept: function (file, done) {

        // FileReader() asynchronously reads the contents of files (or raw data buffers) stored on the user's computer.
        let reader = new FileReader();
        reader.onload = (function (entry) {
            // The Image() constructor creates a new HTMLImageElement instance.
            let image = new Image();
            image.src = entry.target.result;
            image.onload = function () {

                let now = new Date();
                let hour = String(now.getHours());
                let minutes = String(now.getMinutes() + 1).padStart(2, '0');
                let seconds = String(now.getSeconds());
                let miliseconds = String(now.getMilliseconds());
                let atomictime = String(now.getTime());
                let day = String(now.getDate()).padStart(2, '0');
                let month = String(now.getMonth() + 1).padStart(2, '0');
                let year = String(now.getFullYear());
                let createdDate = year + "-" + month + "-" + day + " " +
                    hour +":"+ minutes +":"+ seconds ;

                let requestBody = {
                    createdDate: createdDate,
                    imageData: image.src,
                    name: file.name,
                    sizeInKb: image.size / 1000,
                    taggedAsFavorite: "false",
                    xAxisDimension: image.width,
                    yAxisDimension: image.height
                };

                $.ajax({
                    url: Upload.API_URL + "/photo",
                    method: "POST",
                    contentType: "application/json",
                    data: JSON.stringify(requestBody)
                })
                console.log("name: " + file.name);
                console.log("size: " + image.size);
                console.log("width: " + image.width);
                console.log("height: " + image.height);
                console.log(atomictime)

            };


        });

        reader.readAsDataURL(file);
        done();
    },
}

window.Upload = {
    API_URL: "http://localhost:8086",

}


