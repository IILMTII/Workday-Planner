
const time = moment().format('dddd, MMMM Do YYYY');

var table_body;


$(document).ready(function(){
    for(var i=0;i<9;i++){
        
            table_body+='<tr class="d-flex">';
        
            table_body +='<td class="col-sm-1">';
            if (i<3){
                table_body +=i+9+' AM';
            }else if (i===3){
                table_body +='12 PM';
            }else{
                table_body +=i-3+' PM';
            }
            
            table_body +='</td>';
        
            table_body +='<td class="col-sm-10">';
            table_body +='<textarea class="form-control" rows="2" id="comment'+i+'"></textarea>';
            table_body +='</td>';
        
            table_body +='<td class="col-sm-1">';
            table_body +='<button class="fa fa-save" id="save'+i+'" style="font-size:36px;"></button>';
            table_body +='</td>';

            table_body+='</tr>';

        }
        $('tbody').append(table_body);

        for(var i=0;i<9;i++){
            $('body').on('keyup','#comment'+i+'', function(){
                console.log(this.value); //feedback test 
            });
        }

        // Solves storage issue but poor time complexity.
        for(var i=0;i<9;i++){
            $('body').on('click','#save'+i+'', function(){
                for(var i=0;i<9;i++){
                localStorage.setItem("time"+i, $('#comment'+i+'').val());
                }
            });
        }

        for(var i=0;i<9;i++){   
            $('#comment'+i+'').val(localStorage.getItem("time"+i));
        }
});

$('#time').text(time);

