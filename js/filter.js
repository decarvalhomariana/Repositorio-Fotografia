(function(){
    $(document).ready(function(){
        $(".btn-work").click(function(e){
            e.preventDefault();
            var filter = $(this).attr("data-filter");
            if (filter == "general"){
                $(".container-work").show(1000);
            } else {
                $(".container-work").not("."+filter).hide(1000);
                $(".container-work").filter("."+filter).show(1000);
            }
        });
        $("ul li").click(function(){
            $(this).addClass("active").siblings().removeClass("active"); 
        });
    });
    let team, services, work, contact;
    function getOffset() {
        team = $("#team").offset().top;
        services = $("#services").offset().top;
        work = $("#work").offset().top;
        contact = $("#contact").offset().top;
    }    
    window.addEventListener("resize", function () {
        let team = $("#team").offset().top,
            services = $("#services").offset().top,
            work = $("#work").offset().top,
            contact = $("#contact").offset().top;
    });
    $("#link-start").on("click", function (e) {
        e.preventDefault();
        getOffset();
        $("html, body").animate(
          {scrollTop: 0,},600);
    });
    $("#link-team").on("click", function (e) {
        e.preventDefault();
        getOffset();
        $("html, body").animate(
          {scrollTop: team - 90,},600);
    });
      $("#link-services").on("click", function (e) {
        e.preventDefault();
        getOffset();
        $("html, body").animate(
          {scrollTop: services - 90,},600);
      });
      $("#link-work").on("click", function (e) {
        e.preventDefault();
        getOffset();
        $("html, body").animate(
          {scrollTop: work - 90,},600);
      });
      $("#link-contact").on("click", function (e) {
        e.preventDefault();
        getOffset();
        $("html, body").animate(
          {scrollTop: contact,},600);
      });
})();