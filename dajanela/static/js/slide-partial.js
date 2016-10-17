// SLIDE POSTS TOP-HEADER
$( document ).ready(function() {

    var sliderPartial = new MasterSlider();
 
    sliderPartial.control('arrows');  
    sliderPartial.control('slideinfo',{insertTo:"#partial-view" , autohide:false, align:'bottom', size:160});
    sliderPartial.control('circletimer' , {color:"#FFFFFF" , stroke:9});
 
    sliderPartial.setup('masterslider' , {
        width:760,
        height:400,
        space:10,
        loop:true,
        view:'partialWave',
        layout:'partialview'
    });
});
 
    
