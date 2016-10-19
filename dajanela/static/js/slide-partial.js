// SLIDE POSTS TOP-HEADER
$( document ).ready(function() {

    var slider2 = new MasterSlider();

    slider2.control('arrows');
    slider2.control('slideinfo',{insertTo:"#partial-view" , autohide:false, align:'bottom', size:160});
    slider2.control('circletimer' , {color:"#FFFFFF" , stroke:9});
    slider2.setup('masterslider2' , {
        width:760,
        height:400,
        space:10,
        loop:true,
        view:'parallaxMask',
        filters: {
          grayscale: 1,
          opacity: 0.8,
          brightness: 1
        },
        layout:'partialview'
    });
});
