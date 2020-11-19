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


});
// use input text and send it to api
async function postData(burgerName) {
    console.log(burgerName);
    // call API to send burger data
    const response = await $.post("/api/addburger", { "burgerName": burgerName })
    console.log(response);
    location.reload();




}