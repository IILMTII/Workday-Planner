var table_body;
$(document).ready(function(){
    for(var i=0;i<9;i++){
            table_body+='<tr class="d-flex">';
        
            table_body +='<td class="col-sm-1">';
            table_body +='Table data';
            table_body +='</td>';
        
            table_body +='<td class="col-sm-10">';
            table_body +='<textarea class="form-control" rows="2" id="comment"></textarea>';
            table_body +='</td>';
        
            table_body +='<td class="col-sm-1">';
            table_body +='<i class="fa fa-save" style="font-size:36px;"></i>';
            table_body +='</td>';

            table_body+='</tr>';
        }
        $('tbody').append(table_body);
});