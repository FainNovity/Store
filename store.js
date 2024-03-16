var a= window.localStorage;  
var rt=document.querySelector(":root");

if(a.getItem("mode")==null){
      console.log("done");
      a.setItem("mode",1);
      if(document.title=="login page"){
      document.getElementsByClassName('img')[0].setAttribute("src","sun.webp");
      }
     rt.style.setProperty("--bg","#ff5f55");
     rt.style.setProperty("--wt", "#F0FFF3");
     rt.style.setProperty("--th","#11CBD790");
     rt.style.setProperty("--tr","#C6F1E7");
     rt.style.setProperty("--font","black");
    }
    else if(a.getItem("mode")==1){
      a.setItem("mode",1); if(document.title=="login page"){
      document.getElementsByClassName('img')[0].setAttribute("src","sun.webp");
      }
     rt.style.setProperty("--bg","#ff5f55");
     rt.style.setProperty("--wt", "#F0FFF3");
     rt.style.setProperty("--th","#11CBD790");
     rt.style.setProperty("--tr","#C6F1E7");
     rt.style.setProperty("--font","black");
   }
    else if(a.getItem("mode")==0){
      a.setItem("mode",0); if(document.title=="login page"){
      document.getElementsByClassName('img')[0].setAttribute("src","moon.webp");
      }
    rt.style.setProperty("--bg","#001F3F");
     rt.style.setProperty("--wt", "#03001C");
     rt.style.setProperty("--th","#29435C");
     rt.style.setProperty("--tr","#0F4C75");
     rt.style.setProperty("--font","#DDE6ED"); 
    }
    
function mode(){ 
    if(a.getItem("mode")==0){
      a.setItem("mode",1); document.getElementsByClassName('img')[0].setAttribute("src","sun.webp");
     rt.style.setProperty("--bg","#ff5f55");
     rt.style.setProperty("--wt", "#F0FFF3");
     rt.style.setProperty("--th","#11CBD790");
     rt.style.setProperty("--tr","#C6F1E7");
     rt.style.setProperty("--font","black");
   
}
    else if(a.getItem("mode")==1){
      a.setItem("mode",0); document.getElementsByClassName('img')[0].setAttribute("src","moon.webp");
    rt.style.setProperty("--bg","#001F3F");
     rt.style.setProperty("--wt", "#03001C");
     rt.style.setProperty("--th","#29435C");
     rt.style.setProperty("--tr","#0F4C75");
     rt.style.setProperty("--font","#DDE6ED"); 
    }
}  

function check(){
     var user=document.getElementById('user').value;
     var pass=document.getElementById('pass').value;
     if(user=="Admin" && pass=="StorePageBill"){
  document.getElementById('form').setAttribute("action","https://store-managment.netlify.app/bill.html"); 
      window.sessionStorage.setItem("login",1);
     }  
     else if(user=="Admin" && pass=="StorePageList"){
  document.getElementById('form').setAttribute("action","https://store-managment.netlify.app/list.html"); 
      window.sessionStorage.setItem("login",2);  
     }  
     else if(user=="Admin" && pass=="StorePageAdd"){
  document.getElementById('form').setAttribute("action","./add.html");  
       window.sessionStorage.setItem("login",3);
     }  
}
function init(name,prod){
   for(var i=0;a.getItem(name+i)!=null;i++){
       if(a.getItem(name+i)==prod){
           return -1;
       }
   }
   return i;
}

function getBack(){
    window.sessionStorage.setItem("login",0);
    window.location.replace("index.html");
}

function empt(){
    console.log("done!");
    for(var i=0;a.getItem("code"+i)!=null;i++){
       a.removeItem("code"+i);
       a.removeItem("que"+i);      
   }
}
function next(){
     var prod= document.getElementsByClassName('code')[0].value-1;
     var n= parseInt(document.getElementsByClassName('que')[0].value);
     var total= parseInt(a.getItem("n"+prod));
     if(a.getItem("prod"+prod)==null){
         document.getElementsByClassName('warn')[0].innerText="Wrong product Code!!";
  
     setTimeout(()=>{
       document.getElementsByClassName('warn')[0].innerHTML="";  
     },3000);
     }
     else if(init("code",prod)>=0 && total>=n){
         var num=init("code",prod);
         a.setItem("code"+num,prod);
         a.setItem("n"+prod,total-n);
         a.setItem("que"+num,n);
         console.log(a.getItem("n"+prod));
     }
     else if(total<n){
         document.getElementsByClassName('warn')[0].innerText="Sorry!! product not available in enough quentity.";   
     setTimeout(()=>{  
 document.getElementsByClassName('warn')[0].innerText="";  
     },3000);
     }
     else if(init("code",prod)<0){
         document.getElementsByClassName('warn')[0].innerText="Product already added once in cart!!"; 
     setTimeout(()=>{  
 document.getElementsByClassName('warn')[0].innerText="";  
     },3000);
     }
     
     
     var div=document.getElementsByClassName('list')[0];
     div.innerHTML="<th>Index</th> <th width='40%'>Product</th><th width='30%'>Price</th> <th>Avl.</th>";
      for(var i=0;a.getItem("prod"+i)!=null;i++){
           
         var prod=a.getItem("prod"+i);  
         var pr=a.getItem("pr"+i);  
         var n=a.getItem("n"+i);  
         
         var tr=div.insertRow();
         var td=tr.insertCell(0);
         td.setAttribute("align","center");
         td.innerHTML=i+1;
         td=tr.insertCell(1);
         td.setAttribute("align","center");
         td.innerHTML=prod;
         td=tr.insertCell(2);
         td.setAttribute("align","center");
         td.innerHTML=pr;
         td=tr.insertCell(3);
         td.setAttribute("align","center");
         td.innerHTML=n;
         
      }
}

