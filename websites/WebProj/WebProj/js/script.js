document.addEventListener("DOMContentLoaded", function(){


    let color_block = "red";
    var array_of_array = [];
    let main_field = document.querySelector(".main_field")

    var chess_knight = {
        
        name_object: "chess_knight",

        check_move(vsp_i , vsp_j){
            if(((vsp_i - 2) >= 0) && ((vsp_j - 1) >= 0)){
                array_of_array[vsp_i - 2][vsp_j - 1].style.backgroundColor = color_block;
            }
            if(((vsp_i - 2) >= 0) && ((vsp_j + 1) >= 0) && (vsp_j < 7)){
                array_of_array[vsp_i - 2][vsp_j + 1].style.backgroundColor = color_block;
            }
            if(((vsp_i - 1) >= 0) && ((vsp_j - 2) >= 0)){
                array_of_array[vsp_i - 1][vsp_j - 2].style.backgroundColor = color_block;
            }
            if(((vsp_i - 1) >= 0) && (vsp_j < 6)){
                array_of_array[vsp_i - 1][vsp_j + 2].style.backgroundColor = color_block;
            }
            if((vsp_i < 7) && (vsp_j < 6)){
                array_of_array[vsp_i + 1][vsp_j + 2].style.backgroundColor = color_block;
            }
            if((vsp_i < 6) && (vsp_j < 7)){
                array_of_array[vsp_i + 2][vsp_j + 1].style.backgroundColor = color_block;
            }
            if((vsp_i < 6) && ((vsp_j - 1) >= 0)){
                array_of_array[vsp_i + 2][vsp_j - 1].style.backgroundColor = color_block;
            }
            if((vsp_i < 7) && ((vsp_j - 2) >= 0)){
                array_of_array[vsp_i + 1][vsp_j - 2].style.backgroundColor = color_block;
            }
        }
    }

    var rook = {
        
        name_object: "rook",

        check_move(vsp_i, vsp_j){
           
            let temp_index = 0;
           
            while((vsp_i - temp_index) >= 0 || (vsp_i + temp_index <= 7)){
                temp_index++;
               if(vsp_i - temp_index >= 0){
                    array_of_array[vsp_i - temp_index][vsp_j].style.backgroundColor = color_block;
                }
                if((vsp_i + temp_index) <= 7){
                    array_of_array[vsp_i + temp_index][vsp_j].style.backgroundColor = color_block;
                }
            }
            
            temp_index = 0;
            while((vsp_j - temp_index) > 0 || (vsp_j + temp_index < 7)){
                temp_index++;
                if(vsp_j - temp_index >= 0){
                    array_of_array[vsp_i][vsp_j - temp_index].style.backgroundColor = color_block;
                }
                if((vsp_j + temp_index) <= 7){
                    array_of_array[vsp_i][vsp_j + temp_index].style.backgroundColor = color_block;
                }
            }
        }
    }

    var queen = {
        
        name_object: "queen",

        check_move(vsp_i, vsp_j){
            
            var temp_index = 0;

            while((vsp_i - temp_index > 0 || vsp_j - temp_index > 0 || vsp_i + temp_index < 7 || vsp_j + temp_index < 7)){
                temp_index++;
                
                if(vsp_i - temp_index >= 0 && vsp_j - temp_index >= 0){
                    array_of_array[vsp_i - temp_index][vsp_j - temp_index].style.backgroundColor = color_block;
                }

                if(vsp_i - temp_index >= 0 && vsp_j + temp_index <= 7){
                    array_of_array[vsp_i - temp_index][vsp_j + temp_index].style.backgroundColor = color_block;
                }

                if(vsp_i + temp_index <= 7 && vsp_j + temp_index <= 7){
                    array_of_array[vsp_i + temp_index][vsp_j + temp_index].style.backgroundColor = color_block;
                }

                if(vsp_i + temp_index <= 7 && vsp_j - temp_index >= 0){
                    array_of_array[vsp_i + temp_index][vsp_j - temp_index].style.backgroundColor = color_block;
                }

                if(vsp_i - temp_index >= 0){
                    array_of_array[vsp_i - temp_index][vsp_j].style.backgroundColor = color_block;
                }

                if(vsp_j - temp_index >= 0){
                    array_of_array[vsp_i][vsp_j - temp_index].style.backgroundColor = color_block;
                }

                if(vsp_i + temp_index <= 7){
                    array_of_array[vsp_i + temp_index][vsp_j].style.backgroundColor = color_block;
                }

                if(vsp_j + temp_index <= 7){
                    array_of_array[vsp_i][vsp_j + temp_index].style.backgroundColor = color_block;
                }
            }
        }
    }

    var pawn = {
        name_object: "pawn",

        check_move(vsp_i, vsp_j){
            if((vsp_i > 0) && (vsp_i < 7)){
                array_of_array[vsp_i - 1][vsp_j].style.backgroundColor = color_block;
            }
            if(vsp_i == 6){
                array_of_array[vsp_i - 2][vsp_j].style.backgroundColor = color_block;
                
            }
        }
    }

    var bishop = {
        name_object: "bishop",
        check_move(vsp_i, vsp_j){

            let temp_index = 0;
            while(vsp_i - temp_index > 0 || vsp_j - temp_index > 0||vsp_i + temp_index < 7 || vsp_j + temp_index < 7){
                temp_index++;
                if(vsp_i - temp_index >= 0 && vsp_j - temp_index >= 0){
                    array_of_array[vsp_i - temp_index][vsp_j - temp_index].style.backgroundColor = color_block;
                }
                if(vsp_i + temp_index <=7 && vsp_j + temp_index <=7){
                    array_of_array[vsp_i + temp_index][vsp_j + temp_index].style.backgroundColor = color_block;
                }
                if(vsp_i + temp_index <=7 && vsp_j - temp_index >= 0){
                    array_of_array[vsp_i + temp_index][vsp_j - temp_index].style.backgroundColor = color_block;
                }
                if(vsp_i - temp_index >= 0 && vsp_j + temp_index <=7){
                    array_of_array[vsp_i - temp_index][vsp_j + temp_index].style.backgroundColor = color_block;
                }
            }

        }
    }

    var king = {
        name_object: "king",
        check_move(vsp_i, vsp_j){
                if(vsp_i - 1 >= 0 && vsp_j - 1 >= 0){
                    array_of_array[vsp_i - 1][vsp_j - 1].style.backgroundColor = color_block;
                }
                if(vsp_i - 1 >= 0){
                    array_of_array[vsp_i - 1][vsp_j].style.backgroundColor = color_block;
                }
                if(vsp_i - 1 >= 0 && vsp_j + 1 <= 7){
                    array_of_array[vsp_i - 1][vsp_j + 1].style.backgroundColor = color_block;
                }
                if(vsp_j - 1 >= 0){
                    array_of_array[vsp_i][vsp_j - 1].style.backgroundColor = color_block;
                }
                if(vsp_j + 1 <=7){
                    array_of_array[vsp_i][vsp_j + 1].style.backgroundColor = color_block;
                }
                if(vsp_i + 1 <= 7 && vsp_j - 1 >= 0){
                    array_of_array[vsp_i + 1][vsp_j - 1].style.backgroundColor = color_block;
                }
                if(vsp_i + 1 <= 7){
                    array_of_array[vsp_i + 1][vsp_j].style.backgroundColor = color_block;
                }
                if(vsp_i + 1 <= 7 && vsp_j + 1 <= 7){
                    array_of_array[vsp_i + 1][vsp_j + 1].style.backgroundColor = color_block;
                }
            }
    }
    function create_figure(vsp_i,vsp_j, array_of_array, image){
        
        let array_of_figure = document.querySelectorAll(".selection_bar input");
        let name_of_figure = "";

        image.style.width = "46px";
        image.style.position = "relative";
        image.style.top = "0px";
        image.style.left = "0px";


        for(let i = 0; i < array_of_figure.length; i++){
            if(array_of_figure[i].checked){
                name_of_figure = array_of_figure[i].value;
            }
        }

        switch(name_of_figure){
                  
            case chess_knight.name_object:
                chess_knight.check_move(vsp_i, vsp_j);
                image.src = document.getElementById("chess_knight_img").src;
                break;
           
            case queen.name_object:
                queen.check_move(vsp_i, vsp_j);
                image.src = document.getElementById("queen_img").src;
                break;

            case rook.name_object:
                rook.check_move(vsp_i, vsp_j);
                image.src = document.getElementById("rook_img").src;
                break;

            case pawn.name_object: 
                pawn.check_move(vsp_i, vsp_j);
                image.src = document.getElementById("pawn_img").src;
                break;

            case bishop.name_object: 
                bishop.check_move(vsp_i, vsp_j);
                image.src = document.getElementById("bishop_img").src;
                break;

            case king.name_object:
                king.check_move(vsp_i,vsp_j);
                image.src = document.getElementById("king_img").src;
        }
        return image;
    }
    
    for(let i = 0; i < 8; i++){
        array_of_array[i] = [];
    }

    var image = null;

        var variable = 0;
        var top = 0;

        let index = 0;
        let count = 0;
        let odd = 0;
        let iter = 0;
        let flag = true;

        let part_of_game = true;
        let restart = document.querySelector(".restart");


        for(let i = 0; i < 64; i++){
            
            let element = document.createElement("div");
            element.style.position = "absolute";
            element.style.left = variable + "px";
            element.style.top = top + "px";
            element.style.width = "50px";
            element.style.height = "50px";
            element.style.border = "1px solid grey";
            element.style.boxSizing = "border-box";

            variable = variable + 50;
            
            if(variable > 350){
                top = top + 50;
                variable = 0;
            }
            
             array_of_array[index][count] = element;
             count++;
             odd = i;
             if((odd % 2 == 0)&&(iter == 0) || (odd % 2 == 1)&&(iter == 1)){
                element.style.backgroundColor = "white";
             } else{
                 element.style.backgroundColor = "black";
            }
             if(count > 7){
                 index++;
                 count = 0;
                if(flag == true){
                    flag = false;
                    iter = 1;
                }else{
                    flag = true;
                    iter = 0;
                }
             }
        
            let vsp_i = 0;
            let vsp_j = 0;

            document.body.querySelector(".main_field").append(element);
        }

        let finish = document.getElementById("finish")
        let finish_image = document.getElementById("finish_image")
        let finish_text = document.getElementById("finish_text")
        let finish_img = document.getElementById("finish_img")

        main_field.addEventListener("click", function(event){
            let cell = event.target;

            image = document.createElement("img");
            
            image.ondragstart = function(){
                return false;
            }
        
            image.setAttribute("id","img-1");

            for(let i = 0; i < 8; i++){
                for(let j  = 0; j < 8; j++){
                    if(array_of_array[i][j] == cell){
                        vsp_i = i;
                        vsp_j = j;
                    }
                }
            }  

            if(part_of_game == false){
                cell.append(document.getElementById("img-1"));
                if(cell.style.backgroundColor == "red"){                   
                    finish.className = "true_finish";
                    finish_image.className = "true_image";
                    finish_text.className = "true";
                    finish_text.innerHTML = "Хороший ход, молодец!"
                    finish_img.src = "https://i.pinimg.com/originals/95/3a/7f/953a7f3e159b0cfe0b3012f916580aed.png";
                    setTimeout(() => finish.style.display = "flex", 300);
                } else{
                    finish.className = "false_finish";
                    finish_image.className = "false_image";
                    finish_text.className = "false";
                    finish_text.innerHTML = "Так ходить нельзя!"
                    finish_img.src = "https://avatanplus.com/files/resources/original/58fdf80c1f55b15ba010ef60.png";
                    setTimeout(() => finish.style.display = "flex",300);
                }
            }         
            
            if(part_of_game == true){
                cell.append(create_figure(vsp_i, vsp_j, array_of_array, image));
                part_of_game = false;
            }  
        })

        restart.addEventListener("click", function(){
                
            finish.style.display = "none";
            part_of_game = true;
            let flag = true;

            const el = document.getElementById("img-1")
            if (el) el.remove()

            for(let i = 0; i < 8; i++){
                for(let j = 0; j < 8; j++){

                    if(flag == true){
                        if(j % 2 == 0){
                            array_of_array[i][j].style.backgroundColor = "white";
                        }else{
                            array_of_array[i][j].style.backgroundColor = "black";
                        }
                    }else{
                        if(j % 2 == 1){
                            array_of_array[i][j].style.backgroundColor = "white";
                        }else{
                            array_of_array[i][j].style.backgroundColor = "black";
                        }
                    }
                }
                if(flag == true){
                    flag = false;
                } else{
                    flag = true;
                }
            }
        })


})