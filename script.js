$(document).ready(() => {

//This is the starting budget

$(".submitBudgetButton").on('click', function(){
    let entertainmentBudgetValue = parseFloat($('#entBudgetInput').val()) || 0;
    let entertainmentBudgetNumber = "$" + entertainmentBudgetValue;
    $('#entertainment-budget').html(entertainmentBudgetNumber);
    
    let foodBudgetValue = parseFloat($('#foodBudgetInput').val()) || 0;
    let foodBudgetNumber = "$" + foodBudgetValue;
    $('#food-budget').html(foodBudgetNumber);

    let clothingBudgetValue = parseFloat($('#clothingBudgetInput').val()) || 0;
    let clothingBudgetNumber = "$" + clothingBudgetValue;
    $('#clothing-budget').html(clothingBudgetNumber);
    
    let billsBudgetValue = parseFloat($('#billsBudgetInput').val()) || 0;
    let billsBudgetNumber = "$" + billsBudgetValue;
    $('#bills-budget').html(billsBudgetNumber);


    let totalBudgetNumber = "$" + (entertainmentBudgetValue + foodBudgetValue + clothingBudgetValue + billsBudgetValue);
    document.getElementById('total-budget').innerHTML = totalBudgetNumber;

});

//This updates the budget box

let entSpentValue = $("#amountTransaction").val();
let entSpent = parseFloat(entSpentValue) || 0;
let foodSpentValue = $("#amountTransaction").val();
let foodSpent = parseFloat(foodSpentValue) || 0;
let clothSpentValue = $("#amountTransaction").val();
let clothSpent = parseFloat(clothSpentValue) || 0;;
let billSpentValue = $("#amountTransaction").val();
let billSpent = parseFloat(billSpentValue) || 0;;

let entertainmentBudgetValue = parseFloat($('#entBudgetInput').val()) || 0;
let entRemainSpent = entertainmentBudgetValue - entSpent;

let foodBudgetValue = parseFloat($('#foodBudgetInput').val()) || 0;
let foodRemainSpent = foodBudgetValue - foodSpent;

let clothingBudgetValue = parseFloat($('#clothingBudgetInput').val()) || 0;
let clothRemainSpent = clothingBudgetValue - clothSpent;

let billsBudgetValue = parseFloat($('#billsBudgetInput').val()) || 0;
let billsRemainSpent = billsBudgetValue - billSpent;

$(".submitTransactionButton").on('click', function(){
    let categoryLog = "hold";
    if ( $('input[id="entertainmentTransaction"]').is(':checked') ) {
            entSpent += parseFloat($("#amountTransaction").val());
            entRemainSpent -= entSpent;
            $(".entertainment-spent").html('$' + entSpent);
            $(".entertainment-remain").html('$' + entRemainSpent);
            categoryLog = 'Entertainment';

}   else if ($('input[id="foodTransaction"]').is(':checked') ) {
            foodSpent += parseFloat($("#amountTransaction").val());
            $(".food-spent").html('$' + foodSpent);
            $(".food-remain").html('$' + foodRemainSpent);
            categoryLog = 'Food';

}   else if ($('input[id="clothingTransaction"]').is(':checked') ) {
            clothSpent += parseFloat($("#amountTransaction").val());
            $(".clothing-spent").html('$' + clothSpent);
            $(".clothing-remain").html('$' + clothRemainSpent);
            categoryLog = 'Clothing';

}   else if ($('input[id="billsTransaction"]').is(':checked') ) {
            billSpent += parseFloat($("#amountTransaction").val());
            $(".bills-spent").html('$' + billSpent);
            $(".bills-remain").html('$' + billsRemainSpent);
            categoryLog = 'Bills';

}    else {
        console.log("oops");
    };

    //This logs the form input into the transaction log

    let dateLog = $("#dateTransaction").val();
    let itemLog = $("#itemDescription").val();
    let amountLog = $("#amountTransaction").val();
    let addRow = "<tr><td>" + dateLog + "</td><td>" + categoryLog + "</td><td>" + itemLog + "</td><td>" + "$" + amountLog + "</td></tr>";
    $(".transaction-table").append(addRow);

});



//This is the pop-up that says you are overspent



});