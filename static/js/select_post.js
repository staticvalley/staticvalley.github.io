$(document).ready(
    function() {
        $(".card").click(function(e) {
            window.location.href = $(this).find("a").attr("href");
        });
    }
);