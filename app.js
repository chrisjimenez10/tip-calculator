//Function to calculate tip on form submission
$("#tipForm").on("submit", function(e){
    e.preventDefault();

    bill_total = Number($("#billTotal").val())
    tip_percentage = Number($("#tipPercent").val()) / 100
    split = Number($("#split").val())
    if(split === 0){
        split = 1
    }
    
    tip_amount = bill_total * tip_percentage
    result = Math.round(((bill_total + tip_amount) / split) * 100) / 100

    $("#result").val(result)
    $("#tipAmount").val(Math.round(tip_amount * 100) / 100)
})

//Function to clear input values
$("#clear").click(function(){
    $("#billTotal").val("")
    $("#tipPercent").val("")
    $("#split").val("")
    $("#result").val("")
    $("#tipAmount").val("")
})