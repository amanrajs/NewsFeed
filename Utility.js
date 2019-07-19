
function clicked(){
  return clickevent => {
    console.log(clickevent.srcElement.id);
    if(/^\d+$/.test(clickevent.srcElement.id)){
      console.log(document.getElementById(clickevent.srcElement.id));
      console.log((document.getElementById(clickevent.srcElement.id)).data);
      popup.style.display = 'flex';
      let content=(document.getElementById(clickevent.srcElement.id)).data;
      console.log(content);
      popup.textContent = content ;
      fullcontainer.style.opacity = '0.3';
    } else{
      popup.style.display = 'none';
      fullcontainer.style.opacity = '1';
    }
  }
}
function EmailSave(){
  var regexEmail = /\S+@\S+\.\S+/;
  let Emailid= document.getElementById('email').value;
  if(regexEmail.test(Emailid)){
  localStorage.setItem(Emailid, JSON.stringify(Emailid));
  alert("Subscribed successfully");
}
else{
  alert("Invalid Emailid");
}
}
