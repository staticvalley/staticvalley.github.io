$(document).ready(
    function () {
        $(".collapse_hdr").click(function () {
            var header = $(this).find("h5").text();
            var header_n;
            if(header[0] === "▷") {
                header_n = header.replace("▷", "▽");
            } else {
                header_n = header.replace("▽", "▷");
            }
            $(this).find("h5").text(header_n);
        });
    }
);