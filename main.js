// Tabs UI
const $ = document.querySelector.bind(document); 
const $$ = document.querySelectorAll.bind(document); 

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

tabs.forEach((tabs, index) => {
    
  const pane = panes[index];

  tabs.onclick = function(){

      $('.tab-item.active').classList.remove('active');
      $('.tab-pane.active').classList.remove('active');
    
      this.classList.add('active')
      
      pane.classList.add('active')
      
  }
})

// Scroll to top

//Get the button
mybutton = document.querySelector('.back');

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
