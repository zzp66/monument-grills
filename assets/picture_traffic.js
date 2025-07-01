

$(function() {
  $('.img-list').on('click','li',function(e){
    e.stopPropagation(); 

    var index = $(this).index();
    var url = $(this).find('label').find('a').attr('href');
    $(this).children('input').attr("checked");
    $(this).siblings().children('input').removeAttr('checked');

    window.open('https://monumentgrills.com' + url);
  });
});

