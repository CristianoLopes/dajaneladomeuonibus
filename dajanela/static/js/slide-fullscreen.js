// SLIDE POSTS TOP-HEADER
$( document ).ready(function() {
        var slider = new MasterSlider();
        slider.control('arrows' ,{insertTo:'#masterslider1'});
        slider.control('bullets');
        slider.setup('masterslider1' , {
            width:1024,
            height:768,
            space:5,
            view:'parallaxMask',
            layout:'fullscreen',
            fullscreenMargin:0,
            speed:7,
            autoplay:true,
            filters: {
              grayscale: 1,
              opacity: 0.9,
              brightness: 2
            },
            loop:true
        });
});
