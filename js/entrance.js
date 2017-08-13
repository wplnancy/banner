var ISlider = {
    clickFoot: function() {

        var timer = null;
        //切换动画的函数
        function toggle(nowIndex) {
            console.log("toggle", nowIndex);
            $('.slideshow-image').css('zIndex', 0);

            $('.slideshow-image').css('animationName', 'none');
            $('.slideshow-image').eq(nowIndex).css('zIndex', 1).stop();
            $('.slideshow-image').eq(nowIndex).css('animationName', 'ban-animation').stop();
            $('.slideshow-image').eq(nowIndex).css('webkitAnimationName', 'ban-animation').stop();
        }

        var nowIndex = 0;
        var $commmonSwitch = $('.commmonSwitch').index();

        $('.commmonSwitch').on('click', function() {
            window.clearInterval(timer);
            nowIndex = $(this).index();
            autoPlay(nowIndex);
            timer = window.setInterval(autoPlay,10000);
        })

        function autoPlay() {
            if (nowIndex == 4) {
                nowIndex = 0
            }
            toggle(nowIndex);
            nowIndex = nowIndex + 1;
        }

        autoPlay();

        timer = window.setInterval(autoPlay,10000);
        //自动轮播的效果
    }

}
ISlider.clickFoot();
