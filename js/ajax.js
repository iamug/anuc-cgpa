
$(document).ready(function () {
    $('.tbody input[type=text]').css("text-align", "center");    
  // $('.tbody input[type=text] ').css("width","96%");
    $('thead th').css("text-align", "center");
    $('thead th:nth-child(1)').css("display", "none");
    $('.tbody td:nth-child(1)').css("display", "none");
    $("input[type=text]").addClass("form-control");
    $(".table textarea").addClass("form-control");
    for (var i=0; i<123; i++){
        $('#grade_value'+i).hide();
    } 
 /*  for (var i=0; i<123; i++){
    $('#points'+i).css("width","96%");
    }
   for (var i=0; i<123; i++){
    $('#credit'+i).css("width","96%");
    }   
    for (var i=0; i<123; i++){
    $('#'+i).css("width","96%");
    } */
  //  hide_course();
} );  

 function hide_course(){
     $('.tbody td:nth-child(1)').css("display","none");
//     $('.tbody td:nth-child(3)').css("display","none");
 $('thead th:nth-child(1)').css("display","none");
// $('thead th:nth-child(3)').css("display","none");
}

function show_course(){
     $('.tbody td:nth-child(1)').css("display","block");
 $('thead th:nth-child(1)').show();
}
    
$('#about').click(function(){
    $('#menuToggle').find('img').toggle();
$('#about_app').fadeIn(0500);
//$('#about_app').show(0500);
$("body").css("overflow","hidden");
} );   

$('#open_bmi').click(function(){
$('#menuToggle').find('img').toggle();
$('#bmi').slideDown(0500);
$('.top').hide();
$("body").css("overflow","hidden");
} );  
 
$('#backToggle').click(function(){
$('.top').show();
$('#bmi').slideUp(0500);
$("body").css("overflow","auto");
$('#cgpa_comment').click();
$('#cgpa').click();
});

$('#open_help').click(function(){
$('#menuToggle').find('img').toggle();
//$('#help').show();
$('#help').slideDown(0700);
  //  $('#wrapper:not(#help)').hide();
 //   $('#help').scrollTop();
  //  $('#help').appendTo('body');
//$('html, body').animate({scrollTop: 0 },"slow");
  //  $('#help').animate({"display":"block"},"slow");
  //  $('#help').show();
$("body").css("overflow","hidden");
} );    

$('#reset1').click(function(){
$('#form1').trigger("reset");
document.getElementById('gpa_1').innerHTML = "";   
document.getElementById('gpa_1_1').innerHTML = "";   
final();
});

$('#reset2').click(function(){
$('#form2').trigger("reset");
document.getElementById('gpa_2').innerHTML = "";   
document.getElementById('gpa_2_2').innerHTML = "";   
final();
});
$('#reset3').click(function(){
$('#form3').trigger("reset");
document.getElementById('gpa_3').innerHTML = "";   
document.getElementById('gpa_3_3').innerHTML = "";   
final();
});
$('#reset4').click(function(){
$('#form4').trigger("reset");
document.getElementById('gpa_4').innerHTML = "";   
document.getElementById('gpa_4_4').innerHTML = "";   
final();
});
$('#reset5').click(function(){
$('#form5').trigger("reset");
document.getElementById('gpa_5').innerHTML = "";   
document.getElementById('gpa_5_5').innerHTML = "";   
final();
});
$('#reset6').click(function(){
$('#form6').trigger("reset");
document.getElementById('gpa_6').innerHTML = "";   
document.getElementById('gpa_6_6').innerHTML = "";   
final();
});
$('#reset7').click(function(){
$('#form7').trigger("reset");
document.getElementById('gpa_7').innerHTML = "";   
document.getElementById('gpa_7_7').innerHTML = "";   
final();
});
$('#reset8').click(function(){
$('#form8').trigger("reset");
document.getElementById('gpa_8').innerHTML = "";   
document.getElementById('gpa_8_8').innerHTML = "";   
final();
});
$('#reset9').click(function(){
$('#form9').trigger("reset");
document.getElementById('gpa_9').innerHTML = "";   
document.getElementById('gpa_9_9').innerHTML = "";   
final();
});
$('#reset10').click(function(){
$('#form10').trigger("reset");
document.getElementById('gpa_10').innerHTML = "";   
document.getElementById('gpa_10_10').innerHTML = "";   
final();
});
$('#reset11').click(function(){
$('#form11').trigger("reset");
document.getElementById('gpa_11').innerHTML = "";   
document.getElementById('gpa_11_11').innerHTML = "";   
final();
});
$('#reset12').click(function(){
$('#form12').trigger("reset");
document.getElementById('gpa_12').innerHTML = "";   
document.getElementById('gpa_12_12').innerHTML = "";   
final();
});
$('#hide_courses').click(function(){
    hide_course();
});
$('#show_courses').click(function(){
    show_course();
});
$('#height_feet').click(function(){
    calulateBmi();
});
$('#height_inches').click(function(){
   calulateBmi();
});


$('#button1').each(function(){
$('#button1').change(function(){
final(); });
});


$('#form').each(function(){
$('#form').change(function(){
final();});
});

$('#button3').click(function(){
$('#div9').show();
$('#div10').show();
$('#button4').show();
$('#button5').show();
$('#button3').hide();
});
$('#button4').click(function(){
$('#div9').hide();
$('#div10').hide();
$('#div11').hide();
$('#div12').hide();
$('#button3').show();
$('#button4').hide();
$('#button5').hide();
$('#reset9').click();
$('#reset10').click();
$('#reset11').click();
$('#reset12').click();
final();
});
$('#button5').click(function(){
$('#div11').show();
$('#div12').show();
$('#button3').hide();
$('#button5').hide();
$('#button4').show();
});

