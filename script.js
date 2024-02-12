let divBingoCard = document.getElementById("divBingoCard");
let txtInput = document.getElementById("txtInput");
let pcardCount = document.getElementById("pCount");
let btnDraw = document.getElementById("btnDraw");
let pdrawBall = document.getElementById("pdrawBall");
let counter= 0;
let card;
let ballDraw;
let cardMatrixTotal = [];
let cardMatrix;
let cardLength;
let BingoWinner = false;

function draw(){
    if(txtInput.value == ""){
        alert("Introducir valor");
    }
    else{
        if(isNaN(txtInput.value)){
            alert("Solo introducir números")
            txtInput.value = null;
        }
        else{
            for(var i = 0; i < txtInput.value; i++){
                card = new BingoCard();
                card.generateMatrix();
                divBingoCard.innerHTML += card.drawCard();
                counter++;
                cardMatrix = card.matrix;
                cardMatrixTotal.push(cardMatrix);
            }
            txtInput.value = null;
        }
    }
    pcardCount.innerHTML = 'Número de cartones: ' + counter;
}

function BingoCard(){
    this.matrix = [];
    this.generateMatrix = () =>{
        var b = []
        var i = []
        var n = []
        var g = []
        var o = []

        for(var a = 0; a < 5; a++){
            b[a] = Math.floor(Math.random() * (10 - 1) + 1);
        }

        for(var outer = 0; outer < b.length; outer++){
            for(var inner = 0; inner < b.length; inner++){
                if(inner != outer && b[outer] == b[inner]){
                    b[outer] = Math.floor(Math.random() * (10 - 1) + 1)
                }
            }
        }
        this.matrix.push(b);

        for(var a = 0; a < 5; a++ ){
            i[a] = Math.floor(Math.random() * (20 - 11) + 11);
        }

        for(var outer = 0; outer < i.length; outer++){
            for(var inner = 0; inner < i.length; inner++){
                if(inner != outer && i[outer] == i[inner]){
                    i[outer] = Math.floor(Math.random() * (20 - 11) + 11)
                }
            }
        }
        this.matrix.push(i);

        for(var a = 0; a < 5; a++ ){
            n[a] = Math.floor(Math.random() * (30 - 21) + 21);
        }

        for(var outer = 0; outer < n.length; outer++){
            for(var inner = 0; inner < n.length; inner++){
                if(inner != outer && n[outer] == n[inner]){
                    n[outer] = Math.floor(Math.random() * (30 - 21) + 21)
                }
            }
        }
        this.matrix.push(n);

        for(var a = 0; a < 5; a++ ){
            g[a] = Math.floor(Math.random() * (40 - 31) + 31);
        }

        for(var outer = 0; outer < g.length; outer++){
            for(var inner = 0; inner < g.length; inner++){
                if(inner != outer && g[outer] == g[inner]){
                    g[outer] = Math.floor(Math.random() * (40 - 31) + 31)
                }
            }
        }
        this.matrix.push(g);

        for(var a = 0; a < 5; a++ ){
            o[a] = Math.floor(Math.random() * (50 - 41) + 41);
        }

        for(var outer = 0; outer < o.length; outer++){
            for(var inner = 0; inner < o.length; inner++){
                if(inner != outer && o[outer] == o[inner]){
                    o[outer] = Math.floor(Math.random() * (40 - 31) + 31)
                }
            }
        }
        this.matrix.push(o);
        return this.matrix;
    }

    this.drawCard = () =>{
        return `<div>
        <table>
            <tr>
                <th>B</th>
                <th>I</th>
                <th>N</th>
                <th>G</th>
                <th>O</th>
            </tr>
            <tr>
                <td id = "${this.matrix[0][0]}">${this.matrix[0][0]}</td>
                <td id = "${this.matrix[1][0]}">${this.matrix[1][0]}</td>
                <td id = "${this.matrix[2][0]}">${this.matrix[2][0]}</td>
                <td id = "${this.matrix[3][0]}">${this.matrix[3][0]}</td>
                <td id = "${this.matrix[4][0]}">${this.matrix[4][0]}</td>
            </tr>
            
            <tr>
                <td id = "${this.matrix[0][1]}">${this.matrix[0][1]}</td>
                <td id = "${this.matrix[1][1]}">${this.matrix[1][1]}</td>
                <td id = "${this.matrix[2][1]}">${this.matrix[2][1]}</td>
                <td id = "${this.matrix[3][1]}">${this.matrix[3][1]}</td>
                <td id = "${this.matrix[4][1]}">${this.matrix[4][1]}</td>
            </tr>
            <tr>
                <td id = "${this.matrix[0][2]}">${this.matrix[0][2]}</td>
                <td id = "${this.matrix[1][2]}">${this.matrix[1][2]}</td>
                <td id = "${this.matrix[2][2]}">${this.matrix[2][2]}</td>
                <td id = "${this.matrix[3][2]}">${this.matrix[3][2]}</td>
                <td id = "${this.matrix[4][2]}">${this.matrix[4][2]}</td>
            </tr>
            <tr>
                <td id = "${this.matrix[0][3]}">${this.matrix[0][3]}</td>
                <td id = "${this.matrix[1][3]}">${this.matrix[1][3]}</td>
                <td id = "${this.matrix[2][3]}">${this.matrix[2][3]}</td>
                <td id = "${this.matrix[3][3]}">${this.matrix[3][3]}</td>
                <td id = "${this.matrix[4][3]}">${this.matrix[4][3]}</td>
            </tr>
            <tr>
                <td id = "${this.matrix[0][4]}">${this.matrix[0][4]}</td>
                <td id = "${this.matrix[1][4]}">${this.matrix[1][4]}</td>
                <td id = "${this.matrix[2][4]}">${this.matrix[2][4]}</td>
                <td id = "${this.matrix[3][4]}">${this.matrix[3][4]}</td>
                <td id = "${this.matrix[4][4]}">${this.matrix[4][4]}</td>
            </tr>
        </table>
        <br>
        </div>`
    }
}

