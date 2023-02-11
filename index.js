window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px";
    document.getElementById("logo").style.fontSize = "";
  

  } else {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "";
 
    
  }
};
function changeImage()
{
  var img = document.getElementById('image')
  img.src = 'imgs/airpods.jpeg'
 
  
}
function changeImage1()
{
  var img = document.getElementById('image')
  img.src = 'imgs/iwatch7.jpeg'
 
  
}
function changeImage2()
{
  var img = document.getElementById('image')
  img.src = 'imgs/iphone14.jpg'
 
  
}
function changeImage3()
{
  var img = document.getElementById('image')
  img.src = 'imgs/iphone14.jpg'
 
  
}
function changecolor1(){
  var img = document.getElementById('image')
  img.src = 'imgs/iphone14.jpg'
}
function changecolor2(){
  var img = document.getElementById('image')
  img.src = 'imgs/camcar.jpg'
}
function changecolor3(){
  var img = document.getElementById('image')
  img.src = 'imgs/canon.jpg'
}
;
const decrementButton = document.querySelector('.decrement-button');
    const incrementButton = document.querySelector('.increment-button');
    const quantityInput = document.querySelector('.quantity-input');

    decrementButton.addEventListener('click', () => {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });

    incrementButton.addEventListener('click', () => {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue < 3) {
        quantityInput.value = currentValue + 1;
      }
    });
    const priceTag = document.getElementById("price");

function changePrice(newPrice) {
  priceTag.innerHTML = "" + newPrice;
}
const textInput = document.getElementById("text-input");
const copyButton = document.getElementById("copy-button");

copyButton.addEventListener("click", () => {
  textInput.select();
  document.execCommand("copy");
});


