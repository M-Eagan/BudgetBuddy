$(document).ready(() => {

//This is the starting budget

let entSpent = parseFloat($("#amountTransaction").val()) || 0;
let foodSpent = parseFloat($("#amountTransaction").val()) || 0;
let clothSpent = parseFloat($("#amountTransaction").val()) || 0;
let billSpent = parseFloat($("#amountTransaction").val()) || 0;

entertainmentBudgetValue = parseFloat($('#entBudgetInput').val()) || 0;

let entRemainSpent = entertainmentBudgetValue - entSpent;
foodBudgetValue = parseFloat($('#foodBudgetInput').val()) || 0;
let foodRemainSpent = foodBudgetValue - foodSpent;

clothingBudgetValue = parseFloat($('#clothingBudgetInput').val()) || 0;
let clothRemainSpent = clothingBudgetValue - clothSpent;

billsBudgetValue = parseFloat($('#billsBudgetInput').val()) || 0;
let billsRemainSpent = billsBudgetValue - billSpent;

$(".submitBudgetButton").on('click', function(){
    entertainmentBudgetValue = parseFloat($('#entBudgetInput').val()) || 0;
    let entertainmentBudgetNumber = "$" + entertainmentBudgetValue;
    $('#entertainment-budget').html(entertainmentBudgetNumber);
    
    foodBudgetValue = parseFloat($('#foodBudgetInput').val()) || 0;
    let foodBudgetNumber = "$" + foodBudgetValue;
    $('#food-budget').html(foodBudgetNumber);
    
    clothingBudgetValue = parseFloat($('#clothingBudgetInput').val()) || 0;
    let clothingBudgetNumber = "$" + clothingBudgetValue;
    $('#clothing-budget').html(clothingBudgetNumber);
    
    billsBudgetValue = parseFloat($('#billsBudgetInput').val()) || 0;
    let billsBudgetNumber = "$" + billsBudgetValue;
    $('#bills-budget').html(billsBudgetNumber);

    let totalBudgetNumber = "$" + (entertainmentBudgetValue + foodBudgetValue + clothingBudgetValue + billsBudgetValue);
    document.getElementById('total-budget').innerHTML = totalBudgetNumber;

});


//This updates the budget box


$(".submitTransactionButton").on('click', function(){
    let categoryLog = "hold";
    if ( $('input[id="entertainmentTransaction"]').is(':checked') ) {
            entSpent += parseFloat($("#amountTransaction").val()) || 0;
            entRemainSpent = entertainmentBudgetValue -  entSpent;
            $(".entertainment-spent").html('$' + entSpent);
            $(".entertainment-remain").html('$' + entRemainSpent);
            categoryLog = 'Entertainment';

}   else if ($('input[id="foodTransaction"]').is(':checked') ) {
            foodSpent += parseFloat($("#amountTransaction").val()) || 0;
            foodRemainSpent = foodBudgetValue - foodSpent;
            $(".food-spent").html('$' + foodSpent);
            $(".food-remain").html('$' + foodRemainSpent);
            categoryLog = 'Food';

}   else if ($('input[id="clothingTransaction"]').is(':checked') ) {
            clothSpent += parseFloat($("#amountTransaction").val()) || 0;
            clothRemainSpent =clothingBudgetValue - clothSpent;
            $(".clothing-spent").html('$' + clothSpent);
            $(".clothing-remain").html('$' + clothRemainSpent);
            categoryLog = 'Clothing';

}   else if ($('input[id="billsTransaction"]').is(':checked') ) {
            billSpent += parseFloat($("#amountTransaction").val()) || 0;
            billsRemainSpent = billsBudgetValue - billSpent;
            $(".bills-spent").html('$' + billSpent);
            $(".bills-remain").html('$' + billsRemainSpent);
            categoryLog = 'Bills';

}    else {
        console.log("oops");
    };

    
       
    let totalSpentNumber = entSpent + foodSpent + clothSpent + billSpent;
    $('.total-spent').html('$' + totalSpentNumber);

    totalRemainSpent = entRemainSpent + foodRemainSpent + clothRemainSpent + billsRemainSpent;
    $('.total-remain').html('$' + totalRemainSpent);

    //This logs the form input into the transaction log

    let dateLog = $("#dateTransaction").val();
    let itemLog = $("#itemDescription").val();
    let amountLog = $("#amountTransaction").val();
    let addRow = "<tr><td>" + dateLog + "</td><td>" + categoryLog + "</td><td>" + itemLog + "</td><td>" + "$" + amountLog + "</td></tr>";
    $(".transaction-table").append(addRow);

});



//This is the pop-up that says you are overspent

$(".submitTransactionButton").on('click', function(){
        if (entSpent > entertainmentBudgetValue) {
            let budgetAlert = alert('Whoa, buddy. You are over-budget. Stop spending on entertainment!');
    }   else if (foodSpent > foodBudgetValue) {
            let budgetAlert = alert('Whoa, buddy. You are over-budget. Stop spending on food!');
    }   else if (clothSpent > clothingBudgetValue) {
            let budgetAlert = alert('Whoa, buddy. You are over-budget. Stop spending on clothing!');
    }   else if (billSpent > billsBudgetValue) {
            let budgetAlert = alert('Whoa, buddy. You are over-budget. Stop spending on bills!');
    }   else {
            console.log("within budget")
    }
    });


    });