function bill(){
    document.getElementsByClassName('list')[1].innerHTML="";
    var total=0;
    var gst;
   for(var i=0;a.getItem("code"+i)!=null;i++) 
    {
    var code=a.getItem("code"+i);
    var que=a.getItem("que"+i);
    var pr=a.getItem("pr"+code);
    total+=(pr*que);
    }
    gst=total+ total*0.025;
    
    var tr= document.getElementsByClassName('list')[1].insertRow();
    td=tr.insertCell(0);
    td.innerText="Total amount";
    td=tr.insertCell(1);
    td.innerText=total;
    
    tr= document.getElementsByClassName('list')[1].insertRow();
    td=tr.insertCell(0);
    td.innerText="Amount with GST";
    td=tr.insertCell(1);
    td.innerText=gst;
    document.getElementsByClassName("total")[0].style.display="inline";
  
}

      
 if(document.title=="bill"){
           var div=document.getElementsByClassName('list')[0];
      for(var i=0;a.getItem("prod"+i)!=null;i++){
           
         var prod=a.getItem("prod"+i);  
         var pr=a.getItem("pr"+i);  
         var n=a.getItem("n"+i);  
         
         var tr=div.insertRow();
         var td=tr.insertCell(0);
         td.setAttribute("align","center");
         td.innerHTML=i+1;
         td=tr.insertCell(1);
         td.setAttribute("align","center");
         td.innerHTML=prod;
         td=tr.insertCell(2);
         td.setAttribute("align","center");
         td.innerHTML=pr;
         td=tr.insertCell(3);
         td.setAttribute("align","center");
         td.innerHTML=n;
         
      }
      }
      
function add(){
    var prod= document.getElementById('prod').value.toLowerCase();
    var pr= document.getElementById('pr').value;
    var n= document.getElementById('n').value;
    if(prod==null || pr==null || n==null || prod=="") {
     document.getElementsByClassName("warn")[0].innerText="Please, fill all details!";
     setTimeout(()=>{
         document.getElementsByClassName("warn")[0].innerText="";
     },3000);
    }
    else if(init("prod",prod)>=0) {
      var num=init("prod",prod);
      a.setItem("prod"+num,prod);
      a.setItem("pr"+num,pr);
      a.setItem("n"+num,n);
    }
    else {
        for(var i=0;a.getItem("prod"+i)!=null;i++){
          if(a.getItem("prod"+i)==prod){
              a.setItem("pr"+i,pr);
              a.setItem("n"+i,parseInt(a.getItem("n"+i))+parseInt(n));
          }
        }
    }
}

if(document.title=="list"){
           var div=document.getElementsByClassName('list')[0];
           div.innerHTML="<caption align='center'><h2>List of Products</h2></caption><th>Index</th> <th>Product</th><th>Price</th> <th>Que.</th>";
      for(var i=0;a.getItem("code"+i)!=null;i++){
         
         var code= a.getItem("code"+i);
         var prod= a.getItem("prod"+code);
         var pr= a.getItem("pr"+code);
         var que= a.getItem("que"+i); 
         
         
         
         var tr=div.insertRow();
         var td=tr.insertCell(0);
         td.setAttribute("align","center");
         td.innerHTML=i+1;
         td=tr.insertCell(1);
         td.setAttribute("align","center");
         td.innerHTML=prod;
         td=tr.insertCell(2);
         td.setAttribute("align","center");
         td.innerHTML=pr;
         td=tr.insertCell(3);
         td.setAttribute("align","center");
         td.innerHTML=que;
         
      }
      }
      
