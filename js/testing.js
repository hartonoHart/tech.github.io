
$('document').ready(function() {
    var x = "x"
    var o = "o"
    var count = 0;
    var o_win = 0;
    var x_win = 0;
    
    function reset() {
        $("#game li").text("+");
        $("#game li").removeClass('disable')
        $("#game li").removeClass('o')
        $("#game li").removeClass('x')
        $("#game li").removeClass('btn-primary')
        $("#game li").removeClass('btn-info')
    }
    
    function tictactoe(params) {
        var Owin1 = $("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o');
        var Owin2 = $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o');
        var Owin3 = $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o');
        var Owin4 = $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o');
        var Owin5 = $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o');
        var Owin6 = $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o');
        var Owin7 = $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o');
        var Owin8 = $("#seven").hasClass('o') && $("#five").hasClass('o') && $("#three").hasClass('o');
        
        var Xwin1 = $("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x');
        var Xwin2 = $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x');
        var Xwin3 = $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x');
        var Xwin4 = $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x');
        var Xwin5 = $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x');
        var Xwin6 = $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x');
        var Xwin7 = $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x');
        var Xwin8 = $("#seven").hasClass('x') && $("#five").hasClass('x') && $("#three").hasClass('x');

        if(count === 9) {
            alert('Its a tie. It will restart.')
            reset();
            count = 0
        } else if($(params).hasClass('disable')) {
            alert('Already selected');
        } else if(count%2 == 0) {
            count++
            $(params).text(o)
            $(params).addClass('disable o btn-primary')
            var checkingOisWinner = Owin1 || Owin2 || Owin3 || Owin4 || Owin5 || Owin6 || Owin7 || Owin8; 
            if(checkingOisWinner) {
                alert('O has won the game. Start a new game')
                count = 0
                o_win++
                $('#o_win').text(o_win)
                reset();
            }
        } else {
            count++
            $(params).text(x)
            $(params).addClass('disable x btn-info')
            var checkingXisWinner = Xwin1 || Xwin2 || Xwin3 || Xwin4 || Xwin5 || Xwin6 || Xwin7 || Xwin8;
            if(checkingXisWinner) {
                alert('X wins has won the game. Start a new game')
                count = 0
                x_win++
                $('#x_win').text(x_win)
                reset();
            }
        }
    }

    $('#game li').click(function() {
        tictactoe(this);
    })

    $("#reset").click(function () {
        reset();
        count = 0
    });
})