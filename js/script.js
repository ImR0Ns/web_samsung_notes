$(document).ready(()=>{
    /* alert() */
    var count_cols = 0
    $('.savechanges').click(()=>{
        var title = $('#title').val(),
            desc =  $('#description').val()

        var whatToAppend = `<div class="col-md-3 editTone m-4" data-toggle="modal" data-target="#em"><p class="note_title">${title}</p><p class="note_desc">${desc}</p></div><div class="col-md-2"></div>`

        //append to row div
        $( ".row" ).append(whatToAppend);


        //note click functions
        $('.editTone').click(function() {
            var obj_att = $(this)
            var get_title = $(this).find('p')[0].textContent
            var get_desc = $(this).find('p')[1].textContent
            

            $('.modal-titlett').text(get_title);
            $('.desctt').text(get_desc)

            /* console.log($('.for_check_s').find('.col-md-2')) */

            $('.delete_butt').click(function(){
                $(obj_att).remove()
                var get = $('.for_check_s').find('.col-md-2');
                $(get).remove()
            });

            $('.edit_butt').click(function(){
                //change inputs text
                $('#new_title').text(get_title)
                $('#neW_desc').text(get_desc)

                $('.change_makes').click(function(){
                    var new_val_titlte = $('#new_title').val()
                    var new_val_desc = $('#neW_desc').val()

                    obj_att.find('p')[0].textContent = new_val_titlte //new text to title and description
                    obj_att.find('p')[1].textContent = new_val_desc
                    
                })

            })

        });

    })
    
})


