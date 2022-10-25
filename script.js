//  form validation

var nameError = document.getElementById('name-error')
var emailError = document.getElementById('email-error')
var projectError = document.getElementById('project-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error')

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
      nameError.innerHTML = 'Name is required';
      return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
      nameError.innerHTML = 'Write full name';
      return false;
    }
    nameError.innerHTML = 'valid';
    return true;
}


$(document).ready(function(){

  $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

  });

  //smooth scrolling

  $('a[href*="#"]').on('click',function(e){


    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top

    },
      500, 
      'linear'
    );


  });

});



