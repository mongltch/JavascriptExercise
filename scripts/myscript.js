
function formValid(){
    let userInputName = document.forms['form1']['name'].value;
    let userInputEmail = document.forms['form1']['email'].value;

        if(userInputEmail === '' && userInputName === ''){
          alert('You have not completed required inputs');
          return false;  
        } else if(userInputEmail === ''){
        alert('You must fill out email.');
        } else if(userInputName === ''){
        alert('You must fill out name');
    } 
        
}


function changeText(){
    let divElement = document.querySelector('.js-mikuCon-element')
    let mikuPara = document.querySelector('.js-para-element');
    let buttonChange = document.querySelector('.js-button-element');

    const displayMikuImg = '<img src="images/Hatsune_Miku.webp" alt="Hatsune Miku full" class="js-img-element">'

    if(mikuPara.innerHTML === 'Click that button if you love Hastune Miku'){
        mikuPara.innerHTML = 'I LOVE HATSUNE MIKU!';
        divElement.innerHTML = displayMikuImg;
    } else{
        mikuPara.innerHTML = 'Click that button if you love Hastune Miku';
        divElement.innerHTML = '';
    }
    
}


function hideText(){
    let hidePara = document.querySelector('.js-paraDisappear-element');

    hidePara.innerHTML = '';
}



let textHover = document.querySelector('.js-hover-element');

function hoverText(){   
    let changeHover = document.querySelector('.js-changeOnHover-element');
    changeHover.innerHTML = 'UTENA IS AMAZING!!!!!';
}

function unhover(){
    changeHover.innerHTML = 'I love Revolutionary Girl Utena';
}

textHover.addEventListener('mouseover', hoverText);
textHover.addEventListener('mouseleave', unhover);