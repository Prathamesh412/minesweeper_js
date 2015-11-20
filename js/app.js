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

        //// function not called --to be removed
//        this.generateBomb = function(numBombs) {  //push to bomsmshell..for loop to check for combination exists
//                var i;
//                var numBombs = 10;
//                for(i=0; i<numBombs; i++){   
//                var p = Math.floor(Math.random() * 6);
//               // var q = Math.floor(Math.random() * 3);
//                console.log(p);
//                }
//        };
            
   this.bombs = [[]];
       // this.bombs[];
        this.generateBomb = function() {
            for(var i=0;i<10;i++){        // for random no generation
                     document.getElementById('tile['+Math.floor(Math.random(i) * 49)+']').innerHTML = 'B';
            }
            
            console.log(this.bombs)
		  	while (this.bombs.length < 7)
			{    
                var found = false;
				var r = Math.floor(Math.random() * 7) + 1;
				var c = Math.floor(Math.random() * 7) + 1;
				for(i = 0; i <this.bombs.length; i++)
				{
				if(r == this.bombs[i][0] && c == this.bombs[i][1]){
                    found = true;
                    break;
                }
                if(!found)
                    this.bombs.push([r,c]);
				}
			}

               
        };//end bombs
};        
    var myBoard = new board();    
    myBoard.init();
    myBoard.drawBoard();
    myBoard.generateBomb();
   // myBoard.bombs();
    
})();