 let player1, player2, position, rowIndex, columnIndex, turn;
        let emptyRow = "         |         |   "
        let underscoreRow = "______|______|_____"
        let empty = "         ";
        let valueRowTop = "", valueRowMiddle = "", valueRowBottom = "";
        let turnsNUm = 0;
        let symbol = "x";
        let gameIsON = true;

        let table = [

            ["00", "01", "02"],
            ["10", "11", "12"],
            ["20", "21", "22"]

        ];

        getNames();

        while (gameIsON) {
            // Get Player position
            position = prompt(`${turn}, Enter a position with index numbers:  (example: 00 = Top-left.)\nYour symbol is: ${symbol}.`);
            checkInput(position);
        }


        // Get Players Names
        function getNames() {

            player1 = prompt("Player One name?");
            while (!isNaN(player1) || player1 == null) {
                alert("Enter a valid name");
                player1 = prompt("Player One name?");
            }

            player2 = prompt("Player Two name?");
            while (!isNaN(player2) || player2 == null || player2 == player1) {
                alert("Enter a valid name");
                player2 = prompt("Player One name?");
            }

            turn = player2;
        }

        // Switch turns and assign Players Symbols
        function turnIs() {
            if (turn == player2) {
                turn = player1;
                symbol = "o";
            } else {
                turn = player2;
                symbol = "x";
            }

        }

        // Print XO Table
        function showTable(array) {
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array.length; j++) {

                    if (i == 0) {

                        if (array[i][j] == "x" || array[i][j] == "o") {
                            valueRowTop = valueRowTop + "    " + array[i][j] + "   ";
                            if (j < 2) {
                                valueRowTop += "|"
                            }
                        }
                        else {
                            valueRowTop = valueRowTop + empty;
                            if (j < 2) {
                                valueRowTop += "|"
                            }
                        }

                    }
                    if (i == 1) {

                        if (array[i][j] == "x" || array[i][j] == "o") {
                            valueRowMiddle = valueRowMiddle + "    " + array[i][j] + "   ";
                            if (j < 2) {
                                valueRowMiddle += "|"
                            }
                        }
                        else {
                            valueRowMiddle = valueRowMiddle + empty;
                            if (j < 2) {
                                valueRowMiddle += "|"
                            }
                        }
                    }
                    if (i == 2) {

                        if (array[i][j] == "x" || array[i][j] == "o") {
                            valueRowBottom = valueRowBottom + "    " + array[i][j] + "   ";
                            if (j < 2) {
                                valueRowBottom += "|"
                            }
                        }
                        else {
                            valueRowBottom = valueRowBottom + empty;
                            if (j < 2) {
                                valueRowBottom += "|"
                            }
                        }
                    }


                }

            }


            alert(emptyRow + "\n" + valueRowTop + "\n" + underscoreRow + "\n" + valueRowMiddle + "\n" + underscoreRow + "\n" + valueRowBottom + "\n" + emptyRow);
            valueRowTop = "";
            valueRowMiddle = "";
            valueRowBottom = "";

        }

        // Check and insert input
        function checkInput(input) {

            let ifString = Number(input);

            if (input == null || isNaN(ifString)) {
                alert("wrong input");
                return showTable(table);

            } else {
                if (input.length == 2) {

                    rowIndex = Number(input[0]);
                    columnIndex = Number(input[1]);

                    // Check if index in range of 0-2
                    if (rowIndex < 0 || rowIndex > 2 || columnIndex < 0 || columnIndex > 2) {

                        alert("Spot doesn't exist,try again.");
                        return showTable(table);

                    } else {

                        // Check if space is taken
                        if (table[rowIndex][columnIndex] !== "x" && table[rowIndex][columnIndex] !== "o") {
                            table[rowIndex][columnIndex] = symbol;
                            turnsNUm++;
                            showTable(table);
                            result(table);
                            turnIs();

                        }
                        else {

                            alert(`Space at ${input} is taken, please choose another spot.`);

                            return showTable(table);
                        }
                    }
                } else {
                    alert("wrong input");
                    return showTable(table);
                }
            }
        }

        // Check for a Winner or a Draw
        function result(array) {


            for (let i = 0; i < array.length; i++) {
                // Check match in row
                if (array[i][0] == array[i][1] && array[i][0] == array[i][2]) {

                    alert(`${turn} is the winner!`);
                    alert("Thanks for playing!");
                    return gameIsON = false;

                }
                // Check match in column
                if (array[0][i] == array[1][i] && array[0][i] == array[2][i]) {

                    alert(`${turn} is the winner!`);
                    alert("Thanks for playing!");
                    return gameIsON = false;
                }
                // Check match in diagonal top-left to bottom-right
                if (i == 0 && array[i][i] == array[i + 1][i + 1] && array[i][i] == array[i + 2][i + 2]) {

                    alert(`${turn} is the winner!`);
                    alert("Thanks for playing!")
                    return gameIsON = false;
                }
                // Check match in diagonal top-right to bottom-left
                if (i == 0 && array[i][i + 2] == array[i + 1][i + 1] && array[i][i + 2] == array[i + 2][i]) {

                    alert(`${turn} is the winner!`);
                    alert("Thanks for playing!");
                    return gameIsON = false;
                }
            }
            // check if Draw
            if (turnsNUm == 9) {
                alert(`it's a Draw`);
                alert("Thanks for playing!");
                return gameIsON = false;
            }
        }
