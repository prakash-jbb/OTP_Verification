const inputs =document.querySelectorAll("input"),
button = document.querySelector("button");
console.log(button);

// focus the first input which index is 0 on window load
window.addEventListener("load",()=>inputs[0].focus())

// Iterate over all input
inputs.forEach((input,index1)=>{
    input.addEventListener("keyup",(e)=>{

        const currentInput = input,
        nextInput = input.nextElementSibling,
        prevInput = input.previousElementSibling;
        
        if(currentInput.value.length > 1){
            currentInput.value = "";
            return;
        }

        // Enable the next input and focus on it
        if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== ""){
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }

        // if backspace key is pressed
        if(e.key==="Backspace"){
            inputs.forEach((input,index2)=>{
                if(index1 <= index2 && prevInput){
                    input.setAttribute("disabled",true);
                    currentInput.value == "";
                    prevInput.focus();
                }
            });
        }

        if(!input[3].disabled && input[3].value !== ""){
            console.log(3);
            button.classList.add("active");
            return;
        }


    });
   
});