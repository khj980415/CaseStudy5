$(document).ready(() => {
    let winw=0;

    window.addEventListener("DOMContentLoaded", function(){
        let bgVideo=document.getElementById("bgVideo");
        bgVideo.muted=true;
        bgVideo.play();
        bgVideo.loop=true;
    });

    $(document).scroll(() => {
        if($(document).scrollTop() >= $("#main").height()){
            $("header").addClass("fixed");
        }
        else{
            $("header").removeClass("fixed");
        }
    });

    $("header > .header_inner > .hidden_area > #desktop > ul > li").mouseenter(function(){
        $("header").addClass("active");
        $(this).find("ul").addClass("active");
        $(this).addClass("active");
    });

    $("header > .header_inner > .hidden_area > #desktop > ul > li").mouseleave(function(){
        $(this).find("ul").removeClass("active");
        $(this).removeClass("active");
    });

    $("header").mouseleave(function(){
        $(this).removeClass("active");
    });

    $("header > .header_inner > .hidden_area > #desktop > ul > li > a").focusin(function(){
        $("header").addClass("active");
            $(this).parent().find("ul").addClass("active");
            $(this).parent().addClass("active");
    });
    $("header nav li li:last-child a").focusout(function(){
            $(this).parent().parent().removeClass("active");
            $(this).parent().parent().parent().removeClass("active");
            if($(this).parent().parent().parent().index() === $("header > .header_inner > .hidden_area > #desktop > ul > li").length-1){
                $("header").removeClass("active");
            }
    });

    $("header > .header_inner > .header_right > .lang > a").click(function(e){
        e.preventDefault();
        if(!$(this).parent().hasClass("active")){
        $(this).parent().addClass("active");
        $(this).next().slideDown(300);
        }
        else{
            $(this).parent().removeClass("active");
        $(this).next().slideUp(300);
        }
    });

    $("header .tab").click(function(e){
        e.preventDefault();
        if(!$(this).hasClass("active")){
            $(this).addClass("active");
            $(".dim").fadeIn(200);
            $("header #mobile").addClass("active");
            $("body").addClass("fixed");
            $("header > .header_inner > .header_right > .lang").removeClass("active");
            $("header > .header_inner > .header_right > .lang > ul").hide();
        }
        else{
            $(this).removeClass("active");
            $(".dim").fadeOut(200);
            $("header #mobile").removeClass("active");
            $("body").removeClass("fixed");
        }	
    });

    $(window).resize(function(){
        winw=$(window).width();
        if(winw > 990){
            if($("header .tab").hasClass("active"))
            $("header .tab").removeClass("active");
            $(".dim").fadeOut(200);
            $("header #mobile").removeClass("active");
            $("body").removeClass("fixed");
        }
    });

    $("header > .header_inner > #mobile > .inner > ul > li").click(function(e){
        e.preventDefault();
        if(!$(this).hasClass("active")){
            $("header > .header_inner > #mobile > .inner > ul > li").removeClass("active");
            $(this).addClass("active");
            $("header .header_inner #mobile li ul").slideUp(300);
            $(this).find("ul").slideDown(300);
        }
        else{
            $(this).removeClass("active");
            $(this).find("ul").slideUp(300);
        }
    });

});