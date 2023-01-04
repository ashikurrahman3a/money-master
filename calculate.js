document.getElementById('total-calu').addEventListener('click',
function(){
    const totalExpense = document.getElementById('total-expenses');
       totalExpense.innerText;

    const food = document.getElementById('food');
    const foodString = food.innerText;
    const fooValue = parseFloat(foodString);

    const rent = document.getElementById('rent');
    const rentString = rent.innerText;
    const rentValue= parseFloat(rentString);

    const clothes = document.getElementById('clothes');
    const clothesString = clothes.innerText;
    const clothesValue = parseFloat(clothesString);

    const TotalKhoroz = fooValue +rentValue +clothesValue;
    totalExpense.innerText=TotalKhoroz;


    const income=document.getElementById('income');
    const incomevalueString= income.innerText;
    const incomevalue = parseFloat(incomevalueString);

    const balance = document.getElementById('balance');
    balance.innerText;

    const totalZoma = incomevalue- TotalKhoroz;
    balance.innerText= totalZoma


})