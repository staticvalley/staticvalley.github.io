$(window).bind("load", function() { 
    const mode = localStorage.getItem('cached_mode') || "dark_mode";
    $("body").addClass(mode)
    $("#toggle_color_mode").attr("src", "/ui/"+mode+".svg")
    $("#toggle_color_mode").on("click", function(){
        $("body").toggleClass("dark_mode light_mode");
        $("#toggle_color_mode").attr("src", "/ui/"+$("body").attr("class")+".svg")
        localStorage.setItem("cached_mode", $("body").attr("class"));
    });
});