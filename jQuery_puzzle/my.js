
$(function(){



       $('.block').draggable({   //.class // #id
            grid: [152, 152], //z krokom po 152 pikselja perehid
            containment: [0,0,1100,300] // obmezhyje ryh po koordynatah
         });

        $('.block1').droppable({
            grid: [152, 152],
            drop: function (event, ui) {
                $(".info").html("dropped!");

                $('.block').each(function(ind, elem){
                    $(elem).mouseover(function () {


                        $('body').css({
                            backgroundColor: 'yellow'
                        })

                    })
                })

            }
        });



    console.log(block1);

/*    $('.block').each(function(ind, elem) {
        $('elem').draggable({
            grid: [152, 152] //z krokom po 200 pikseliv perehid
        });
    })*/



    /*    if(true){
            alert('congratulation!!!');
        }*/





            // containment: '#parent' // obmezhyje ryh po perenty
            // containment: [0,0,200,200] // obmezhyje ryh po koordynatah
            // axis: 'x' // po osi X
            /*revert: true, // povertae do pochatkovoi to4ku
            revertDuration: 500, // za chas 0,5 sec*/
            // handle: '#move', // za jaky 4astuny mozhna tjagnytu
            /*start: function () {
                $('body').css({
                    backgroundColor: 'yellow'
                })
            },
            stop: function () {
                $('body').css({
                    backgroundColor: 'white'
                })
            },*/




   // $('#date').datepicker(); // kalendar

//--------- ------------- ------------ -----------

/*    $(window).keydown(function (elem) {
        console.log(elem.keyCode);

        if(elem.keyCode === 38){
            let goUp = $('.ball').offset().top;
            console.log(goUp);
            $('.ball').animate({
                top: goUp - 10
            }, 50)
        }


        if(elem.keyCode === 39){
            let goRight = $('.ball').offset().left;
            console.log(goRight);
            $('.ball').animate({
                left: goRight + 10
            }, 50)
        }

        if(elem.keyCode === 37){
            let goLeft = $('.ball').offset().left;
            console.log(goLeft);
            $('.ball').animate({
                left: goLeft - 10
            }, 50)
        }

        if(elem.keyCode === 40){
            let goBottom = $('.ball').offset().top;
            console.log(goBottom);
            $('.ball').animate({
                top: goBottom + 10
            }, 50)
        }

    })*/


/*    let r, g, b;
    $('li').each(function(ind, elem){
    $(elem).mouseover(function () {
        r = Math.round(Math.random()*255);
        g = Math.round(Math.random()*255);
        b = Math.round(Math.random()*255);
        $('body').css({
            background: "rgb("+r+", "+g+", "+b+")"
        })
        $('li').eq(ind).animate({
            width: '500'
        }, 500, 'easeOutCirc');
    })

        $(elem).mouseout(function () {
            $('li').eq(ind).animate({
                width: '150'
            }, 500, 'easeOutCirc');
        })

    })
    */

//--------- ------------- ------------ -----------
/*    let lst;
    $('li').each(function(ind, elem){
        $(elem).mouseover(function(){
            lst = $(this).text();
            $('li').css({  
            listStyle: lst
             });


        })
    })*/
    


/*    $('.btn1').click(function(){
        $('#kv1').show();
    })
    $('.btn2').click(function(){
        $('#kv1').hide();
    })*/
/*
        $('.btn1').click(function(){
        $('#kv1').toggle(); // kolu click na knopky pojavljaetsja DIV
    })  */                    //minjae parametr DISPLAY: NONE
/*
        $('.btn2').click(function(){
        $('#kv2').slideDown(); //.slideUp();
    })*/
/*        $('.btn2').click(function(){
        $('#kv2').slideToggle(200);
    })

        $('.btn3').click(function(){
        $('#kv3').fadeToggle();
    })

        $('.btn4').click(function(){
        $('#kv4').show().animate({
            width: '200px',
            height: '250px'
        }, 300).animate({
            width: '100px',
            height: '150px'
        }, 300);
    })*/
/*
    $('#box').html('<h1>some New text</h1>');
   // $('#box').text('<h1>some New text</h1>');
    $('.text').css('color', 'red'); // vsim tegam z klasom .text datu kolir RED
    $('#box').append('<p>append_add</p>'); // add in the end
    $('#box').prepend('<p>prepend_add</p>'); // add in the start
    $('#box').before('<p>before element</p>'); //add before
    //$('.text').before('<p>before element</p>'); // pered vsima elementamu .text dodast'
    $('#box').after('<p>after</p>'); //add after
    $('<p>insertBefore</p>').insertBefore('#box'); //analog Before
    $('<p>insertAfter</p>').insertAfter('#box');//analog After
    //-------------- --------------- --------------

   // $('p').wrap('<div></div>'); //obgartae vsi elementu 'p' v teg 'div'
    //$('p.text').wrap('<div></div>'); //obgartae vsi elementu 'p' z klasom 'text' v teg 'div'

   // $('p').wrapInner('<div></div>'); //obgartae vse shcho e v kozhnomy elementi 'p' v teg 'div'
   // $('p').replaceWith('<div>111</div>'); //zaminjye vsi tegu 'p' na tegu 'div'

    $('input[type="button"]').click(function () {
        let text1 = $('input[type="text"]').val(); //val() te same shcho .value
        console.log(text1);
    });
*/

/*    $('li:first').css({
        color: 'green'
    });*/

/*    $('li:odd').css({  // neparni elementu. pochstok z 0
        color: 'green'
    });

    $('li:even').css({  // parni elementu. pochstok z 0
        color: 'yellow'
    });*/

/*    $('li:gt(2)').css({  // vsi elementu pislja 2go. pochstok z 0
        color: 'yellow'
    });*/
/*
    $('li:lt(2)').css({  // vsi elementu do 2gogo. pochstok z 0
        color: 'yellow'
    });

    $('li:eq(2)').css({  // element, rivnuj znachenjy.
        color: 'red'
    });*/

/*    $('div:has(p)').css({
        border: '1px solid black' //obgortae ramkojy teg DIV, v jakomy e teg P
    });

    $('li:contains("item4")').css({ // stulizuemo tagu, v jakuh zystri4aetsja 'item4'
        color: 'blue'
    });*/

/*    $('p.text:eq(1)').attr('id', 'extra'); // do tegy P z DRUGYM clasom 'text' dodatu ID 'extra'
    $('p.text:eq(1)').removeAttr('id'); // do tegy P z DRUGYM clasom 'text' dodatu ID 'extra'

    $('#box').addClass('cl1 cl2'); // add class
    $('#box').removeClass('cl2'); // remove class


    let check = $('#box').hasClass('cl1'); // if HAS class == true
        if(check){
        console.log ('yes');
    }*/
    //-------------- --------------- --------------




})