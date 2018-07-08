var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'Image/image1.jpg') {
      myImage.setAttribute ('src','Image/image2.jpg');
    } else {
      myImage.setAttribute ('src','Image/image3.jpg');
    }
}	