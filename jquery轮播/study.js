/* Created by Administrator on 2016/3/3 0003*/
$(function(){
    var stuImgNum = $('.study_banner .bd li').size();
    var ImgN = 0;

    /*�����л�*/
    function stuSlide(){
        $(".study_banner .hd ul li").eq(ImgN).addClass("on").siblings().removeClass("on");
        $(".study_banner .bd ul li").eq(ImgN).fadeIn(200).siblings().fadeOut(200);
    }

    /*βҳ��ҳ�л�*/
    function stuN(){
        ImgN ++;
        if(ImgN>stuImgNum-1){ImgN=0}
    }
    function stuP(){
        ImgN --;
        if(ImgN<0){ImgN=stuImgNum-1};
    }
    /*��һҳ*/
    $('.next').click(function(){
        stuN();
        stuSlide();
    });
    /*��һҳ*/
    $('.prev').click(function(){
        stuP();
        stuSlide();
    });
    /*Բ���л�*/
    $(".study_banner .hd li").on('click', function() {
        ImgN = $(this).index();
        stuSlide();
    });
    /* �Զ��л� */
    var clock=setInterval(page,5000);
    function page(){
        stuN();
        stuSlide();
    }
    $(".study_banner").hover(function(){
            clearInterval(clock);
        },
        function(){
            clock=setInterval(page,5000);
        }
    );

});