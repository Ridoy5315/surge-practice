function getError () {
     const ageField = document.getElementById('age');
     const ageText = ageField.value;
     const errorTag = document.getElementById('error');

     try{

          const age = parseInt(ageText);
          
          if(isNaN(age)){
               throw 'Please enter a valid number';
          }
          else if(age < 18){
               throw 'You are not allowed';
          }
          else if (age > 30){
               throw 'your age are cross fo our requirement';
          }
          errorTag.innerHTML = '';
     }
     catch(err){
          errorTag.innerHTML = 'Error: ' + err;
     }
     finally{
          console.log('All done');
     }
}