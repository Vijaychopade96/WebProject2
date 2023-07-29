function roatte(){
    var lastChild= $('.slider div:last-child').clone();

    $('.silder div').removeClass('fistSilde')
    $('.slider div:last-child').remove();
    $('.slider').prepend(lastChild)
    $(lastChild).addClass('firstSlide')


}
window.setInterval(function(){
    roatte()

},4000);