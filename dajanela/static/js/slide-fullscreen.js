// SLIDE POSTS TOP-HEADER
$( document ).ready(function() {
        var slider = new MasterSlider();
        slider.control('arrows' ,{insertTo:'#masterslider'});   
        slider.control('bullets');  
        slider.setup('masterslider' , {
            width:1024,
            height:768,
            space:5,
            view:'basic',
            layout:'fullscreen',
            fullscreenMargin:0,
            speed:20,
            autoplay:true,
            loop:true
        });
});