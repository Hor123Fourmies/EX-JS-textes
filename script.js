document.getElementById('divDeux').innerText= "Lorem ipsum dolor sit amet, " +
    "consectetur adipisicing elit. Adipisci architecto asperiores, consequuntur corporis " +
    "cupiditate debitis deserunt dicta distinctio dolore exercitationem iure molestiae molestias porro " +
    "quasi quidem tenetur, unde, vitae voluptatum?";


var contenu = document.getElementById('divDeux').innerHTML;
document.getElementById('divTrois').innerHTML = contenu;

document.getElementById('divTrois').style.fontSize = 35 + 'px';
document.getElementById('divTrois').style.color = 'purple';