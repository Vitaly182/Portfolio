

h1.onmouseover = function () {
    h1.style.background = "#CC99FE";
    h1.style.color = 'White';
};

h1.onmouseleave = function () {
    h1.style.background = "MediumPurple";
    h1.style.color = '#FFFF00';
};

/* Действия по форме ввода - заказ звонка */
function open_ask_to_call_back_form() {
    document.getElementById("ask_to_call_back_form").style.display = "block";
}
function closeForm() {
    document.getElementById("ask_to_call_back_form").style.display = "none";
}
/* Отлавливаем нажатие на кнопку вне формы и закрываем форму */
document.body.onclick = function(e) {
    var el = e ? e.target : window.event.target;
    if (el.className === 'form-popup') document.getElementById("ask_to_call_back_form").style.display = "none";
}

/* Действия по блоку политика персональных данных */
/*function open_policy_personal_data() {
    document.getElementById("open-policy-personal-data-popup").style.display = "block";
}
function closeForm() {
    document.getElementById("open-policy-personal-data-popup").style.display = "none";
}
/* Отлавливаем нажатие на кнопку вне формы и закрываем форму */
/*document.body.onclick = function(e) {
    var el = e ? e.target : window.event.target;
    if (el.className === 'policy-personal-data-popup') document.getElementById("open-policy-personal-data-popup").style.display = "none";
}*/



Send_message.onmouseover = function () {
    Send_message.style.background = "MediumPurple";
};

Send_message.onmouseleave = function () {
    Send_message.style.background = "rgba(0, 153, 255, 0.164)";
};




/*
window.onload = function () {
    var button_color = document.querySelector('Send_message');
    button_color.onmousemove = function () {
        this.style.color = 'White';
    };
    button_color.onmouseout = function () {
        this.style.color = '#FFFF00';
    };
};*/



/*logo.onmouseover = function () {
    logo.style.background = "#CC99FE";
};

logo.onmouseleave = function () {
    logo.style.background = "MediumPurple";
};*/

