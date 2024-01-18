$(document).ready(function() {
  const magnifierContainer = $('.magnifier-container');
  const magnifierGlass = $('.magnifier-glass');
  const imageToMagnify = $('#imageToMagnify');

  magnifierContainer.mousemove(function(e) {
    const offsetX = e.pageX - magnifierContainer.offset().left;
    const offsetY = e.pageY - magnifierContainer.offset().top;

    const magnifierX = offsetX - magnifierGlass.width() / 2;
    const magnifierY = offsetY - magnifierGlass.height() / 2;

    magnifierGlass.css({ left: magnifierX, top: magnifierY });

    const percentageX = (offsetX / magnifierContainer.width()) * 100;
    const percentageY = (offsetY / magnifierContainer.height()) * 100;

    imageToMagnify.css({
      'transform-origin': `${percentageX}% ${percentageY}%`,
      transform: 'scale(2)' // Adjust the scale factor as needed
    });

    magnifierGlass.show();
  });

  magnifierContainer.mouseleave(function() {
    magnifierGlass.hide();
    imageToMagnify.css({
      'transform-origin': 'center center',
      transform: 'scale(1)'
    });
  });
});
