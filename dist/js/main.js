$(document).ready(function () {
	$(".send-mail").click(function (e) {
        var email = $(this).siblings('input[name="form-mail"]'),
            orderStatus = true;
        checkData();

        function checkData() {
        	var orderStatus = 0;

       		if (email.val() !== '' && checkMail(email.val())) {
            email.removeClass("err");
            orderStatus++;
        	} else {
            email.addClass("err").attr("placeholder", "Input error");
        	}
	        if(orderStatus == 1) {
	            send();
	        } else {
	            e.preventDefault();
	        }
        };
    });

    function checkMail(value) {
        regExp = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (regExp.test(value)) {
            return true;
        } else {
            return false;
        }
    };

    function checkPhone(value) {
        regExp = /^([+]?[0-9\s-\(\)]{3,25})*$/i;
        if (regExp.test(value)) {
            return true;
        } else {
            return false;
        }
    };


	$(".send-btn").click(function (e) {
        var name = $(this).siblings('input[name="form-name"]'),
        	phone = $(this).siblings('input[name="form-phone"]'),
            email = $(this).siblings('input[name="form-mail"]');
            // orderStatus = false;
        // console.log("Проверка емейла "+checkMail(email.val()));
        // console.log("Полученное имя " + name);
        // console.log("Полученный телефон " + phone.val());
        // console.log("Полученное мыло " + email);
        checkData();

        function checkData() {
        	var orderStatus = 0;

        	if (phone.val() !== '' && checkPhone(phone.val())) {
            phone.removeClass("err");
            orderStatus++ ;
        	} else {
            phone.addClass("err").attr("placeholder", "Input error");
        	}

       		 if (email.val() !== '' && checkMail(email.val())) {
            email.removeClass("err");
            orderStatus++;
        	} else {
            email.addClass("err").attr("placeholder", "Input error");
        	}

        	if (name.val() !== '') {
            name.removeClass("err");
            orderStatus++;
        	} else {
            name.addClass("err").attr("placeholder", "Input error");
        	}

	        if(orderStatus == 3) {
	            send();
	        } else {
	            e.preventDefault();
	        }
        };
    });

    function send() {            
        $.ajax({
            url: '/mail.php',
            type: 'POST',
            data: {
                errors: "zero"
            }
        })
        .done(function(data) {
            if(data){
                alert('Сообщение успешно отправлено!');
            }
            console.log("+");
        })
        .fail(function() {
            console.log("-");
        });          
    };
});