$('#cancel_about').click(function(){
$('#about_app').fadeOut(0500);
$("body").css("overflow","auto");
});
$('#cancel_help').click(function(){
     //   $('#wrapper:not(#help)').show(0100);
$('#help').slideUp(0600);
    $("body").css("overflow","auto");
});

$('#page').click(function(){
$('#page').slideToggle(0100);
});
$('#sem1').click(function(){
$('#table').slideToggle(0100);
});
$('#sem2').click(function(){
$('#table2').slideToggle(0100);
});
$('#sem3').click(function(){
$('#table3').slideToggle(0100);
});
$('#sem4').click(function(){
$('#table4').slideToggle(0100);
});
$('#sem5').click(function(){
$('#table5').slideToggle(0100);
});
$('#sem6').click(function(){
$('#table6').slideToggle(0100);
});
$('#sem7').click(function(){
$('#table7').slideToggle(0100);
});
$('#sem8').click(function(){
$('#table8').slideToggle(0100);
});
$('#sem9').click(function(){
$('#table9').slideToggle(0100);
});
$('#sem10').click(function(){
$('#table10').slideToggle(0100);
});
$('#sem11').click(function(){
$('#table11').slideToggle(0100);
});
$('#sem12').click(function(){
$('#table12').slideToggle(0100);
});

$('#menuToggle').click(function(){
$('#page').slideToggle();
$(this).find('img').toggle();
});
$('#main_body').click(function(){
if($('#page').is(":visible"))
{ $('#page').slideToggle();
$('#menuToggle').find('img').toggle();
}
else{} });

$('#toggle_courses').click(function(){
//$('#page').slideToggle();
//$(this).find('a').delay(3000).toggle();
$('#menuToggle').find('img').toggle();
 setTimeout("$('#toggle_courses').find('a').toggle();",1000);
});

function refresh()
{
setTimeout("location.reload(true);",0);
}

  
var gpa=0;  
var gpa2=0;  
var gpa3=0;  
var gpa4=0;  
var gpa5=0;  
var gpa6=0;  
var gpa7=0;  
var gpa8=0;  
var gpa9=0;  
var gpa10=0;  
var gpa11=0;  
var gpa12=0;  
  
function final()
{
var valid = 0;
var total = 0;
$('.gpa').each(function(){

if(!isNaN(this.value) && this.value.length !==0){
total +=parseFloat(this.value);
valid++;
  //  alert(total);
  //  alert(valid);
}
});
    

var cgpa = total / valid;
   // alert(cgpa);
document.getElementById('cgpa').innerHTML = parseFloat(cgpa).toFixed(4);
if(isNaN(document.getElementById('cgpa').innerHTML)){
 document.getElementById('cgpa').innerHTML = "CGPA"; 
}
var grade_value = parseFloat(document.getElementById('cgpa').innerHTML);
   // alert(grade_value);
if( (grade_value>=0) && (grade_value<=2) )
{document.getElementById('cgpa_comment').innerHTML="Fail";}
else if( (grade_value>=2) && (grade_value<2.4) )
{document.getElementById('cgpa_comment').innerHTML="Pass";}
else if( (grade_value>=2.4) && (grade_value<2.8) )
{document.getElementById('cgpa_comment').innerHTML="Third class";}
else if( (grade_value>=2.8) && (grade_value<3.2) )
{document.getElementById('cgpa_comment').innerHTML="Second class lower";}
else if( (grade_value>=3.2) && (grade_value<3.6) )
{document.getElementById('cgpa_comment').innerHTML="Second class upper";}
else if( (grade_value>=3.6) && (grade_value<=4.0) )
{document.getElementById('cgpa_comment').innerHTML="First Class";}
else
{document.getElementById('cgpa_comment').innerHTML="";}
}
  
function check(){
var grade_value = parseFloat(document.getElementById('gpa').value);
if( (grade_value>=0) && (grade_value<=2) )
{document.getElementById('gpa_comment').value="Fail";}
else if( (grade_value>=2) && (grade_value<2.4) )
{document.getElementById('gpa_comment').value="Pass";}
else if( (grade_value>=2.4) && (grade_value<2.8) )
{document.getElementById('gpa_comment').value="Third class";}
else if( (grade_value>=2.8) && (grade_value<3.2) )
{document.getElementById('gpa_comment').value="Second class lower";}
else if( (grade_value>=3.2) && (grade_value<3.6) )
{document.getElementById('gpa_comment').value="Second class upper";}
else if( (grade_value>=3.6) && (grade_value<=4.0) )
{document.getElementById('gpa_comment').value="First Class";}
else
{document.getElementById('gpa_comment').value=" not done ";}
final();
return 0;
}

