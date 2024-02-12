let que_1_Element=document.getElementById("que_1");
let que_2_Element=document.getElementById("que_2");
let que_3_Element=document.getElementById("que_3");
let que_4_Element=document.getElementById("que_4");

let result_1_Element=document.getElementById("result_1");
let result_2_Element=document.getElementById("result_2");
let result_3_Element=document.getElementById("result_3");
let result_4_Element=document.getElementById("result_4");

let img_minus="assets/images/icon-minus.svg";
let img_plus="assets/images/icon-plus.svg";


que_1_Element.onclick=function(){
    result_1_Element.classList.toggle("display-con");
    que_1_Element.src=img_minus;
    que_1_Element.onclick=function(){
        result_1_Element.classList.toggle("display-con");
        que_1_Element.src=img_plus;
    }
}
que_2_Element.onclick=function(){
    result_2_Element.classList.toggle("display-con");
    que_2_Element.src=img_minus;
    que_2_Element.onclick=function(){
        result_2_Element.classList.toggle("display-con");
        que_2_Element.src=img_plus;
    }
    
}
que_3_Element.onclick=function(){
    result_3_Element.classList.toggle("display-con");
    que_3_Element.src=img_minus;
    que_3_Element.onclick=function(){
        result_3_Element.classList.toggle("display-con");
        que_3_Element.src=img_plus;
    }
    
}
que_4_Element.onclick=function(){
    result_4_Element.classList.toggle("display-con");
    que_4_Element.src=img_minus;
    que_4_Element.onclick=function(){
        result_4_Element.classList.toggle("display-con");
        que_4_Element.src=img_plus;
    }
    
}