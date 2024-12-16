$(document).ready(function() {
    // クリックイベントに関連付け
    $('#change-color').on('click', function() {
        $('p').css('color', 'red'); // ボタンを押したときに色を変える
    });

    $('#change-text').on('ckick',function(){
        $('#target').text('Hello!')
    });
    

    $('#fade-out').on('click', function() {
        $('p').fadeOut();
    });

    $('#fade-in').on('click', function() {
        $('p').fadeIn();
    });
});