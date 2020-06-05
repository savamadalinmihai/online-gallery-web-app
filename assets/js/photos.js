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
    // addProductToCart: function (productId) {
    //     // TODO: read customerID dinamically in the future
    //     let request = {
    //         customerId: 1,
    //         productIds: [productId]
    //     };
    //
    //     $.ajax({
    //         url: Photos.API_URL + "/carts",
    //         method: "PUT",
    //         contentType: "application/json",
    //         data: JSON.stringify(request)
    //     }).done(function () {
    //         location.replace("cart.html")
    //     })
    // },

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

    // bindEvents: function () {
    //     $('.single-product-area').delegate('.add_to_cart_button', 'click', function (event) {
    //         event.preventDefault();
    //
    //         let productId = $(this).data('product_id');
    //
    //         Shop.addProductToCart(productId)
    //     })
    // }
};

Photos.getPhotos();
Photos.bindEvents();