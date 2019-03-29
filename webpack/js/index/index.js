$(function(){
  $('.flipster').flipster({
    itemContainer: 'ul', // Container for the flippin' items.
    itemSelector:  'li',
    style:'coverflow',
    start:'center',
    enableKeyboard:false,
  });
})