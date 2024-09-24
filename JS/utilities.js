function getInputValueById(id){
    return parseFloat(document.getElementById(id).value);
}

function getTextBalance(id){
    return parseFloat(document.getElementById(id).innerText);
}
function getCardTitle(id){
    return (document.getElementById(id).innerText);
}

function NavigateSection(id1, id2) {
    id1.classList.add(
        'text-orange-100',
        'font-semibold',
        'bg-violet-500'  
    );
    id1.classList.remove(
        'bg-gray-300',
        'text-gray-600',
        'font-normal'
    );
    id2.classList.remove(
        'text-orange-100',
        'font-semibold',
        'bg-violet-500'
    );
    id2.classList.add(
        'bg-gray-300',
        'text-gray-600',
        'font-normal'
    );
}

function showModal(){
    document.getElementById('myModal').classList.remove('hidden');
}
function closeModal(){
    document.getElementById('myModal').classList.add('hidden');
}