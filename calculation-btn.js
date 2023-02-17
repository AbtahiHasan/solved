function getInputFieldValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId)
    const inputFieldString=inputField.value;
    const inputFieldValue=parseFloat(inputFieldString);
    inputField.value='';
    return inputFieldValue;
}
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const ElementValue = parseFloat(elementValueString);
    return ElementValue;
}
function setTotalElementValueById(elementId,newValue){
    const totalElement = document.getElementById(elementId);
    totalElement.innerText = newValue;
}
document.getElementById('calculate-btn').addEventListener('click', function(){
    // const incomeInputField=document.getElementById('income');
    // const incomeInputString=incomeInputField.value;
    // const incomeInputValue=parseFloat(incomeInputString);
    const incomeInputValue=getInputFieldValueById('income')
    // incomeInputField.value='';

    // const foodInputField=document.getElementById('food');
    // const foodInputString=foodInputField.value;
    // const foodInputValue=parseFloat(foodInputString);
    const foodInputValue=getInputFieldValueById('food')
    // foodInputField.value='';

    // const rentInputField=document.getElementById('rent');
    // const rentInputString=rentInputField.value;
    // const rentInputValue=parseFloat(rentInputString);
    const rentInputValue=getInputFieldValueById('rent')
    // rentInputField.value='';

    // const clothesInputField=document.getElementById('clothes');
    // const clothesInputString=clothesInputField.value;
    // const clothesInputValue=parseFloat(clothesInputString);
    const clothesInputValue=getInputFieldValueById('clothes')
    // clothesInputField.value='';
    
    const newExpensesValue= foodInputValue + rentInputValue + clothesInputValue;

    // const previousExpensesElement=document.getElementById('total-expenses')
    // const previousExpensesString= previousExpensesElement.innerText
    // const previousExpensesValue=parseFloat(previousExpensesString);
    const previousExpensesValue=getElementValueById('total-expenses')

    const totalExpensesValue=previousExpensesValue+newExpensesValue;
    // previousExpensesElement.innerText=totalExpensesValue;
    setTotalElementValueById('total-expenses', totalExpensesValue);

    const newBalanceValue= incomeInputValue-newExpensesValue;

    // const previousBalanceElement=document.getElementById('balance')
    // const previousBalanceString= previousBalanceElement.innerText
    // const previousBalanceValue=parseFloat(previousBalanceString);
    const previousBalanceValue=getElementValueById('balance')

    const totalBalanceValue=previousBalanceValue+newBalanceValue;
    // previousBalanceElement.innerText=totalBalanceValue;
    setTotalElementValueById('balance', totalBalanceValue);
})

