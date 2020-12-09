//wait for the dom to load
$(document).ready(function () {

    // link submit button
    var submitButton = $("#submit-button")

    // link textbox to take burger data
    var textBox = $("#text-input")

    // add event to submit
    submitButton.on("click", function () {

        postData(textBox.val());
    })
    var devourButtons = $(".btn-sm")
    devourButtons.on("click", function (evt) {
        console.log(evt);
        var id = evt.target.id;
        moveToDevoured(id)

    })



});
// use input text and send it to api
async function postData(burgerName) {
    console.log(burgerName);
    // call API to send burger data
    const response = await $.post("/api/addburger", { "burgerName": burgerName })
    console.log(response);
    location.reload();

}

async function moveToDevoured(id) {
    const response = await $.post("/api/devouredburger", { "id": id })
    console.log(response);
    location.reload();

}