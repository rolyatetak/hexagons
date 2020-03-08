console.log('hi')

$('.show-filters').on('click', function() {
  if ($('.filters-list').is(':visible')) {
    $('.filters-list').slideUp(300)
    $('.show-filters').text('Show Filters')
  } else {
    $('.filters-list').slideDown(300)
    $('.show-filters').text('Hide Filters')
  }
  return false
})

$('.filters-list a').on('click', function() {
  var filter = $(this).attr('data-filter')

  $('.product').hide()
  $(filter).show()
  
  $('.filters-list a').removeClass('active')
  $(this).addClass('active')
  
  return false
})