function check2(){
var grade_value = parseFloat(document.getElementById('gpa2').value);
if( (grade_value>=0) && (grade_value<=2) )
{document.getElementById('gpa_comment2').value="Fail";}
else if( (grade_value>=2) && (grade_value<2.4) )
{document.getElementById('gpa_comment2').value="Pass";}
else if( (grade_value>=2.4) && (grade_value<2.8) )
{document.getElementById('gpa_comment2').value="Third class";}
else if( (grade_value>=2.8) && (grade_value<3.2) )
{document.getElementById('gpa_comment2').value="Second class lower";}
else if( (grade_value>=3.2) && (grade_value<3.6) )
{document.getElementById('gpa_comment2').value="Second class upper";}
else if( (grade_value>=3.6) && (grade_value<=4.0) )
{document.getElementById('gpa_comment2').value="First Class";}
else
{document.getElementById('gpa_comment2').value="";}
final();
return 0;
}
function check3(){
var grade_value = parseFloat(document.getElementById('gpa3').value);
if( (grade_value>=0) && (grade_value<=2) )
{document.getElementById('gpa_comment3').value="Fail";}
else if( (grade_value>=2) && (grade_value<2.4) )
{document.getElementById('gpa_comment3').value="Pass";}
else if( (grade_value>=2.4) && (grade_value<2.8) )
{document.getElementById('gpa_comment3').value="Third class";}
else if( (grade_value>=2.8) && (grade_value<3.2) )
{document.getElementById('gpa_comment3').value="Second class lower";}
else if( (grade_value>=3.2) && (grade_value<3.6) )
{document.getElementById('gpa_comment3').value="Second class upper";}
else if( (grade_value>=3.6) && (grade_value<=4.0) )
{document.getElementById('gpa_comment3').value="First Class";}
else
{document.getElementById('gpa_comment3').value="";}
final();
return 0;
}
function check4(){
var grade_value = parseFloat(document.getElementById('gpa4').value);
if( (grade_value>=0) && (grade_value<=2) )
{document.getElementById('gpa_comment4').value="Fail";}
else if( (grade_value>=2) && (grade_value<2.4) )
{document.getElementById('gpa_comment4').value="Pass";}
else if( (grade_value>=2.4) && (grade_value<2.8) )
{document.getElementById('gpa_comment4').value="Third class";}
else if( (grade_value>=2.8) && (grade_value<3.2) )
{document.getElementById('gpa_comment4').value="Second class lower";}
else if( (grade_value>=3.2) && (grade_value<3.6) )
{document.getElementById('gpa_comment4').value="Second class upper";}
else if( (grade_value>=3.6) && (grade_value<=4.0) )
{document.getElementById('gpa_comment4').value="First Class";}
else
{document.getElementById('gpa_comment4').value="";}
final();
return 0;
}
function check5(){
var grade_value = parseFloat(document.getElementById('gpa5').value);
if( (grade_value>=0) && (grade_value<=2) )
{document.getElementById('gpa_comment5').value="Fail";}
else if( (grade_value>=2) && (grade_value<2.4) )
{document.getElementById('gpa_comment5').value="Pass";}
else if( (grade_value>=2.4) && (grade_value<2.8) )
{document.getElementById('gpa_comment5').value="Third class";}
else if( (grade_value>=2.8) && (grade_value<3.2) )
{document.getElementById('gpa_comment5').value="Second class lower";}
else if( (grade_value>=3.2) && (grade_value<3.6) )
{document.getElementById('gpa_comment5').value="Second class upper";}
else if( (grade_value>=3.6) && (grade_value<=4.0) )
{document.getElementById('gpa_comment5').value="First Class";}
else
{document.getElementById('gpa_comment5').value="";}
final();
return 0;
}
function check6(){
var grade_value = parseFloat(document.getElementById('gpa6').value);
if( (grade_value>=0) && (grade_value<=2) )
{document.getElementById('gpa_comment6').value="Fail";}
else if( (grade_value>=2) && (grade_value<2.4) )
{document.getElementById('gpa_comment6').value="Pass";}
else if( (grade_value>=2.4) && (grade_value<2.8) )
{document.getElementById('gpa_comment6').value="Third class";}
else if( (grade_value>=2.8) && (grade_value<3.2) )
{document.getElementById('gpa_comment6').value="Second class lower";}
else if( (grade_value>=3.2) && (grade_value<3.6) )
{document.getElementById('gpa_comment6').value="Second class upper";}
else if( (grade_value>=3.6) && (grade_value<=4.0) )
{document.getElementById('gpa_comment6').value="First Class";}
else
{document.getElementById('gpa_comment6').value="";}
final();
return 0;
}
function check7(){
var grade_value = parseFloat(document.getElementById('gpa7').value);
if( (grade_value>=0) && (grade_value<=2) )
{document.getElementById('gpa_comment7').value="Fail";}
else if( (grade_value>=2) && (grade_value<2.4) )
{document.getElementById('gpa_comment7').value="Pass";}
else if( (grade_value>=2.4) && (grade_value<2.8) )
{document.getElementById('gpa_comment7').value="Third class";}
else if( (grade_value>=2.8) && (grade_value<3.2) )
{document.getElementById('gpa_comment7').value="Second class lower";}
else if( (grade_value>=3.2) && (grade_value<3.6) )
{document.getElementById('gpa_comment7').value="Second class upper";}
else if( (grade_value>=3.6) && (grade_value<=4.0) )
{document.getElementById('gpa_comment7').value="First Class";}
else
{document.getElementById('gpa_comment7').value="";}
final();
return 0;
}
function check8(){
var grade_value = parseFloat(document.getElementById('gpa8').value);
if( (grade_value>=0) && (grade_value<=2) )
{document.getElementById('gpa_comment8').value="Fail";}
else if( (grade_value>=2) && (grade_value<2.4) )
{document.getElementById('gpa_comment8').value="Pass";}
else if( (grade_value>=2.4) && (grade_value<2.8) )
{document.getElementById('gpa_comment8').value="Third class";}
else if( (grade_value>=2.8) && (grade_value<3.2) )
{document.getElementById('gpa_comment8').value="Second class lower";}
else if( (grade_value>=3.2) && (grade_value<3.6) )
{document.getElementById('gpa_comment8').value="Second class upper";}
else if( (grade_value>=3.6) && (grade_value<=4.0) )
{document.getElementById('gpa_comment8').value="First Class";}
else
{document.getElementById('gpa_comment8').value="";}
final();
return 0;
}
function check9(){
var grade_value = parseFloat(document.getElementById('gpa9').value);
if( (grade_value>=0) && (grade_value<=2) )
{document.getElementById('gpa_comment9').value="Fail";}
else if( (grade_value>=2) && (grade_value<2.4) )
{document.getElementById('gpa_comment9').value="Pass";}
else if( (grade_value>=2.4) && (grade_value<2.8) )
{document.getElementById('gpa_comment9').value="Third class";}
else if( (grade_value>=2.8) && (grade_value<3.2) )
{document.getElementById('gpa_comment9').value="Second class lower";}
else if( (grade_value>=3.2) && (grade_value<3.6) )
{document.getElementById('gpa_comment9').value="Second class upper";}
else if( (grade_value>=3.6) && (grade_value<=4.0) )
{document.getElementById('gpa_comment9').value="First Class";}
else
{document.getElementById('gpa_comment9').value="";}
final();
return 0;
}
function check10(){
var grade_value = parseFloat(document.getElementById('gpa10').value);
if( (grade_value>=0) && (grade_value<=2) )
{document.getElementById('gpa_comment10').value="Fail";}
else if( (grade_value>=2) && (grade_value<2.4) )
{document.getElementById('gpa_comment10').value="Pass";}
else if( (grade_value>=2.4) && (grade_value<2.8) )
{document.getElementById('gpa_comment10').value="Third class";}
else if( (grade_value>=2.8) && (grade_value<3.2) )
{document.getElementById('gpa_comment10').value="Second class lower";}
else if( (grade_value>=3.2) && (grade_value<3.6) )
{document.getElementById('gpa_comment10').value="Second class upper";}
else if( (grade_value>=3.6) && (grade_value<=4.0) )
{document.getElementById('gpa_comment10').value="First Class";}
else
{document.getElementById('gpa_comment10').value="";}
final();
return 0;
}
function check11(){
var grade_value = parseFloat(document.getElementById('gpa11').value);
if( (grade_value>=0) && (grade_value<=2) )
{document.getElementById('gpa_comment11').value="Fail";}
else if( (grade_value>=2) && (grade_value<2.4) )
{document.getElementById('gpa_comment11').value="Pass";}
else if( (grade_value>=2.4) && (grade_value<2.8) )
{document.getElementById('gpa_comment11').value="Third class";}
else if( (grade_value>=2.8) && (grade_value<3.2) )
{document.getElementById('gpa_comment11').value="Second class lower";}
else if( (grade_value>=3.2) && (grade_value<3.6) )
{document.getElementById('gpa_comment11').value="Second class upper";}
else if( (grade_value>=3.6) && (grade_value<=4.0) )
{document.getElementById('gpa_comment11').value="First Class";}
else
{document.getElementById('gpa_comment11').value="";}
final();
return 0;
}
function check12(){
var grade_value = parseFloat(document.getElementById('gpa12').value);
if( (grade_value>=0) && (grade_value<=2) )
{document.getElementById('gpa_comment12').value="Fail";}
else if( (grade_value>=2) && (grade_value<2.4) )
{document.getElementById('gpa_comment12').value="Pass";}
else if( (grade_value>=2.4) && (grade_value<2.8) )
{document.getElementById('gpa_comment12').value="Third class";}
else if( (grade_value>=2.8) && (grade_value<3.2) )
{document.getElementById('gpa_comment12').value="Second class lower";}
else if( (grade_value>=3.2) && (grade_value<3.6) )
{document.getElementById('gpa_comment12').value="Second class upper";}
else if( (grade_value>=3.6) && (grade_value<=4.0) )
{document.getElementById('gpa_comment12').value="First Class";}
else
{document.getElementById('gpa_comment12').value="";}
final();
return 0;
}


