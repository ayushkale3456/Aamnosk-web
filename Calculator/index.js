var display= document.querySelector('#display');
            var btn=document.querySelectorAll('#btn');

            for(item of btn)
            {
                item.addEventListener('click',(e)=>{
                buttonval=e.target.innerText;
                if(buttonval=='='){
                    buttonval="";
                }
                if(buttonval=='x'){
                    buttonval="*";
                }
                if(buttonval=='π'){
                    buttonval="3.142";
                }
                if(buttonval=='e'){
                    buttonval="2.71828";
                }
                if(buttonval=='CE'){
                    buttonval="";
                    display.value=display.value.substr(0,display.value.length-1);
                }


                display.value +=buttonval;

            });
        
            }
            function ac(){
                display.value="";
            }
            function cos(){
                display.value=Math.cos(display.value);
            }
            function log(){
                display.value=Math.log(display.value);
            }
            function square(){
                display.value=(parseInt(display.value)*parseInt(display.value));
            }
            function squareroot(){
                display.value=Math.sqrt(display.value);
            }
            function sin(){
                display.value=Math.sin(display.value);
            }
            function tan(){
                display.value=Math.tan(display.value);
            }
            function fac(){
                num=parseInt(display.value);
                var i=1;
                var fact=1;
                for(i=1;i<=num;i++){
                    fact=fact*i;
                }
                display.value=fact;
            }