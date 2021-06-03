function checkImage(imageSrc, good, bad) {
    var img = new Image(300, 300);
    img.onload = (img) => console.log(img); 
    img.onerror = bad;
    img.src = imageSrc;
}
checkImage("https://source.unsplash.com/random/100x100")

 document.getElementById("no-redirect").addEventListener("click", function() {
     console.log("dawi")
    testRedirect("https://source.unsplash.com/random/100x100");
  });
  
  document.getElementById("redirect").addEventListener("click", function() {
    testRedirect("https://httpbin.org/redirect/1");
  });
  
  
function getImageInfo(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        var img = document.getElementById("imgTag")
        var response = xhr.responseText;
        var binary = ""
        
        for(i=0;i<response.length;i++){
            binary += String.fromCharCode(response.charCodeAt(i) & 0xff);
        }
        
        img.src = 'data:image/jpeg;base64,' + btoa(binary);
    }

    xhr.overrideMimeType('text/plain; charset=x-user-defined');
    xhr.open("GET", "https://source.unsplash.com/random/100x100", true);
    xhr.send();
}