function calc()
{
var grade_value1 = parseFloat(document.getElementById('grade_value1').value);
var grade_value2 = parseFloat(document.getElementById('grade_value2').value);
var grade_value3 = parseFloat(document.getElementById('grade_value3').value);
var grade_value4 = parseFloat(document.getElementById('grade_value4').value);
var grade_value5 = parseFloat(document.getElementById('grade_value5').value);
var grade_value6 = parseFloat(document.getElementById('grade_value6').value);
var grade_value7 = parseFloat(document.getElementById('grade_value7').value);
var grade_value8 = parseFloat(document.getElementById('grade_value8').value);
var grade_value9 = parseFloat(document.getElementById('grade_value9').value);
var grade_value10 = parseFloat(document.getElementById('grade_value10').value);
var grade_value11 = parseFloat(document.getElementById('grade_value11').value);
var grade_value12 = parseFloat(document.getElementById('grade_value12').value);

var sum_grade_value = grade_value1 + grade_value2 + grade_value3 + grade_value4 + grade_value5 + grade_value6 + grade_value7 + grade_value8 + grade_value9 + grade_value10 + grade_value11 + grade_value12;

var total_sum=0;
for (var i=1; i<=12; i++){
var sum_value =  document.getElementById('credit'+i).value;
if(!isNaN(sum_value) && sum_value.length !==0){
total_sum +=parseInt(sum_value);
}
} 
        
document.getElementById('sum_credit').value = total_sum;
document.getElementById('sum_grade_value').value = sum_grade_value;

gpa = sum_grade_value / total_sum;
document.getElementById('gpa').value = gpa.toFixed(5);
document.getElementById('gpa_1').innerHTML = parseFloat(gpa).toFixed(3);
document.getElementById('gpa_1_1').innerHTML = parseFloat(gpa).toFixed(3);
 if(isNaN(document.getElementById('gpa').value)){
 document.getElementById('gpa').value = "";
document.getElementById('gpa_1').innerHTML = "";   
document.getElementById('gpa_1_1').innerHTML = "";   
} 
}

