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

const mainBalance = getTextBalance('main-amount');

//Card 01
const card01Button = document.getElementById('card01-button');
card01Button.addEventListener('click',function(){
    const card01InputFieldValue = getInputValueById('card01-input-field');
    if((isNaN(card01InputFieldValue)) || ( card01InputFieldValue <0)  ||  (card01InputFieldValue === '')){
        alert('Value Must be A Positive Number')
    }
    else{
        const card01Value = getTextBalance('card01-money-value');
        const mainBalanceFinalValue = mainBalance - card01InputFieldValue;
        document.getElementById('main-amount').innerText = mainBalanceFinalValue;

        const cardFinalValue = card01Value + card01InputFieldValue;
        document.getElementById('card01-money-value').innerText = cardFinalValue;
        
        
    }
    
})