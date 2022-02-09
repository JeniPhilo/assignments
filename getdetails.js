function handleSubmit(){
    let nameElement=document.getElementById("name1");
    let nameValue=nameElement.value;

    let partnerElement=document.getElementById("partner1");
    let partnerValue=partnerElement.value;

    let locationElement=document.getElementById("location1");
    let locationValue=locationElement.value;

    let designationElement=document.getElementById("designation1");
    let designationValue=designationElement.value;

    let companyElement=document.getElementById("company1");
    let companyValue=companyElement.value;

    let resultValue=document.getElementById("result");
    resultValue.innerHTML="<p > I am "+ nameValue + " . Mr."+ partnerValue +" is my partner."+ " I'm from "+locationValue+ ". I'm a "+designationValue+ ". I'm working in "+companyValue +".</p>";
}