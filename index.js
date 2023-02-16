var LoginBtn = document.getElementById("login-btn");
var main_page = document.getElementById("main-page");
  main_page.style.display="none";

LoginBtn.addEventListener('click',function(){
    var Login_box = document.getElementById("login-box");
    var acc_no = document.getElementById("acc_no").value;
    var pass = document.getElementById("pass").value;
   

     if(acc_no==''){
         alert('account number is required');
     }
     else if(pass==''){
        alert('password is required');
     }
     else{
        Login_box.style.display="none";
        main_page.style.display="block";
     }
});

// add deposit  starts here 

var Add_depositBTN = document.getElementById("Add_depositBTN");
Add_depositBTN.addEventListener('click',function(){

    var deposit_input = document.getElementById("deposit_input").value;
    var depositNewInput = parseFloat(deposit_input);

    var total_deposit = document.getElementById("total-deposit").innerHTML;
    var Total_NewDeposit = parseFloat(total_deposit);

    var Total_Deposit = depositNewInput+Total_NewDeposit;

    document.getElementById("total-deposit").innerHTML=Total_Deposit.toFixed(2);

    // change balance 
    var total_balance = document.getElementById("total-balance").innerHTML;
    var NewTotal_balance = parseFloat(total_balance);

    var Total_New_Balance = depositNewInput + NewTotal_balance;

    document.getElementById("total-balance").innerHTML=Total_New_Balance.toFixed(2);

});

// add deposit ends here


// withdraw section starts here 
  var withdrawBtn = document.getElementById("withdraw");
  withdrawBtn.addEventListener('click',function(){
    


      if(document.getElementById("total-balance").innerHTML<=1000){
        alert("insufficient balance");
      }
      else{
        var withdraw_input = document.getElementById("withdraw_input").value;
        var Newwithdraw_input= parseFloat(withdraw_input);
  
        var withdraw_total= document.getElementById("withdraw_total").innerHTML;
        var Newwithdraw_total= parseFloat(withdraw_total);
  
        var Total_withdraw = Newwithdraw_total+Newwithdraw_input;
  
        document.getElementById("withdraw_total").innerHTML=Total_withdraw.toFixed(2);  
        
  
        // multiplication section 
  
         var TotalBalance = document.getElementById("total-balance").innerHTML;
         var NewBalance = parseFloat(TotalBalance);
        var multiplication = NewBalance - Newwithdraw_input ;
        document.getElementById("total-balance").innerHTML=multiplication.toFixed(2);
      }
    });

//withdraw section ends here