function calc2()
{
var grade_value13 = parseFloat(document.getElementById('grade_value13').value);
var grade_value14 = parseFloat(document.getElementById('grade_value14').value);
var grade_value15 = parseFloat(document.getElementById('grade_value15').value);
var grade_value16 = parseFloat(document.getElementById('grade_value16').value);
var grade_value17 = parseFloat(document.getElementById('grade_value17').value);
var grade_value18 = parseFloat(document.getElementById('grade_value18').value);
var grade_value19 = parseFloat(document.getElementById('grade_value19').value);
var grade_value20 = parseFloat(document.getElementById('grade_value20').value);
var grade_value21 = parseFloat(document.getElementById('grade_value21').value);
var grade_value22 = parseFloat(document.getElementById('grade_value22').value);

var sum_grade_value2 = grade_value13 + grade_value14 + grade_value15 + grade_value16 + grade_value17 + grade_value18 + grade_value19 + grade_value20 + grade_value21 + grade_value22;

var total_sum=0;
for (var i=13; i<=22; i++){
var sum_value =  document.getElementById('credit'+i).value;
if(!isNaN(sum_value) && sum_value.length !==0){
total_sum +=parseInt(sum_value);
}} 
document.getElementById('sum_credit2').value = total_sum;
document.getElementById('sum_grade_value2').value = sum_grade_value2;

var gpa2 = sum_grade_value2 / total_sum;
document.getElementById('gpa2').value = gpa2.toFixed(5);
document.getElementById('gpa_2').innerHTML = gpa2.toFixed(3);
document.getElementById('gpa_2_2').innerHTML = gpa2.toFixed(3);
if(isNaN(document.getElementById('gpa2').value)){
 document.getElementById('gpa2').value = "";
document.getElementById('gpa_2').innerHTML = "";   
document.getElementById('gpa_2_2').innerHTML = "";   
}
}

function calc3()
{
var grade_value23 = parseFloat(document.getElementById('grade_value23').value);
var grade_value24 = parseFloat(document.getElementById('grade_value24').value);
var grade_value25 = parseFloat(document.getElementById('grade_value25').value);
var grade_value26 = parseFloat(document.getElementById('grade_value26').value);
var grade_value27 = parseFloat(document.getElementById('grade_value27').value);
var grade_value28 = parseFloat(document.getElementById('grade_value28').value);
var grade_value29 = parseFloat(document.getElementById('grade_value29').value);
var grade_value30 = parseFloat(document.getElementById('grade_value30').value);
var grade_value31 = parseFloat(document.getElementById('grade_value31').value);
var grade_value32 = parseFloat(document.getElementById('grade_value32').value);

var sum_grade_value3 = grade_value23 + grade_value24 + grade_value25 + grade_value26 + grade_value27 + grade_value28 + grade_value29 + grade_value30 + grade_value31 + grade_value32;

var total_sum=0;
for (var i=23; i<=32; i++){
var sum_value =  document.getElementById('credit'+i).value;
if(!isNaN(sum_value) && sum_value.length !==0){
total_sum +=parseInt(sum_value);
}}
document.getElementById('sum_credit3').value = total_sum;
document.getElementById('sum_grade_value3').value = sum_grade_value3;

var gpa3 = sum_grade_value3 / total_sum;
document.getElementById('gpa3').value = gpa3.toFixed(5);
document.getElementById('gpa_3').innerHTML = gpa3.toFixed(3);
document.getElementById('gpa_3_3').innerHTML = gpa3.toFixed(3);
if(isNaN(document.getElementById('gpa3').value)){
 document.getElementById('gpa3').value = "";
document.getElementById('gpa_3').innerHTML = "";   
document.getElementById('gpa_3_3').innerHTML = "";   
}
}

function calc4()
{
var grade_value33 = parseFloat(document.getElementById('grade_value33').value);
var grade_value34 = parseFloat(document.getElementById('grade_value34').value);
var grade_value35 = parseFloat(document.getElementById('grade_value35').value);
var grade_value36 = parseFloat(document.getElementById('grade_value36').value);
var grade_value37 = parseFloat(document.getElementById('grade_value37').value);
var grade_value38 = parseFloat(document.getElementById('grade_value38').value);
var grade_value39 = parseFloat(document.getElementById('grade_value39').value);
var grade_value40 = parseFloat(document.getElementById('grade_value40').value);
var grade_value41 = parseFloat(document.getElementById('grade_value41').value);
var grade_value42 = parseFloat(document.getElementById('grade_value42').value);

var sum_grade_value4 = grade_value33 + grade_value34 + grade_value35 + grade_value36 + grade_value37 + grade_value38 + grade_value39 + grade_value40 + grade_value41 + grade_value42;
    var total_sum=0;
for (var i=33; i<=42; i++){
var sum_value =  document.getElementById('credit'+i).value;
if(!isNaN(sum_value) && sum_value.length !==0){
total_sum +=parseInt(sum_value);
}}
document.getElementById('sum_credit4').value = total_sum;
document.getElementById('sum_grade_value4').value = sum_grade_value4;
var gpa4 = sum_grade_value4 / total_sum;
document.getElementById('gpa4').value = gpa4.toFixed(5);
document.getElementById('gpa_4').innerHTML = gpa4.toFixed(3);
document.getElementById('gpa_4_4').innerHTML = gpa4.toFixed(3);
if(isNaN(document.getElementById('gpa4').value)){
 document.getElementById('gpa4').value = "";
document.getElementById('gpa_4').innerHTML = "";   
document.getElementById('gpa_4_4').innerHTML = "";   
}
}

function calc5()
{
var grade_value43 = parseFloat(document.getElementById('grade_value43').value);
var grade_value44 = parseFloat(document.getElementById('grade_value44').value);
var grade_value45 = parseFloat(document.getElementById('grade_value45').value);
var grade_value46 = parseFloat(document.getElementById('grade_value46').value);
var grade_value47 = parseFloat(document.getElementById('grade_value47').value);
var grade_value48 = parseFloat(document.getElementById('grade_value48').value);
var grade_value49 = parseFloat(document.getElementById('grade_value49').value);
var grade_value50 = parseFloat(document.getElementById('grade_value50').value);
var grade_value51 = parseFloat(document.getElementById('grade_value51').value);
var grade_value52 = parseFloat(document.getElementById('grade_value52').value);

var sum_grade_value5 = grade_value43 + grade_value44 + grade_value45 + grade_value46 + grade_value47 + grade_value48 + grade_value49 + grade_value50 + grade_value51 + grade_value52;
var total_sum=0;
for (var i=43; i<=52; i++){
var sum_value =  document.getElementById('credit'+i).value;
if(!isNaN(sum_value) && sum_value.length !==0){
total_sum +=parseInt(sum_value);
}}
document.getElementById('sum_credit5').value = total_sum;
document.getElementById('sum_grade_value5').value = sum_grade_value5;
var gpa5 = sum_grade_value5 / total_sum;
document.getElementById('gpa5').value = gpa5.toFixed(5);
document.getElementById('gpa_5').innerHTML = gpa5.toFixed(3);
document.getElementById('gpa_5_5').innerHTML = gpa5.toFixed(3);
if(isNaN(document.getElementById('gpa5').value)){
 document.getElementById('gpa5').value = "";
document.getElementById('gpa_5').innerHTML = "";   
document.getElementById('gpa_5_5').innerHTML = "";   
}
}

