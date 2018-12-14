const statForm = document.querySelector('#statForm');
$('.pageContent').hide()


function pullStats() {
    var platform = statForm.platformInput.value;
    var id = statForm.usernameInput.value;
$.ajax({
    type: "GET",
    url: "https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/" + platform + "/gamer/" + id + "/profile/",
}).then(function(response) {
    console.log(response);
    $('.pageContent').show()

  });
};
