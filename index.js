

    //-- heart btn --//

    let count = 0;
    const heartcounter = document.getElementById("heartCounter");

    const hearts = document.getElementsByClassName("heart-btn");

    for (let index = 0; index < hearts.length; index++) {
        hearts[index].addEventListener("click",function(){
            count++;
            heartcounter.textContent = count
        });
        
    }


    

    // -- challenges copy count--//
    let copyCount = 2;
    const copyCounter = document.getElementById("copyCount");

    const copyButtons = document.getElementsByClassName("copy-btn");

    for (let index = 0; index < copyButtons.length; index++) {
        copyButtons[index].addEventListener("click", function() {
            copyCount++;
            copyCounter.textContent = copyCount;

            alert("Content copied");
        });
        
    }



    



//main assignment///


 //history catch//

let totalCoins = parseInt(document.getElementById("totalCoins").innerText);
const callHistory = document.getElementById("callHistory");
const clearHistoryBtn = document.getElementById("clearHistory");



//call button functionality//

document.querySelectorAll(".call-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const serviceName = document.querySelectorAll(".service-name")[index].innerText;
        const serviceNumber = document.querySelectorAll(".service-number")[index].innerText;

        if (totalCoins >= 20) {
            totalCoins -= 20;
            document.getElementById("totalCoins").innerText = totalCoins;



            //-- alert dekhabe--//


            alert (`Calling ${serviceName} at ${serviceNumber}`);


            //-- call time -- //
            const callTime = new Date().toLocaleTimeString();


          //--call history te add kora--//
            const historyItem = document.createElement("div");
            historyItem.innerText = `Service: ${serviceName}, Number: ${serviceNumber} , Time: ${callTime}`;
            callHistory.appendChild(historyItem);




        } else {
            alert("Not enough coins!");
        }
    });
});

  //--clear history button--//


clearHistoryBtn.addEventListener("click" , () => {
    callHistory.innerHTML = "" ;
})






//copy challenges///

document.querySelectorAll(".service-number").forEach((num) => {
    num.addEventListener("click", () => {
        const numberToCopy = num.innerText;

        navigator.clipboard.writeText(numberToCopy)
            .then(() => {
                alert(`Number ${numberToCopy} copied to clipboard`);
            })
            .catch(() => {
                alert("Failed to copy number");
            });
    });
});





