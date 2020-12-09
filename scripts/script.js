
var options = 
[
{"name":"rock", "type":"<span id='type'>rock</span>", "SA":"<span class='bg-primary'>scissors</span>"
,"WA":"<span class='bg-warning'>paper</span>"},

{"name":"paper", "type":"<span id='type'>paper</span>",
 "SA":"<span class='bg-primary'>rock</span>",
"WA":"<span class='bg-warning'>scissors</span>"},

{"name":"scissors", "type":"<span id='type'>scissors</span>", "SA":"<span class='bg-primary'>paper</span>",
"WA":"<span class='bg-warning'>rock</span>"}];

$(document).ready(function(){
  $("button").click(function(){
	var currentId = $(this).attr('id');
$("#append").html("");
for (i = 0 ; i < options.length; i++)
{ if(currentId == options[i].name)
  {
   $("#append").append(options[i].type + " is strong against " + options[i].SA + " is weak against " + options[i].WA ); 
  }

 }	
  });
});



