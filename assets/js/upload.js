
Dropzone.options.myAwesomeDropzone = {
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 20, // MB
    accept: function(file, done) {
        if (file.name === "justinbieber.jpg") {
            done("Naha, you don't.");
        }
        else { done(); }
    },

};
Dropzone.autoDiscover = false;