function calc6()
{
var grade_value53 = parseFloat(document.getElementById('grade_value53').value);
var grade_value54 = parseFloat(document.getElementById('grade_value54').value);
var grade_value55 = parseFloat(document.getElementById('grade_value55').value);
var grade_value56 = parseFloat(document.getElementById('grade_value56').value);
var grade_value57 = parseFloat(document.getElementById('grade_value57').value);
var grade_value58 = parseFloat(document.getElementById('grade_value58').value);
var grade_value59 = parseFloat(document.getElementById('grade_value59').value);
var grade_value60 = parseFloat(document.getElementById('grade_value60').value);
var grade_value62 = parseFloat(document.getElementById('grade_value62').value);
var grade_value61 = parseFloat(document.getElementById('grade_value61').value);

var sum_grade_value6 = grade_value53 + grade_value54 + grade_value55 + grade_value56 + grade_value57 + grade_value58 + grade_value59 + grade_value60 + grade_value61 + grade_value62;
var total_sum=0;
for (var i=53; i<=62; i++){
var sum_value =  document.getElementById('credit'+i).value;
if(!isNaN(sum_value) && sum_value.length !==0){
total_sum +=parseInt(sum_value);
}}
document.getElementById('sum_credit6').value = total_sum;
document.getElementById('sum_grade_value6').value = sum_grade_value6;
var gpa6 = sum_grade_value6 / total_sum;
document.getElementById('gpa6').value = gpa6.toFixed(5);
document.getElementById('gpa_6').innerHTML = gpa6.toFixed(3);
document.getElementById('gpa_6_6').innerHTML = gpa6.toFixed(3);
    if(isNaN(document.getElementById('gpa6').value)){
 document.getElementById('gpa6').value = "";
document.getElementById('gpa_6').innerHTML = "";   
document.getElementById('gpa_6_6').innerHTML = "";   
}
}

function calc7()
{
var grade_value63 = parseFloat(document.getElementById('grade_value63').value);
var grade_value64 = parseFloat(document.getElementById('grade_value64').value);
var grade_value65 = parseFloat(document.getElementById('grade_value65').value);
var grade_value66 = parseFloat(document.getElementById('grade_value66').value);
var grade_value67 = parseFloat(document.getElementById('grade_value67').value);
var grade_value68 = parseFloat(document.getElementById('grade_value68').value);
var grade_value69 = parseFloat(document.getElementById('grade_value69').value);
var grade_value70 = parseFloat(document.getElementById('grade_value70').value);
var grade_value71 = parseFloat(document.getElementById('grade_value71').value);
var grade_value72 = parseFloat(document.getElementById('grade_value72').value);

var sum_grade_value7 = grade_value63 + grade_value64 + grade_value65 + grade_value66 + grade_value67 + grade_value68 + grade_value69 + grade_value70 + grade_value71 + grade_value72;
var total_sum=0;
for (var i=63; i<=72; i++){
var sum_value =  document.getElementById('credit'+i).value;
if(!isNaN(sum_value) && sum_value.length !==0){
total_sum +=parseInt(sum_value);
}}
document.getElementById('sum_credit7').value = total_sum;
document.getElementById('sum_grade_value7').value = sum_grade_value7;
var gpa7 = sum_grade_value7 / total_sum;
document.getElementById('gpa7').value = gpa7.toFixed(5);
document.getElementById('gpa_7').innerHTML = gpa7.toFixed(3);
document.getElementById('gpa_7_7').innerHTML = gpa7.toFixed(3);
if(isNaN(document.getElementById('gpa7').value)){
 document.getElementById('gpa7').value = "";
document.getElementById('gpa_7').innerHTML = "";   
document.getElementById('gpa_7_7').innerHTML = "";   
}
}

function calc8()
{
var grade_value73 = parseFloat(document.getElementById('grade_value73').value);
var grade_value74 = parseFloat(document.getElementById('grade_value74').value);
var grade_value75 = parseFloat(document.getElementById('grade_value75').value);
var grade_value76 = parseFloat(document.getElementById('grade_value76').value);
var grade_value77 = parseFloat(document.getElementById('grade_value77').value);
var grade_value78 = parseFloat(document.getElementById('grade_value78').value);
var grade_value79 = parseFloat(document.getElementById('grade_value79').value);
var grade_value80 = parseFloat(document.getElementById('grade_value80').value);
var grade_value81 = parseFloat(document.getElementById('grade_value81').value);
var grade_value82 = parseFloat(document.getElementById('grade_value82').value);

var sum_grade_value8 = grade_value73 + grade_value74 + grade_value75 + grade_value76 + grade_value77 + grade_value78 + grade_value79 + grade_value80 + grade_value81 + grade_value82;
var total_sum=0;
for (var i=73; i<=82; i++){
var sum_value =  document.getElementById('credit'+i).value;
if(!isNaN(sum_value) && sum_value.length !==0){
total_sum +=parseInt(sum_value);
}}
document.getElementById('sum_credit8').value = total_sum;
document.getElementById('sum_grade_value8').value = sum_grade_value8;
var gpa8 = sum_grade_value8 / total_sum;
document.getElementById('gpa8').value = gpa8.toFixed(5);
document.getElementById('gpa_8').innerHTML = gpa8.toFixed(3);
document.getElementById('gpa_8_8').innerHTML = gpa8.toFixed(3);
if(isNaN(document.getElementById('gpa8').value)){
 document.getElementById('gpa8').value = "";
document.getElementById('gpa_8').innerHTML = "";   
document.getElementById('gpa_8_8').innerHTML = "";   
}
}

