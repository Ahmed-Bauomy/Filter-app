window.addEventListener('load',function(){
    let errorCodeButton=document.querySelectorAll('input')[0];
    let descriptionButton=document.querySelectorAll('input')[1];
    //result div
    let resultDiv=document.querySelector("#result");
    let text=document.querySelector('textarea');
   
    //filter button
    let filterButton=document.querySelector("input[type='button']");
    //error code button
      filterButton.onclick=function(){
        let arrOfErrorCode=[];
        let arrOfdescription=[];
          //error code button
           if(errorCodeButton.checked){
               resultDiv.innerText="";
               descriptionButton.checked=false;

              let allProducts=text.value;
              let productsArr=allProducts.split("\n\n");  //for print
              let everyProductDetails=allProducts.split("\n"); //for search
             // console.log(productsArr[0]);
             // console.log(everyProductDetails);
              for(let i=3;i<everyProductDetails.length;i+=6){
                 arrOfErrorCode.push( everyProductDetails[i].split(':')[1]);
              }
              //console.log("array of error code length"+arrOfErrorCode.length);
              //console.log("porducts Arr length"+productsArr.length);
              //unique array
              let uniqArr=[];
              for(let i=0;i<arrOfErrorCode.length;i++){
                if( !uniqArr.includes(arrOfErrorCode[i]) ){
                    uniqArr.push(arrOfErrorCode[i]);  
                           //creat div  and append it and copy button
                           let newSpan=document.createElement('span');
                           newSpan.innerText=arrOfErrorCode[i];

                           let newButton=document.createElement("input");
                           newButton.type="button";
                           newButton.value="copy";
                           

                           let newDiv=document.createElement('div');
                           newDiv.classList.add("divStyle");

                           let para=document.createElement("div");
                           para.innerText=productsArr[i].split("\n")[0].slice(4);

                           let containerDiv=document.createElement('div');

                           newDiv.append(para);
                           containerDiv.append(newSpan,newButton,newDiv);
                           
                           resultDiv.append(containerDiv);
                           newButton.classList.add("btn","btn-info","mb-3","ml-3");
                           newButton.onclick=function(){
                            const el = document.createElement('textarea');
                            el.value = newDiv.innerText;
                            document.body.appendChild(el);
                            el.select();
                            document.execCommand('copy');
                            document.body.removeChild(el);
                           }
                    for(let j=i+1;j<arrOfErrorCode.length;j++){
                         
                      if(arrOfErrorCode[i]==arrOfErrorCode[j]){
                          let newPara=document.createElement("div");
                          newPara.innerText=productsArr[j].split("\n")[0].slice(4);
                          newDiv.append(newPara);
                      }
                    }   
                }
                  
              }
           }
           //description button
           if(descriptionButton.checked){
            resultDiv.innerText="";
            errorCodeButton.checked=false;
            
            let allProducts=text.value;
            let productsArr=allProducts.split("\n\n");  //for print
            let everyProductDetails=allProducts.split("\n"); //for search
           // console.log(productsArr[0]);
           // console.log(everyProductDetails);
            for(let i=1;i<everyProductDetails.length;i+=6){
               arrOfdescription.push( everyProductDetails[i].split(':')[1]);
            }
            //console.log("array of error code length"+arrOfErrorCode.length);
            //console.log("porducts Arr length"+arrOfErrorCode.length);
            //unique array
            let uniqArr=[];
            for(let i=0;i<arrOfdescription.length;i++){
              if( !uniqArr.includes(arrOfdescription[i]) ){
                  uniqArr.push(arrOfdescription[i]);  
                         //creat div  and append it and copy button
                         let newSpan=document.createElement('span');
                         newSpan.innerText=arrOfdescription[i];

                         let newButton=document.createElement("input");
                         newButton.type="button";
                         newButton.value="copy";
                         

                         let newDiv=document.createElement('div');
                         newDiv.classList.add("divStyle");

                         let para=document.createElement("p");
                         para.innerText=productsArr[i];

                         let containerDiv=document.createElement('div');

                         newDiv.append(para);
                         containerDiv.append(newSpan,newButton,newDiv);
                         
                         resultDiv.append(containerDiv);
                         newButton.classList.add("btn","btn-info","mb-3","ml-3");
                         newButton.onclick=function(){
                          const el = document.createElement('textarea');
                          el.value = newDiv.innerText;
                          document.body.appendChild(el);
                          el.select();
                          document.execCommand('copy');
                          document.body.removeChild(el);
                         }
                  for(let j=i+1;j<arrOfdescription.length;j++){
                       
                    if(arrOfdescription[i]==arrOfdescription[j]){
                        let newPara=document.createElement("p");
                        newPara.innerText=productsArr[j];
                        newDiv.append(newPara);
                    }
                  }   
              }
                
            }

           }
       }

});//end of load

