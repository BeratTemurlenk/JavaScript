let lijst = []

function getIndexOfElementByName(lijst, naam){




    return -1;

}





function handlelogin(){
    console.log(Date())
    
    let naam = document.getElementById('inputnaam').value; 
    if (naam.length <= 0){
        alert('voer een naam in!')
        return
    } 
    
    console.log('U hebt op de button geklikt')
        
        
    
    let positie = getIndexOfElementByName(lijst, naam);
        if (positie > -1){
            lijst.splice(lijst.indexOf(naam), 1)
            console.log('u zit niet meer in de lijst!')
            document.getElementById('melding'). innerText = 'u bent uitgelogd '+ naam;
        } 
        else{
            lijst.push({'naam' : naam, tijd: Date()});
            console.log('U bent ingelogd:' + naam);
            document.getElementById('melding'). innerText = 'u bent ingelogd';
    }
    document.getElementById('inputnaam').value = '';
    console.log(lijst)


}
document.getElementById('inlogButton').onclick = handlelogin;