function calc9()
{
var grade_value83 = parseFloat(document.getElementById('grade_value83').value);
var grade_value84 = parseFloat(document.getElementById('grade_value84').value);
var grade_value85 = parseFloat(document.getElementById('grade_value85').value);
var grade_value86 = parseFloat(document.getElementById('grade_value86').value);
var grade_value87 = parseFloat(document.getElementById('grade_value87').value);
var grade_value88 = parseFloat(document.getElementById('grade_value88').value);
var grade_value89 = parseFloat(document.getElementById('grade_value89').value);
var grade_value90 = parseFloat(document.getElementById('grade_value90').value);
var grade_value91 = parseFloat(document.getElementById('grade_value91').value);
var grade_value92 = parseFloat(document.getElementById('grade_value92').value);

var sum_grade_value9 = grade_value83 + grade_value84 + grade_value85 + grade_value86 + grade_value87 + grade_value88 + grade_value89 + grade_value90 + grade_value91 + grade_value92;
var total_sum=0;
for (var i=83; i<=92; i++){
var sum_value =  document.getElementById('credit'+i).value;
if(!isNaN(sum_value) && sum_value.length !==0){
total_sum +=parseInt(sum_value);
}}
document.getElementById('sum_credit9').value = total_sum;
document.getElementById('sum_grade_value9').value = sum_grade_value9;
var gpa9 = sum_grade_value9 / total_sum;
document.getElementById('gpa9').value = gpa9.toFixed(5);
document.getElementById('gpa_9').innerHTML = gpa9.toFixed(3);
document.getElementById('gpa_9_9').innerHTML = gpa9.toFixed(3);
if(isNaN(document.getElementById('gpa9').value)){
 document.getElementById('gpa9').value = "";
document.getElementById('gpa_9').innerHTML = "";   
document.getElementById('gpa_9_9').innerHTML = "";   
}
}

function calc10()
{
var grade_value93 = parseFloat(document.getElementById('grade_value93').value);
var grade_value94 = parseFloat(document.getElementById('grade_value94').value);
var grade_value95 = parseFloat(document.getElementById('grade_value95').value);
var grade_value96 = parseFloat(document.getElementById('grade_value96').value);
var grade_value97 = parseFloat(document.getElementById('grade_value97').value);
var grade_value98 = parseFloat(document.getElementById('grade_value98').value);
var grade_value99 = parseFloat(document.getElementById('grade_value99').value);
var grade_value100 = parseFloat(document.getElementById('grade_value100').value);
var grade_value101 = parseFloat(document.getElementById('grade_value101').value);
var grade_value102 = parseFloat(document.getElementById('grade_value102').value);

var sum_grade_value10 = grade_value93 + grade_value94 + grade_value95 + grade_value96 + grade_value97 + grade_value98 + grade_value99 + grade_value100 + grade_value101 + grade_value102;
var total_sum=0;
for (var i=93; i<=102; i++){
var sum_value =  document.getElementById('credit'+i).value;
if(!isNaN(sum_value) && sum_value.length !==0){
total_sum +=parseInt(sum_value);
}}
document.getElementById('sum_credit10').value = total_sum;
document.getElementById('sum_grade_value10').value = sum_grade_value10;
var gpa10 = sum_grade_value10 / total_sum;
document.getElementById('gpa10').value = gpa10.toFixed(5);
document.getElementById('gpa_10').innerHTML = gpa10.toFixed(3);
document.getElementById('gpa_10_10').innerHTML = gpa10.toFixed(3);
if(isNaN(document.getElementById('gpa10').value)){
 document.getElementById('gpa10').value = "";
document.getElementById('gpa_10').innerHTML = "";   
document.getElementById('gpa_10_10').innerHTML = "";   
}
}

function calc11()
{
var grade_value103 = parseFloat(document.getElementById('grade_value103').value);
var grade_value104 = parseFloat(document.getElementById('grade_value104').value);
var grade_value105 = parseFloat(document.getElementById('grade_value105').value);
var grade_value106 = parseFloat(document.getElementById('grade_value106').value);
var grade_value107 = parseFloat(document.getElementById('grade_value107').value);
var grade_value108 = parseFloat(document.getElementById('grade_value108').value);
var grade_value109 = parseFloat(document.getElementById('grade_value109').value);
var grade_value110 = parseFloat(document.getElementById('grade_value110').value);
var grade_value111 = parseFloat(document.getElementById('grade_value111').value);
var grade_value112 = parseFloat(document.getElementById('grade_value112').value);

var sum_grade_value11 = grade_value103 + grade_value104 + grade_value105 + grade_value106 + grade_value107 + grade_value108 + grade_value109 + grade_value110 + grade_value111 + grade_value112;
var total_sum=0;
for (var i=103; i<=112; i++){
var sum_value =  document.getElementById('credit'+i).value;
if(!isNaN(sum_value) && sum_value.length !==0){
total_sum +=parseInt(sum_value);
}}
document.getElementById('sum_credit11').value = total_sum;
document.getElementById('sum_grade_value11').value = sum_grade_value11;
var gpa11 = sum_grade_value11 / total_sum;
document.getElementById('gpa11').value = gpa11.toFixed(5);
document.getElementById('gpa_11').innerHTML = gpa11.toFixed(3);
document.getElementById('gpa_11_11').innerHTML = gpa11.toFixed(3);
if(isNaN(document.getElementById('gpa11').value)){
 document.getElementById('gpa11').value = "";
document.getElementById('gpa_11').innerHTML = "";   
document.getElementById('gpa_11_11').innerHTML = "";   
}
}