function drawBall(){
    ballDraw = new BallDraw();
    ballDraw.drawBall();

    pdrawBall.innerHTML = ballDraw.ballDrawnLetter+" - "+ballDraw.ballDrawnNumber;

    for (var i = 0; i < cardMatrixTotal.length; i++) {
        for (var j = 0; j < cardMatrixTotal[i].length; j++) {
            for (var k = 0; k < cardMatrixTotal[i][j].length; k++) {
                if(cardMatrixTotal[i][j][k] = ballDraw.ballDrawnNumber){
                    document.getElementById(cardMatrixTotal[i][j][k]).style.background = "red";
                    checkBingoWinner();
                }
            }
            
        }
    }
    if(BingoWiner == true){
        showWinnerCard();
    }
}

function BallDraw(){
    this.ballDrawnNumber = []
    this.ballDrawnLetter = []

    this.drawBall= () =>{
        let repeat = 0;
        let ballLetter;
        let ballNumber = 1 + Math.floor(Math.random()*50);
        for (var index = 1 ; index <= 50 ; index++){
            if(ballNumber == this.ballDrawnNumber[index] && ballLetter == this.ballDrawnLetter[index]){
                repeat++;
            }
        }
        if (repeat == 1){
            if(ballNumber <= 10){
                this.ballDrawnLetter.push("B");
                this.ballDrawnNumber.push(ballNumber);
            }
            else if(ballNumber >= 11 && ballNumber <= 20){
                this.ballDrawnLetter.push("I");
                this.ballDrawnNumber.push(ballNumber);
            }
            else if(ballNumber >= 21 && ballNumber <= 30){
                this.ballDrawnLetter.push("N");
                this.ballDrawnNumber.push(ballNumber);
            }
            else if(ballNumber >= 31 && ballNumber <= 40){
                this.ballDrawnLetter.push("G");
                this.ballDrawnNumber.push(ballNumber);
            }
            else if(ballNumber >= 41 && ballNumber <= 50){
                this.ballDrawnLetter.push("O");
                this.ballDrawnNumber.push(ballNumber);
            }
        }
        else{
            ballNumber = 1 + Math.floor(Math.random()*50);
        }
        repeat = 0;
    }
}   

