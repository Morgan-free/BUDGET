document.getElementById("run").onclick = function () {
    let salary = document.getElementById("salary").value;

    let expense = document.getElementById("renti").value;
      
    salary = salary - expense;
    document.getElementById("rentbill").innerText = "rentbill" + "" + expense;
    document.getElementById("rent").innerText = "salary remaining after renti" + salary;
    // console.log("salary remaining afte rent", salary);

    document.getElementById("electricity").value;
    salary = salary - expense;
    document.getElementById("electricitybill").innerText = "electricitybill" + "" + expense;
    document.getElementById("electricitii").innerText = "salary remaining after electricity" + "" + salary;
    
     document.getElementById("fee").value;
     salary = salary - expense;
     document.getElementById("feesamount").innerText = "electricitybill" + "" + expense;
     document.getElementById("fees").innerText = "salary remaining after electricity" + "" + salary;
    
     document.getElementById("save").value;
     salary = salary - expense;
     document.getElementById("savingamount").innerText = "electricitybill" + "" + expense;
     document.getElementById("savings").innerText = "salary remaining after electricity" + "" + salary;
    
    
};