function calc12()
{
var grade_value113 = parseFloat(document.getElementById('grade_value113').value);
var grade_value114 = parseFloat(document.getElementById('grade_value114').value);
var grade_value115 = parseFloat(document.getElementById('grade_value115').value);
var grade_value116 = parseFloat(document.getElementById('grade_value116').value);
var grade_value117 = parseFloat(document.getElementById('grade_value117').value);
var grade_value118 = parseFloat(document.getElementById('grade_value118').value);
var grade_value119 = parseFloat(document.getElementById('grade_value119').value);
var grade_value120 = parseFloat(document.getElementById('grade_value120').value);
var grade_value121 = parseFloat(document.getElementById('grade_value121').value);
var grade_value122 = parseFloat(document.getElementById('grade_value122').value);

var sum_grade_value12 = grade_value113 + grade_value114 + grade_value115 + grade_value116 + grade_value117 + grade_value118 + grade_value119 + grade_value120 + grade_value121 + grade_value122;
var total_sum=0;
for (var i=113; i<=122; i++){
var sum_value =  document.getElementById('credit'+i).value;
if(!isNaN(sum_value) && sum_value.length !==0){
total_sum +=parseInt(sum_value);
}}
document.getElementById('sum_credit12').value = total_sum;
document.getElementById('sum_grade_value12').value = sum_grade_value12;
var gpa12 = sum_grade_value12 / total_sum;
document.getElementById('gpa12').value = gpa12.toFixed(5);
document.getElementById('gpa_12').innerHTML = gpa12.toFixed(3);
document.getElementById('gpa_12_12').innerHTML = gpa12.toFixed(3);
if(isNaN(document.getElementById('gpa12').value)){
 document.getElementById('gpa12').value = "";
document.getElementById('gpa_12').innerHTML = "";   
document.getElementById('gpa_12_12').innerHTML = "";   
}
}


function load_2()
{
load(13);
load(14);
load(15);
load(16);
load(17);
load(18);
load(19);
load(20);
load(21);
load(22);
}
function load_3()
{
load(23);
load(24);
load(25);
load(26);
load(27);
load(28);
load(29);
load(30);
load(31);
load(32);
}
function load_4()
{
load(33);
load(34);
load(35);
load(36);
load(37);
load(38);
load(39);
load(40);
load(41);
load(42);
}
function load_5()
{
load(43);
load(44);
load(45);
load(46);
load(47);
load(48);
load(49);
load(50);
load(51);
load(52);
}
function load_6()
{
load(53);
load(54);
load(55);
load(56);
load(57);
load(58);
load(59);
load(60);
load(61);
load(62);
}
function load_7()
{
load(63);
load(64);
load(65);
load(66);
load(67);
load(68);
load(69);
load(70);
load(71);
load(72);
}
function load_8()
{
load(73);
load(74);
load(75);
load(76);
load(77);
load(78);
load(79);
load(80);
load(81);
load(82);
}
function load_9()
{
load(83);
load(84);
load(85);
load(86);
load(87);
load(88);
load(89);
load(90);
load(91);
load(92);
}
function load_10()
{
load(93);
load(94);
load(95);
load(96);
load(97);
load(98);
load(99);
load(100);
load(101);
load(102);
}
function load_11()
{
load(103);
load(104);
load(105);
load(106);
load(107);
load(108);
load(109);
load(110);
load(111);
load(112);
}
function load_12()
{
load(113);
load(114);
load(115);
load(116);
load(117);
load(118);
load(119);
load(120);
load(121);
load(122);
}

function loadall(){
load(1);
load(2);
load(3);
load(4);
load(5);
load(6);
load(7);
load(8);
load(9);
load(10);
load(11);
load(12); 

}

function load(y){

var value = document.getElementById(y).value;

if(value=='A' || value=='a')
{
document.getElementById('points'+y).value=4;
}
else if(value=='A-' || value=='a-')
{
document.getElementById('points'+y).value=3.75;
}
else if(value=='B+' || value=='b+' )
{
document.getElementById('points'+y).value=3.5;
}
else if(value=='B' || value=='b')
{
document.getElementById('points'+y).value=3.25;
}
else if(value=='B-' || value=='b-')
{
document.getElementById('points'+y).value=3;
}
else if(value=='C+' || value=='c+')
{
document.getElementById('points'+y).value=2.75;
}
else if(value=='C' || value=='c')
{
document.getElementById('points'+y).value=2.5;
}
else if(value=='C-' || value=='c-')
{
document.getElementById('points'+y).value=2.25;
}
else if(value=='D+' || value=='d+')
{
document.getElementById('points'+y).value=2;
}
else if(value=='D' || value=='d')
{
document.getElementById('points'+y).value=1.75;
}
else if(value=='D-' || value=='d-')
{
document.getElementById('points'+y).value=1.5;
}
else if(value=='F' || value=='f')
{
document.getElementById('points'+y).value=1;
}
else if(value==='')
{
document.getElementById('points'+y).value="";
document.getElementById('grade_value'+y).value=0;
//document.getElementById('credit'+y).value=0;
}
else
{
document.getElementById('points'+y).value="";
document.getElementById('grade_value'+y).value=0;
//document.getElementById('credit'+y).value=0;
}  
    
var credit =0;
var grade = document.getElementById('grade_value'+y).value;
var point = document.getElementById('points'+y).value;
var textbox1 = document.getElementById('credit'+y);
credit= textbox1.value;
if(credit==="")
{
textbox1.value="";
point="";
document.getElementById('grade_value'+y).value=0;
}
else if(grade==="")
{
    document.getElementById('grade_value'+y).value=0;
}
var points = document.getElementById('points'+y).value;
var grade_value= credit * points;
document.getElementById('grade_value'+y).value = grade_value;

return 0;
}