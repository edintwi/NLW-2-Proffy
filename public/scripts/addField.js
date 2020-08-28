document.querySelector('#add-time').addEventListener('click', cloneFiled);

function cloneFiled(){
    console.log("Clicou");
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    const fields = newFieldContainer.querySelectorAll('input');
    
    fields.forEach(function(field) {
        console.log('Field');
        field.value = "";
    });



    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}