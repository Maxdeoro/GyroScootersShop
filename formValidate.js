function validate_form() {
    let valid = true;
    if (document.order.fio.value == '') {
        window.alert('Enter you name !');
        valid = false;
    }

    function checkEmail() {
        const mail = document.order.email.value;
        console.log(mail);
      
        if(validateEmail(mail)) {
          document.getElementById('span1').innerText = 'It s OK !';
        } else {
          document.getElementById('span1').innerText = 'Incorrect email !';
        }
    };
    checkEmail();

    // const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // if(!re.test(document.order.email.value)) {
    //     document.alert('Enter correct email');
    //     valid = false;
    // }

    document.order.product.value = window.location.pathname;

    return value;
};