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
        let arrOfProductsObjs=[];

        let allProducts=text.value;
        let productsArr=allProducts.split("\n\n");  //for print
        for(let i=0;i<productsArr.length;i++){
            let productProperties= productsArr[i].split("\n");
            let newProductObj={};
            for(let j=0;j<productProperties.length;j++){
                 newProductObj[productProperties[j].split(":")[0]]=productProperties[j].split(":")[1];
            }
            arrOfProductsObjs.push(newProductObj);
         }
        console.log(productsArr);
        console.log(arrOfProductsObjs);
          //error code button
           if(errorCodeButton.checked){
               resultDiv.innerText="";
               descriptionButton.checked=false;

              //unique array
              let uniqArr=[];
              for(let i=0;i<arrOfProductsObjs.length;i++){
                if( !uniqArr.includes(arrOfProductsObjs[i]["Error code"]) ){
                    uniqArr.push(arrOfProductsObjs[i]["Error code"]);  
                           //creat div  and append it and copy button
                           let newSpan=document.createElement('span');
                           if(! (typeof arrOfProductsObjs[i]["Error code"]=="undefined")){
                           newSpan.innerText=arrOfProductsObjs[i]["Error code"];
                           }else{
                            newSpan.innerText="No Error code products";
                           }

                           let newButton=document.createElement("input");
                           newButton.type="button";
                           newButton.value="copy";
                           

                           let newDiv=document.createElement('div');
                           newDiv.classList.add("divStyle");

                           let para=document.createElement("div");
                           para.innerText=arrOfProductsObjs[i]["Key"];

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
                    for(let j=i+1;j<arrOfProductsObjs.length;j++){
                         
                      if(arrOfProductsObjs[i]["Error code"]==arrOfProductsObjs[j]["Error code"]){
                          let newPara=document.createElement("div");
                          newPara.innerText=arrOfProductsObjs[j]["Key"];
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

           //unique array
           let uniqArr=[];
           for(let i=0;i<arrOfProductsObjs.length;i++){
             if( !uniqArr.includes(arrOfProductsObjs[i]["Description"]) ){
                 uniqArr.push(arrOfProductsObjs[i]["Description"]);  
                        //creat div and copy button  and append it 
                        let newSpan=document.createElement('span');

                        if(!(typeof arrOfProductsObjs[i]["Description"] == "undefined")){
                              newSpan.innerText=arrOfProductsObjs[i]["Description"];
                        }else{
                              newSpan.innerText="No Description products";
                        }

                        let newButton=document.createElement("input");
                        newButton.type="button";
                        newButton.value="copy";
                        

                        let newDiv=document.createElement('div');
                        newDiv.classList.add("divStyle");

                        let para=document.createElement("div");
                        let paraText="";
                        for(let x in arrOfProductsObjs[i]){
                            paraText+=x+":"+arrOfProductsObjs[i][x]+"\n";
                        }
                        //paraText+="\n";
                        para.innerText=paraText;

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
                 for(let j=i+1;j<arrOfProductsObjs.length;j++){
                      
                   if(arrOfProductsObjs[i]["Description"]==arrOfProductsObjs[j]["Description"]){
                       let newPara=document.createElement("div");
                        paraText="";
                       for(let x in arrOfProductsObjs[j]){
                        paraText+=x+":"+arrOfProductsObjs[j][x]+"\n";
                        }
                       
                       newPara.innerText=paraText;
                       newDiv.append(newPara);
                   }
                 }   
             }
               
           }

           }
       }

});//end of load