function showWinnerCard() {
    let confirmation = confirm("BINGO\nGanador")
    if (confirmation != true){
        clearCards();
    }
}

function clearCards() {
    let confirmation = confirm("¿Quiere reiniciar el juego?")
    if (confirmation == true){
        window.location.reload();
    }
}

function checkBingoWinner() {
    let c0r0 = document.getElementById(cardMatrixTotal[0][0][0]);
    let c0r0_color = c0r0.style.background;
    let c0r1 = document.getElementById(cardMatrixTotal[0][0][1]);
    let c0r1_color = c0r1.style.background;
    let c0r2 = document.getElementById(cardMatrixTotal[0][0][2]);
    let c0r2_color = c0r2.style.background;
    let c0r3 = document.getElementById(cardMatrixTotal[0][0][3]);
    let c0r3_color = c0r3.style.background;
    let c0r4 = document.getElementById(cardMatrixTotal[0][0][4]);
    let c0r4_color = c0r4.style.background;

    let c1r0 = document.getElementById(cardMatrixTotal[0][1][0]);
    let c1r0_color = c1r0.style.background;
    let c1r1 = document.getElementById(cardMatrixTotal[0][1][1]);
    let c1r1_color = c1r1.style.background;
    let c1r2 = document.getElementById(cardMatrixTotal[0][1][2]);
    let c1r2_color = c1r2.style.background;
    let c1r3 = document.getElementById(cardMatrixTotal[0][1][3]);
    let c1r3_color = c1r3.style.background;
    let c1r4 = document.getElementById(cardMatrixTotal[0][1][4]);
    let c1r4_color = c1r4.style.background;

    let c2r0 = document.getElementById(cardMatrixTotal[0][2][0]);
    let c2r0_color = c2r0.style.background;
    let c2r1 = document.getElementById(cardMatrixTotal[0][2][1]);
    let c2r1_color = c2r1.style.background;
    let c2r2 = document.getElementById(cardMatrixTotal[0][2][2]);
    let c2r2_color = c2r2.style.background;
    let c2r3 = document.getElementById(cardMatrixTotal[0][2][3]);
    let c2r3_color = c2r3.style.background;
    let c2r4 = document.getElementById(cardMatrixTotal[0][2][4]);
    let c2r4_color = c2r4.style.background;

    let c3r0 = document.getElementById(cardMatrixTotal[0][3][0]);
    let c3r0_color = c3r0.style.background;
    let c3r1 = document.getElementById(cardMatrixTotal[0][3][1]);
    let c3r1_color = c3r1.style.background;
    let c3r2 = document.getElementById(cardMatrixTotal[0][3][2]);
    let c3r2_color = c3r2.style.background;
    let c3r3 = document.getElementById(cardMatrixTotal[0][3][3]);
    let c3r3_color = c3r3.style.background;
    let c3r4 = document.getElementById(cardMatrixTotal[0][3][4]);
    let c3r4_color = c3r4.style.background;

    let c4r0 = document.getElementById(cardMatrixTotal[0][4][0]);
    let c4r0_color = c4r0.style.background;
    let c4r1 = document.getElementById(cardMatrixTotal[0][4][1]);
    let c4r1_color = c4r1.style.background;
    let c4r2 = document.getElementById(cardMatrixTotal[0][4][2]);
    let c4r2_color = c4r2.style.background;
    let c4r3 = document.getElementById(cardMatrixTotal[0][4][3]);
    let c4r3_color = c4r3.style.background;
    let c4r4 = document.getElementById(cardMatrixTotal[0][4][4]);
    let c4r4_color = c4r4.style.background;

    if(c0r0_color == "red" && c0r1_color == "red" && c0r2_color == "red" && c0r3_color == "red" && c0r4_color == "red"){
        BingoWinner = true;
        c0r0.style.background = "yellow";
        c0r1.style.background = "yellow";
        c0r2.style.background = "yellow";
        c0r3.style.background = "yellow";
        c0r4.style.background = "yellow";
    }
    else if(c1r0_color == "red" && c1r1_color == "red" && c1r2_color == "red" && c1r3_color == "red" && c1r4_color == "red"){
        BingoWinner = true;
        c1r0.style.background = "yellow";
        c1r1.style.background = "yellow";
        c1r2.style.background = "yellow";
        c1r3.style.background = "yellow";
        c1r4.style.background = "yellow";
    }
    else if(c2r0_color == "red" && c2r1_color == "red" && c2r2_color == "red" && c2r3_color == "red" && c2r4_color == "red"){
        BingoWinner = true;
        c2r0.style.background = "yellow";
        c2r1.style.background = "yellow";
        c2r2.style.background = "yellow";
        c2r3.style.background = "yellow";
        c1r4.style.background = "yellow";
    }
    else if(c3r0_color == "red" && c3r1_color == "red" && c3r2_color == "red" && c3r3_color == "red" && c3r4_color == "red"){
        BingoWinner = true;
        c3r0.style.background = "yellow";
        c3r1.style.background = "yellow";
        c3r2.style.background = "yellow";
        c3r3.style.background = "yellow";
        c3r4.style.background = "yellow";
    }
    else if(c4r0_color == "red" && c4r1_color == "red" && c4r2_color == "red" && c4r3_color == "red" && c4r4_color == "red"){
        BingoWinner = true;
        c4r0.style.background = "yellow";
        c4r1.style.background = "yellow";
        c4r2.style.background = "yellow";
        c4r3.style.background = "yellow";
        c4r4.style.background = "yellow";
    }
    else if(c0r0_color == "red" && c1r0_color == "red" && c2r0_color == "red" && c3r0_color == "red" && c4r0_color == "red"){
        BingoWinner = true;
        c0r0.style.background = "yellow";
        c1r0.style.background = "yellow";
        c2r0.style.background = "yellow";
        c3r0.style.background = "yellow";
        c4r0.style.background = "yellow";
    }
    else if(c0r1_color == "red" && c1r1_color == "red" && c2r1_color == "red" && c3r1_color == "red" && c4r1_color == "red"){
        BingoWinner = true;
        c0r1.style.background = "yellow";
        c1r1.style.background = "yellow";
        c2r1.style.background = "yellow";
        c3r1.style.background = "yellow";
        c4r1.style.background = "yellow";
    }
    else if(c0r2_color == "red" && c1r2_color == "red" && c2r2_color == "red" && c3r2_color == "red" && c4r2_color == "red"){
        BingoWinner = true;
        c0r2.style.background = "yellow";
        c1r2.style.background = "yellow";
        c2r2.style.background = "yellow";
        c3r2.style.background = "yellow";
        c4r2.style.background = "yellow";
    }
    else if(c0r3_color == "red" && c1r3_color == "red" && c2r3_color == "red" && c3r3_color == "red" && c4r3_color == "red"){
        BingoWinner = true;
        c0r3.style.background = "yellow";
        c1r3.style.background = "yellow";
        c2r3.style.background = "yellow";
        c3r3.style.background = "yellow";
        c4r3.style.background = "yellow";
    }
    else if(c0r4_color == "red" && c1r4_color == "red" && c2r4_color == "red" && c3r4_color == "red" && c4r4_color == "red"){
        BingoWinner = true;
        c0r4.style.background = "yellow";
        c1r4.style.background = "yellow";
        c2r4.style.background = "yellow";
        c3r4.style.background = "yellow";
        c4r4.style.background = "yellow";
    }
    else if(c0r0_color == "red" && c1r1_color == "red" && c2r2_color == "red" && c3r3_color == "red" && c4r4_color == "red"){
        BingoWinner = true;
        c0r0.style.background = "yellow";
        c1r1.style.background = "yellow";
        c2r2.style.background = "yellow";
        c3r3.style.background = "yellow";
        c4r4.style.background = "yellow";
    }
    else if(c0r4_color == "red" && c1r4_color == "red" && c2r4_color == "red" && c3r4_color == "red" && c4r4_color == "red"){
        BingoWinner = true;
        c0r4.style.background = "yellow";
        c1r3.style.background = "yellow";
        c2r2.style.background = "yellow";
        c3r1.style.background = "yellow";
        c4r0.style.background = "yellow";
    }
    else {
        console.log("Aun no ha ganado nadie");
    }
}