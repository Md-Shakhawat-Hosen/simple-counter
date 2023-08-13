
document.getElementById('delete-btn').addEventListener('click',function(){
    const titleText = document.getElementById('title');
       titleText.style.display = 'none';

    document.getElementById("input-field").value = "";
})



document.getElementById('input-field').addEventListener('keyup',function(){
//    const eventValue = event.target.value;

   const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;

   if (inputValue === 'delete') {
      document.getElementById('delete-btn').removeAttribute('disabled');
   }
   else {
      document.getElementById("delete-btn").setAttribute("disabled",true);
   }

   
})