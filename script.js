
    
     function getOption() {
         selectElement = document.querySelector('#select1');
         output = selectElement.value;
         document.querySelector('.output').textContent = output;
     }
    
 
 
    
   
 let mybutton = document.getElementById("btn-back-to-top");
 
 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function () {
   scrollFunction();
 };
 
 function scrollFunction() {
   if (
     document.body.scrollTop > 20 ||
     document.documentElement.scrollTop > 20
   ) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }


 mybutton.addEventListener("click", backToTop);
 
 function backToTop() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }

    
    
    

       var newWin;
   function openPopup()
   {
    newWin= window.open('contact.html','contact','width=700,height=500');
 
    document.onmousedown=focusPopup;
    document.onkeyup=focusPopup;
    document.onmousemove=focusPopup;
   }
   function focusPopup(){
     if(!newWin.closed){
       newWin.focus();
     }
   }
  
       
       $('body').scrollspy({target: ".navbar"})
      



      
       const searchFun = () => {
        let filter=document.getElementById('myInput').value.toUpperCase();
        let myTable=document.getElementById('myTable');
        let tr=myTable.getElementsByTagName('tr');
        for(var i=0;i<tr.length;i++){
            let td=tr[i].getElementsByTagName('td')[0];
            if(td){
              let textvalue=td.textContent || td.innerHTML;
              if(textvalue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display="";
              }else{  tr[i].style.display="none";  }
              }
            }
        }



     

        var theForm = document.getElementById('myForm');
        theForm.addEventListener('submit', function(event) {
          event.preventDefault();
        
          var myName = document.getElementById("myName").value;
          window.alert("Hai,"+myName+"! "+"Go To SingIn");
         
        
        });



  function showHide() {
    let boughthistory = document.getElementById('bought');
    if (boughthistory.value == 1) {
        document.getElementById('hidden-panel').style.display = 'block';
    } else {
        document.getElementById('hidden-panel').style.display = 'none';
    }
}


        $('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
    


$(document).ready(function(){
  $('.multi_select').selectpicker();
})


function change() {
  let results = Array.from(document.querySelectorAll('.result > div'));
  // Hide all results
  results.forEach(function(result) {
    result.style.display = 'none';
  });
  // Filter results to only those that meet ALL requirements:
  Array.from(document.querySelectorAll('.filter input[rel]:checked'), function(input) {
    const attrib = input.getAttribute('rel');
    results = results.filter(function(result) {
      return result.classList.contains(attrib);
    });
  });
  // Show those filtered results:
  results.forEach(function(result) {
    result.style.display = 'block';
  });
}
change();