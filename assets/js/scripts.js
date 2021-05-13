$(document).ready(function(){
    var scroll_inicio = 0;
    var startchange = $('#quiensomos');
    var offset = startchange.offset();
    $(document).scroll(function(){
        scroll_inicio = $(this).scrollTop();
        if(scroll_inicio > offset.top){
            $('.navbar').css('background-color', 'black');
            $('.navbar').css('opacity', '90%');
        }else{
            $('.navbar').css('background-color', 'transparent');
            $('.navbar').css('opacity', '100%');
        }
    });

    
});