(function () {
 
    var defaults = {
            cols: 7,
            rows: 7,
            bombs: 10
    };

    var tile = function(r,c){
      this.row = r;
      this.col = c;

    };

    var board = function(){                  //check for function of rows and columns

        this.tiles =[];
          //  this.cols = cols;
          //  this.rows=rows;
            //bombStack: {}

        
    ///////////////////--init funtion----
          this.init = function(){
          for(var i = 0; i<=6; i++)
              for(var j=0; j<=6; j++)
                this.tiles.push(new tile(i,j));
          };

      //  this.bombshell = [[2,1],[0,0],[]]//
        
        ///////////---drawboard func--------
        this.drawBoard = function(){
        var boardDiv = document.createElement('div');
        boardDiv.className = 'board';
        boardDiv.setAttribute('id','board');
        var row=0;
        var rowDiv= [];
        for(var i = 0; i<8; i++)
        {
          rowDiv[i] = document.createElement('div');
          rowDiv[i].className = 'row';      
        }

        for(var i = 0; i<this.tiles.length; i++)
        {
          var tileDiv = document.createElement('span');
          tileDiv.className = 'tile';
          tileDiv.setAttribute('id','tile['+i+']');
          tileDiv.setAttribute('data-row',this.tiles[i].row);
          tileDiv.setAttribute('data-col',this.tiles[i].col);
            tileDiv.innerHTML=0;
          rowDiv[row].appendChild(tileDiv);

        if(i==6 || i==13 || i==20 || i==27 || i==34 || i==41 || i==48)
            row++;

        }    
        for(var i = 0; i<8; i++)
        {
          boardDiv.appendChild(rowDiv[i]);
        }
        document.body.appendChild(boardDiv);
     };

            
   this.bombs = [[]];
       // this.bombs[];
        this.generateBomb = function() {
            for(var i=0;i<10;i++){        // for random no generation
                     document.getElementById('tile['+Math.floor(Math.random(i) * 49)+']').innerHTML = 'B';
              }
            
          //  div.addEventListener('click', function(event){
            for(var j = 0;j<49;j++) {   
                    if(document.getElementById('tile['+j+']').innerHTML=="B")
                        {
                          //  console.log(j);
                            //check for j-8,-7,-6,-1,1,6,7,8
                            var i = 0;
                            var neighbouringCell = [j-8,j-7,j-6,j-1,j+1,j+6,j+7,j+8];
                            while(i< neighbouringCell.length){
                                if(neighbouringCell[i]>=0){  
                                   var tempCell= document.getElementById('tile[' + neighbouringCell[i] + ']').innerHTML;
                                    if (tempCell != "B"){
                                      tempCell=parseInt(tempCell);
                                      tempCell++;
                                        document.getElementById('tile[' + neighbouringCell[i] + ']').innerHTML = tempCell;
                                    }
                                }
                                else{
                                    
                                    console.log("outside")
                                    console.log(neighbouringCell.length);                               
                                }
                                i++;
                            }
                            
                        }

               }
          //  document.getElementById("").innerHTML
        
        };//end bombs
        
        
};        
    var myBoard = new board();    
    myBoard.init();
    myBoard.drawBoard();
    myBoard.generateBomb();
   // myBoard.bombs();
    
})();