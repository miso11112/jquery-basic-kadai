$('div').on({
    'click': () => {
      
      $('#target').css('color', 'red');
    
    },

});

$(function() {  
$('p').text('Hello!');
});

$(function () {
    // id属性がfadeOutの要素がクリックされたら
    $('#fade-out').on('click', function() {
      // フェードアウトする
      $('p').fadeOut();
    });
  });

  $('#fade-in').on('click', function() {
    // フェードインする
    $('p').fadeIn();
  });