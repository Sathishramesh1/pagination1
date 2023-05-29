let rawData;

var pagecount=10
var rowsperpage=10;
function populateTable(startIndex, endIndex) {
  var k = '<tbody>'
    for(i = startIndex;i < endIndex; i++){
        k+= '<tr>';
        k+='<td>'+rawData[i].id +'</td>';
        k+='<td>'+rawData[i].name+'</td>';
        k+= '<td>' + rawData[i].email + '</td>';
        k+= '</tr>';           
    }
    k+='</tbody>';
    document.getElementById('tableData').innerHTML = k;
  }
fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
.then((data)=>data.json())
.then((data)=>{
 

  rawData=data
  console.log(rowsperpage)
  if (rowsperpage > data.length) populateTable(0, data.length);
  else populateTable(0, rowsperpage);
  
  //creating button
var prev=document.createElement("button")
prev.setAttribute("class","btn btn-outline-primary")
prev.setAttribute("classname","prev")
document.body.append(prev);
prev.innerText="prev"
prev.addEventListener("click",()=>{pre()})
let p='<div class="pagination">';
for (let j=0;j<pagecount;j++){
  
  p+= `<button type="button" class="btn btn-outline-primary" onclick="populateTable(${j*rowsperpage},${j*rowsperpage+rowsperpage})">${parseInt(j+1)}</button>`

}
p += '</div>';
document.getElementById("mystyle").innerHTML=p;
  ///
///

function pre(){
  j--
  return populateTable(((j-1)*rowsperpage),((j-1)*rowsperpage+rowsperpage));
}

//



   
  
}

)
