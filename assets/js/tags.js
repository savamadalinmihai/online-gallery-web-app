window.Tags = {
    API_URL: "http://localhost:8086",


    getTags: function () {
        $.ajax({
            url: Tags.API_URL + "/tag",
            method: "GET"
        }).done(function (response) {
            Tags.displayTags(response.content);
        })
    },

    displayTags: function (tags) {
        let tagsHtml = '';

        tags.forEach(tag => tagsHtml += Tags.getHtmlForOneTag(tag));

        $('.content').html(tagsHtml);

    },

    getHtmlForOneTag: function (tag) {
        return `<div class="tags">${tag.tagName}</div>
        `;
    },
}

Tags.getTags();