function check() {

   
    var storedName = localStorage.getItem('user');
    var storedPw = localStorage.getItem('pas');

    
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    if(userName.value !== storedName || userPw.value !== storedPw) {
        alert('ERROR');
    }else {
        window.location.replace('index.html');
    }
}