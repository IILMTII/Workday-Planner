
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
            table_body +='<i class="fa fa-save" id="save'+i+'" style="font-size:36px;"></i>';
            table_body +='</td>';

            table_body+='</tr>';

        }
        $('tbody').append(table_body);
});

$('#time').text(time);

// $("#comment").keyup(function() {
//     console.log( this.value);
// });

// $("#comment0").keyup(function() {
//     console.log( this.value);
// });

let storeComment = [];

for(var i=0;i<9;i++){
    $('body').on('keyup','#comment'+i+'', function(){
        console.log(this.value);
    });
}

for(var i=0;i<9;i++){
    $('body').on('click','#save'+i+'', function(){
        storeComment[i] = $('comment'+i+'').value;
    });
}

listEl.addEventListener("click", function(event) {
    event.preventDefault();
    if(event.target.matches("button")) {
      var item = document.createElement("div");
      var parentID = event.target.parentElement.id
      item.textContent = groceries[parentID];
      shoppingCartEl.append(item);
    }
  });

// $('body').on('keyup','#comment1', function(){
//     console.log(this.value);
// });

// name.addEventListener('keyup', () => {console.log(name.value)});