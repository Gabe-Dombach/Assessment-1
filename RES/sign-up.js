$(document).ready(function(){
    let user =$('#form__input').val();
    let password = $('form_password').val();
    $('.submit').click(function(){
        localStorage.set('user',user)
        localStorage.set('pas',password);
    })

});