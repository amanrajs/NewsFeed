function setRightContent(){
  const right_container = document.createElement('div');
  right_container.setAttribute('class', 'right-container');
  const title1 = document.createElement('h4');
  title1.textContent = "Select Category"
  var select = document.createElement("select");
  select.setAttribute('id','ddlnewschannel');
  select.options.add( new Option("Select a NEWS Channel",null) );
  select.options.add( new Option("The Times of India","The Times of India") );
  select.options.add( new Option("Hindustantimes","Hindustantimes.com") );
  select.options.add( new Option("News18","News18.com") );
  select.options.add( new Option("Firstpost","Firstpost.com") );
  select.options.add( new Option("Ndtv","Ndtv.com") );
  select.options.add( new Option("Livemint","Livemint.com") );
  select.options.add( new Option("The Hindu","The Hindu") );
  select.options.add( new Option("Thewire","Thewire.in") );
  right_container.appendChild(title1);
  right_container.appendChild(select);
  fullcontainer.appendChild(right_container);
  select.options[0].disabled = true;
  select.onchange = () => {
    let val=select.value;
    changeContent(val);
  }
}
function setLeftContent(){
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'apiKey=ac1fd7a9fc1342abb913e554a9525d85&'+'pageSize=30';
            fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    popup.data=data;
    fullContent(data);
  })
  .catch(function(error) {
    console.log(error);
  });
       fullcontainer.appendChild(container);
  }
function init(){
    popup.setAttribute('class','popup');
    const app = document.querySelector('main');
    app.appendChild(popup);
    fullcontainer.setAttribute('class', 'fullcont');
    container.setAttribute('class', 'left-container');
    const  appbody= document.createElement('div');
    appbody.setAttribute('class','main-container');
    const headerbox=document.createElement('div');
    headerbox.setAttribute('class','headerbox')
    const toptag=document.createElement('h2');
    toptag.textContent="NEWSFEED";
    const toptagitalic=document.createElement('i');
    toptagitalic.textContent="yet Another Newsfeed";
    const checkemail=document.createElement('div');
    checkemail.setAttribute('class','check');
    var email = document.createElement("input");
    email.setAttribute('id','email');
    email.type = "text";
    const subscribebtn = document.createElement('button');
    subscribebtn.innerHTML="Subscribe";
    subscribebtn.setAttribute('id','btn-email');
    subscribebtn.addEventListener("click", EmailSave);
    checkemail.appendChild(email);
    checkemail.appendChild(subscribebtn);
    headerbox.appendChild(toptag);
    headerbox.appendChild(toptagitalic);
    headerbox.appendChild(checkemail);
    const header = document.querySelector('header');
    header.appendChild(headerbox);
    const footertag=document.createElement('p');
    footertag.setAttribute('id','footertag');
    var str = "\u00A9 NewsFeed 2019";
    footertag.textContent=str;
    const foot = document.querySelector('footer');
    foot.appendChild(footertag);
    app.prepend(appbody);
    appbody.append(fullcontainer);
    setLeftContent();
    setRightContent();
    document.addEventListener("click", clicked(this));
}
