$(function () {
    // 애니메이션 초기값
    $(".bg > p").css("opacity", 0);

    $(".tit").delay(500).animate(
        {
            opacity: 1,
        },
        500,
        "swing"
    );
    // .next('.mid-2').delay(800).animate({
    //   opacity: 1,
    // }, 500, 'swing')
    // .next('.mid-3').delay(1300).animate({
    //   opacity: 1,
    // }, 500, 'swing')
    // .next('.mid-4').delay(1700).animate({
    //   opacity: 1,
    // },500, 'swing')
});
