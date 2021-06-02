function checkImage(imageSrc, good, bad) {
    var img = new Image(300, 300);
    img.onload = (img) => good(img); 
    img.onerror = bad;
    img.src = imageSrc;
}

checkImage("https://source.unsplash.com/random/100x100", function(img){ 
    console.log("img", img)
    document.body.appendChild(img)
 }, function(){ alert("bad"); } );