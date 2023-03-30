function send(){
 number1=document.getElementById("number1").Value;
 number2=document.getElementById("number2").Value;
 actual_answer=parseInt(number1) * parseInt(number2);
question_number="<h4>" + number1+"X"+ number2+"</h4>";
input_box="<br>Answer :<input type='text' id='input_check_bpox'>";
check-button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=question_number+input_box+check_button;
document.getElementById("outpput").innerHTML=row;
document.getElementById("number1").value="";
document.getElementById("number").value="";
}