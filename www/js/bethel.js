

$( document ).ready(function() {

$('.front-box').hover(

    function(){
        $(this).animate({'backgroundColor': '#F2F2F2'},400);
    },
    function(){
        $(this).animate({'backgroundColor': jQuery.Color({ alpha: 0.4 })},400);
    }

);

});

/*

$(document).ready(function() {
var state = true;
$( ".front-box" ).hover(function() {
if ( state ) {
$(this).animate({
backgroundColor: "#aa0000",
color: "#fff",
}, 1000 );
} else {
$(this).animate({
backgroundColor: "#fff",
color: "#000",
}, 1000 );
}
state = !state;
});
});

*/