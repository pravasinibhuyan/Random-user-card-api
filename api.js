






$.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      console.log(data.results);
      let api=[];
       api=data.results;
    //   api=data.results;
      console.log(api[0].name.title);
      card(api);
    }
  });
  function card(api){
    let card=``;
    for(let r of api)
    {
      card += `<div class="flex-container"><div><img src="${r.picture.large}" alt="John" style="width:60%; height:50%; padding:10px;border-radius: 50%;">
        <h1 style="font-size: 20px; padding:0;margin:0;">${r.name.first} ${r.name.last}<br><span>${r.gender}</span></h1>
        </div></div>`;
    }
    document.getElementById("card").innerHTML =card;
  }
  