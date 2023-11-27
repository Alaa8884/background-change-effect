let imageBox = document.querySelector('.image-box');
let imageWrap = document.querySelector('.image-wrap');
let origin = document.getElementById('origin')

origin.style.width = imageBox.offsetWidth + "px"
let leftSpace = imageBox.offsetLeft

imageBox.onmousemove = function (e) {
  var boxWidth = (e.pageX + leftSpace) + "px"
  imageWrap.style.width = boxWidth
}
