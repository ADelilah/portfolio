$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");


});


//showing ekko lightbox
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();

                //cloning close btn from ekko-lightbox hidden header
                $('.ekko-lightbox').append('<button type="button" class="close my-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&#10005</span></button>');

                //var ekkoClose = $('.ekko-lightbox .close').clone();
                //ekkoClose.appendTo('.ekko-lightbox .modal-content');
            });



//

$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});


