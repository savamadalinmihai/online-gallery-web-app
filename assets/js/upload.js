Dropzone.options.myAwesomeDropzone = {
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 20, // MB
    accept: function (file, done) {
        if (file.name === "justinbieber.jpg") {
            done("Naha, you don't.");
        } else {
            done();
        }
    },
    init: function () {
        this.on("addedfile", function (file) {
            alert("Added file.");
            console.log(file)
        });
    },

};
Dropzone.autoDiscover = false;


const handleImageUpload = event => {
    const files = event.target.files;
    const formData = new FormData();
    formData.append('myFile', files[0]);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.path)
        })
        .catch(error => {
            console.error(error)
        })
};

document.querySelector('#my-awesome-dropzone').addEventListener('drop', event => {
    handleImageUpload(event)
});

// this will get me the file path
// console.log(ev.dataTransfer.files[0].path)

