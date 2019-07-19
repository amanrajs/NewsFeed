function changeContent(val){
    let data=popup.data;
  container.innerHTML = '';
    let size=data.articles.length;
  for(i in data.articles){
    if(data.articles[i].source.name==val){
      const card = document.createElement('div');
      card.setAttribute('class', 'box');
      const image = document.createElement('img');
      image.setAttribute('class','image');
      image.src=data.articles[i].urlToImage;
      const right_side = document.createElement('div');
      right_side.setAttribute('class','vertical');
      const title = document.createElement('h4')
      title.textContent = data.articles[i].title;
      const metadisc = document.createElement('h6');
      metadisc.setAttribute('class','metadisc');
      metadisc.setAttribute('id','meta');
      metadisc.textContent = data.articles[i].publishedAt;
      const description = document.createElement('p');
      description.setAttribute('class','description')
      description.textContent = data.articles[i].description;
      const btn = document.createElement('button');
      let content = data.articles[i].content;
      if(content)
      btn.data=content;
      else
      btn.data=data.articles[i].description;
      btn.setAttribute('id',i);
      btn.innerHTML="Continue Reading";
      btn.setAttribute('class','btncontinue');
      var horizontalline = document.createElement("HR");
      right_side.appendChild(title);
      right_side.appendChild(metadisc);
      right_side.appendChild(description);
      right_side.appendChild(btn);
      card.appendChild(image)
      card.appendChild(right_side)
      container.appendChild(card);
      if(i==Number(size-1)){
        console.log(i);
        card.style.paddingBottom='40px';
      }
      container.appendChild(horizontalline);
    }
  }
}
function fullContent(data){
  container.innerHTML = '';
  let size=data.articles.length;
  for(i in data.articles ){
      const card = document.createElement('div');
      card.setAttribute('class', 'box');
      const image = document.createElement('img');
      image.setAttribute('class','image');
      image.src=data.articles[i].urlToImage;
      const right_side = document.createElement('div');
      right_side.setAttribute('class','vertical');
      const title = document.createElement('h4')
      title.textContent = data.articles[i].title;
      const metadisc = document.createElement('h6');
      metadisc.setAttribute('class','metadisc');
      metadisc.setAttribute('id','meta');
      metadisc.textContent = data.articles[i].publishedAt;
      const description = document.createElement('p');
      description.setAttribute('class','description')
      description.textContent = data.articles[i].description;
      var btn = document.createElement('button');
      btn.setAttribute('id',i);
      btn.innerHTML="Continue Reading";
      let content = data.articles[i].content;
      if(content){
      btn.data=content;
      }
      else{
      btn.data=data.articles[i].description;
      }
      btn.setAttribute('class','btncontinue');
      var horizontalline = document.createElement("HR");
      right_side.appendChild(title);
      right_side.appendChild(metadisc);
      right_side.appendChild(description);
      right_side.appendChild(btn);
      card.appendChild(image)
      card.appendChild(right_side)
      container.appendChild(card);
      if(i==Number(size-1)){
        console.log(i);
        card.style.paddingBottom='40px';
      }
      container.appendChild(horizontalline);
    }
}
