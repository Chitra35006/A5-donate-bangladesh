//navigate page
const homeButton = document.getElementById('home-button');
if(homeButton){
    homeButton.addEventListener('click',function(){
        window.location.href = 'blog.html';
    })
}

const blogButton = document.getElementById('blog-button');
if(blogButton){
    blogButton.addEventListener('click',function(){
        window.location.href= 'index.html';
    })
}

//history & donation Tab
const donationTab = document.getElementById('donation-button');
const historyTab = document.getElementById('history-button');

historyTab.addEventListener('click',function(){
    NavigateSection(document.getElementById('history-button'), document.getElementById('donation-button'));
    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('history-container').classList.remove('hidden');
})
donationTab.addEventListener('click',function(){
    NavigateSection(document.getElementById('donation-button'), document.getElementById('history-button'));
    document.getElementById('donation-container').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');
})



//Card 01
const card01Button = document.getElementById('card01-button');
card01Button.addEventListener('click',function(){
    const card01InputFieldValue = getInputValueById('card01-input-field');
    if((isNaN(card01InputFieldValue)) || ( card01InputFieldValue <0)  ||  (card01InputFieldValue === '')){
        alert('Invalid Donation Amount');
    }
    else if(card01InputFieldValue > parseFloat(document.getElementById('main-amount').innerText)){
        alert("You Don't Have Enough Balance");
    }
    else{
        myModal.showModal();
        const mainBalance = getTextBalance('main-amount');
        const card01Value = getTextBalance('card01-money-value');
        const mainBalanceFinalValue = mainBalance - card01InputFieldValue;
        document.getElementById('main-amount').innerText = mainBalanceFinalValue;

        const cardFinalValue = card01Value + card01InputFieldValue;
        document.getElementById('card01-money-value').innerText = cardFinalValue;
    
        const cardTitle = getCardTitle('card01-title');
        const date = new Date ();
        const historyItem = document.createElement('div');
        historyItem.className = 'p-4 rounded-md border md:text-base text-[14px] border-gray-200 flex flex-col justify-start';
        historyItem.innerHTML = `
        <p class="font-bold md:text-xl text-[15px] text-[#111111]">${card01InputFieldValue} Taka is ${cardTitle}</p> <br>
        <p class="md:text-base text-[12px] font-light">${date.toDateString()} ${date.toLocaleTimeString()} ${date.toTimeString()}</p>
        `
        const historyContainer = document.getElementById('history-list');
        historyContainer.insertBefore(historyItem,historyContainer.firstChild);
    }
    document.getElementById('card01-input-field').value = "";
    
    
})
//Card 02
const card02Button = document.getElementById('card02-button');
card02Button.addEventListener('click',function(){
    const card02InputFieldValue = getInputValueById('card02-input-field');
    if((isNaN(card02InputFieldValue)) || ( card02InputFieldValue <0)  ||  (card02InputFieldValue === '')){
        alert('Invalid Donation Amount');
    }
    else if(card02InputFieldValue > parseFloat(document.getElementById('main-amount').innerText)){
        alert("You Don't Have Enough Balance");
    }
    else{
        myModal.showModal();
        const mainBalance = getTextBalance('main-amount');
        const card02Value = getTextBalance('card02-money-value');
        const mainBalanceFinalValue = mainBalance - card02InputFieldValue;
        document.getElementById('main-amount').innerText = mainBalanceFinalValue;

        const cardFinalValue = card02Value + card02InputFieldValue;
        document.getElementById('card02-money-value').innerText = cardFinalValue;
        
        const cardTitle = getCardTitle('card02-title');
        const date = new Date ();
        const historyItem = document.createElement('div');
        historyItem.className = 'p-4 rounded-md border md:text-base text-[14px] border-gray-200 flex flex-col justify-start';
        historyItem.innerHTML = `
        <p class="font-bold md:text-xl text-[15px] text-[#111111]">${card02InputFieldValue} Taka is ${cardTitle}</p> <br>
        <p class="md:text-base text-[12px] font-light">${date.toDateString()} ${date.toLocaleTimeString()} ${date.toTimeString()}</p>
        `
        const historyContainer = document.getElementById('history-list');
        historyContainer.insertBefore(historyItem,historyContainer.firstChild);
    }
    document.getElementById('card02-input-field').value = "";
    
})
//Card 03
const card03Button = document.getElementById('card03-button');
card03Button.addEventListener('click',function(){
    const card03InputFieldValue = getInputValueById('card03-input-field');
    if((isNaN(card03InputFieldValue)) || ( card03InputFieldValue <0)  ||  (card03InputFieldValue === '')){
        alert('Invalid Donation Amount');
    }
    else if(card03InputFieldValue > parseFloat(document.getElementById('main-amount').innerText)){
        alert("You Don't Have Enough Balance");
    }
    else{
        myModal.showModal();
        const mainBalance = getTextBalance('main-amount');
        const card03Value = getTextBalance('card03-money-value');
        const mainBalanceFinalValue = mainBalance - card03InputFieldValue;
        document.getElementById('main-amount').innerText = mainBalanceFinalValue;

        const cardFinalValue = card03Value + card03InputFieldValue;
        document.getElementById('card03-money-value').innerText = cardFinalValue;
        
        const cardTitle = getCardTitle('card03-title');
        const date = new Date ();
        const historyItem = document.createElement('div');
        historyItem.className = 'p-4 rounded-md border md:text-base text-[14px] border-gray-200 flex flex-col justify-start';
        historyItem.innerHTML = `
        <p class="font-bold md:text-xl text-[15px] text-[#111111]">${card03InputFieldValue} Taka is ${cardTitle}</p> <br>
        <p class="md:text-base text-[12px] font-light">${date.toDateString()} ${date.toLocaleTimeString()} ${date.toTimeString()}</p>
        `
        const historyContainer = document.getElementById('history-list');
        historyContainer.insertBefore(historyItem,historyContainer.firstChild);
    }
    document.getElementById('card03-input-field').value = ""; 
    
})