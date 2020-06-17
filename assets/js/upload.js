window.Upload = {
    API_URL: "http://localhost:8086",
    createEntry: function () {
        let first_nameValue ;
        let last_nameValue = $("#last_name-field").val();
        let phone_numberValue = $("#phone_number-field").val();
        let emailValue = $("#email-field").val();

        let requestBody = {
            createdDate: "2020-06-17",
            imageData: "dGVzdAo=",
            name: "testdepost",
            sizeInKb: "25054",
            taggedAsFavorite: "false",
            xAxisDimension: 4000,
            yAxisDimension: 6000
        };

        $.ajax({
            url: Upload.API_URL + "/photo",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(requestBody)
        })
    },
};

Dropzone.options.myDropzone = {
    // Prevents Dropzone from uploading dropped files immediately
    autoProcessQueue: true,
    init: function () {
        myDropzone = this;

        //Restore initial message when queue has been completed
        this.on("addedfiles", function(files) {
            console.log(files.length + ' files added');
        this.on("thumbnail", function(files){
            for (i = 0; i < files.length; i++) {
                console.log(files[i].name);
                console.log(files[i].size);
                console.log(files[i].height);
            }

            });
            console.log(files[0]);



            Upload.createEntry();
        });

    },


};





// $(document).ready(function(){
//
//     $(".dropzone").on(ondragend(function(){
//
//         var fd = new FormData();
//         var files = $('#file')[0].files[0];
//         fd.append('file',files);
//
//         let json = {
//             "createdDate": "2019-12-22",
//             "imageData": "dGVzdAo=",
//             "name": "jahsfjahsfkjaskf",
//             "sizeInKb": "12560",
//             "taggedAsFavorite": "false",
//             "xAxisDimension": 123,
//             "yAxisDimension": 124
//         };
//
//         $.ajax({
//             url: "http://localhost:8086/photo",
//             type: "POST",
//             data: JSON.stringify(json),
//             contentType: false,
//             processData: false,
//
//         });
//     }));
// });



