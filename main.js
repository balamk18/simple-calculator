 
 
 let outputscreen = document.getElementById("finaloutput");

        function display(num){
            outputscreen.value += num;

        }

        function calculate(){
            try{
                outputscreen.value = eval(outputscreen.value)
            }
            catch(err)
            {
                alert("Invalid Process")
            }
        }

        function clearscreen(){

            outputscreen.value = "";

        }

        function Delete(){
            outputscreen.value = outputscreen.value.slice(0,-1)
        }
