tabControl();


var resizeTimer;
$(window).on('resize', function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    tabControl();
  }, 250);
});


function tabControl() {
  var tabs = $('.tabbed-content').find('.tabs');
  if(tabs.is(':visible')) {
    tabs.find('a').on('click', function(event) {
      event.preventDefault();
      var target = $(this).attr('href'),
          tabs = $(this).parents('.tabs'),
          buttons = tabs.find('a'),
          item = tabs.parents('.tabbed-content').find('.item');
      buttons.removeClass('active');
      item.removeClass('active');
      $(this).addClass('active');
      $(target).addClass('active');
    });
  } else {
    $('.item').on('click', function() {
      var container = $(this).parents('.tabbed-content'),
          currId = $(this).attr('id'),
          items = container.find('.item');
      container.find('.tabs a').removeClass('active');
      items.removeClass('active');
      $(this).addClass('active');
      container.find('.tabs a[href$="#'+ currId +'"]').addClass('active');
    });
  } 
}

var base_url = window.location.href;

function RemoveLastDirectoryPartOf(the_url)
{
    var the_arr = the_url.split('/');
    the_arr.pop();
    return( the_arr.join('/') );
}

var json_url = RemoveLastDirectoryPartOf(base_url) + "/data.json";


$.getJSON( json_url, function( data ) {
 var items = [];
  var contents = [];
  var counter = 1;
  
  $.each( data, function( key, val ) {
    let actclass = (counter <= 1) ? 'active' : '';
    items.push( "<li><a href='#tab" + counter +"' class='" + actclass +"'>" +  val.title + "</a></li>");
    contents.push( '<section id="tab' + counter + '" class="item ' + actclass +'" data-title="Tab '+ counter +'"><div class="item-content"><p>' + val.content +'</p></div></section>');
    counter ++;
  });

$('ul').append(items);
$('.tabbed-content').append(contents);
  
});