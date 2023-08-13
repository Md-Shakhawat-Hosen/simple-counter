document.getElementById('first-increment').addEventListener('click',function(){
    const countField = document.getElementById('first-count');
    
   const totalCount = document.getElementById('total-count');
   let totalValue = parseInt(totalCount.innerText);
      

    let countValue = parseInt(countField.innerText);
     
     

     if ( parseInt(countField.innerText) < 33){
        countValue = countValue + 1;

        countField.innerText = countValue;

        totalValue = totalValue + 1;
        totalCount.innerText = totalValue;
     }
     else {
        window.alert("Your count is completed");
     }
})


document.getElementById('first-decrement').addEventListener('click',function(){
      const countField = document.getElementById("first-count");
 
      let countValue = parseInt(countField.innerText);


       const totalCount = document.getElementById("total-count");
       let totalValue = parseInt(totalCount.innerText);
 
     

      if (parseInt(countField.innerText) > 0) {
           
           countValue = countValue - 1;

           countField.innerText = countValue;
           totalValue = totalValue - 1;
           totalCount.innerText = totalValue;
            
      }
      else {
        window.alert("Don't count negative");
      }
})


document
  .getElementById("second-increment")
  .addEventListener("click", function () {
    const countField = document.getElementById("second-count");

    let countValue = parseInt(countField.innerText);

    const totalCount = document.getElementById("total-count");
    let totalValue = parseInt(totalCount.innerText);

    if (parseInt(countField.innerText) < 33) {
      countValue = countValue + 1;

      countField.innerText = countValue;

      totalValue = totalValue + 1;
      totalCount.innerText = totalValue;
      
    } else {
      window.alert("Your count is completed");
    }
  });

document
  .getElementById("second-decrement")
  .addEventListener("click", function () {
    const countField = document.getElementById("second-count");

    let countValue = parseInt(countField.innerText);

       const totalCount = document.getElementById("total-count");
       let totalValue = parseInt(totalCount.innerText);

    if (parseInt(countField.innerText) > 0) {
      countValue = countValue - 1;

      countField.innerText = countValue;

      totalValue = totalValue - 1;
      totalCount.innerText = totalValue;
    
    } else {
      window.alert("Don't count negative");
    }
  });


  document
    .getElementById("third-increment")
    .addEventListener("click", function () {
      const countField = document.getElementById("third-count");

      let countValue = parseInt(countField.innerText);

         const totalCount = document.getElementById("total-count");
         let totalValue = parseInt(totalCount.innerText);

      if (parseInt(countField.innerText) < 33) {
        countValue = countValue + 1;

        countField.innerText = countValue;
        totalValue = totalValue + 1;
        totalCount.innerText = totalValue;
        
      } else {
        window.alert("Your count is completed");
      }
    });

  document
    .getElementById("third-decrement")
    .addEventListener("click", function () {
      const countField = document.getElementById("third-count");
      let countValue = parseInt(countField.innerText);

         const totalCount = document.getElementById("total-count");
         let totalValue = parseInt(totalCount.innerText);

      if (parseInt(countField.innerText) > 0) {
        countValue = countValue - 1;

        countField.innerText = countValue;

        totalValue = totalValue - 1;
        totalCount.innerText = totalValue;
        
      } else {
        window.alert("Don't count negative");
      }
    });


   
