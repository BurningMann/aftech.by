window.onload = function(){
  /* перевод картинки svg в код */
/*   $('.svg_arrow').each(function(){
      var $img = $(this);
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');
      $.get(imgURL, function(data) {
        var $svg = $(data).find('svg');
        if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        $img.replaceWith($svg);
      }, 'xml');
    }); */
  /* end перевод картинки svg в код */
  $(".accordion_box .element > .title").click(function(){
    $(this).toggleClass("open")
    $(this).closest(".element").find(".content").slideToggle()
  })
}