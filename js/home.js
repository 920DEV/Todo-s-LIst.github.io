// Adding event to add the item to the local storage.

        function update(){
            titles=document.getElementById("title").value;
            disc=document.getElementById("dis").value;

            // creating a locat storage "titel_items"
            if(localStorage.getItem("title_items")==null){
                data_Array=[];
                data_Array.push([titles,disc]);
                localStorage.setItem("title_items",JSON.stringify(data_Array));

            }
            else{
                data_str=localStorage.getItem("title_items");
                data_Array= JSON.parse(data_str);
                data_Array.push([titles,disc]);
                localStorage.setItem("title_items",JSON.stringify(data_Array));
            }
        // Adding list to the server
        tablebody=document.getElementById("tablebody");
        let str="";

        data_Array.forEach((element,index) => {
            str += `<tr>
            <th>${index +1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td id="btn-del"><button>Delete</button></td>
        </tr>`;
        });
        tablebody.innerHTML=str;
        }
       let  add = document.getElementById("add-btn"); 
        add.addEventListener("click",update);
        update();




       
