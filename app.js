var list= document.getElementById('list');
var task=document.getElementById('todoitem');
list.setAttribute('class','py-3')

function add(){
    var li=document.createElement('li');
    var liText=document.createTextNode(task.value);
    li.setAttribute('class','mystylelist');
    task.value="";
    li.appendChild(liText);


    //edit button
    var editbtn=document.createElement('i');
    editbtn.setAttribute('class','fa fa-edit fa-2x ml-3 text-primary');
    editbtn.setAttribute('onclick','edit(this)')
    li.appendChild(editbtn);

    //delete button
    var dltbtn=document.createElement('i');
    dltbtn.setAttribute('class','fa fa-trash mx-2 fa-2x  text-primary');
    dltbtn.setAttribute('onclick','dlt(this)')
    li.appendChild(dltbtn);



    list.appendChild(li);
    console.log(li);
}

function edit(e){
    var editval=prompt("Edit your task",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue=editval;

}

function dlt(d){
    d.parentNode.remove();
}


function dltall(){
    list.innerHTML="";
}