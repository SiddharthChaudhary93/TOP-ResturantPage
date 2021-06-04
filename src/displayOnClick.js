const buttons = document.querySelectorAll('.nav>li>a');
const allDivs = document.querySelectorAll('.show');
// console.log(buttons);

function displayField(e){
    e.preventDefault();
    // console.log(this.id);
    buttons.forEach(button => button.style.border='none');
    this.style.border = `2px solid white`;
    allDivs.forEach(div => {
        div.style.display='none';
        if(div.id === this.id){
            div.style.display='block';
            
        }
    });
    
    
    
}


allDivs.forEach(div => {
    div.style.display='none';
    if(div.id === 'home'){
        div.style.display='block';
    }
    
});


buttons.forEach(button => button.addEventListener('click',displayField));