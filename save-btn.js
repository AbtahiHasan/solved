document.getElementById('save-btn').addEventListener('click', function(){

    const saveInputValue=getInputFieldValueById('save')
    // saveInputField.value='';

    const incomeInputValue = getElementValueById('balance')
    console.log(incomeInputValue);
    const newSavingAmount = incomeInputValue * saveInputValue / 100;
    console.log(saveInputValue)

    const previousSavingValue=getElementValueById('saving-amount')

    const totalSavingAmount= previousSavingValue + newSavingAmount;

    setTotalElementValueById('saving-amount', totalSavingAmount);

    const previousRemainingBalanceValue=getElementValueById('remaining-balance')
    console.log(previousRemainingBalanceValue)
    
    const previousUpdatedBalanceValue=getElementValueById('balance')
    
    const totalRemainingBalance = (previousUpdatedBalanceValue-totalSavingAmount);

    setTotalElementValueById('balance', totalRemainingBalance);
})