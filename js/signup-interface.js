$(document).ready(function(){
  $('signup').submit(function(event){
    event.preventDefault();
    var email = ('#email').val();
    console.log(email);
    $('signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
