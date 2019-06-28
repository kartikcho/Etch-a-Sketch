
        var z = 16;

        // function builds grid
        function createGrid(x) {
            for (var rows = 0; rows < x; rows++) {
                for (var columns = 0; columns < x; columns++) {
                    $("#sketchcontainer").append("<div class='grid'></div>");
                };
            };
            $(".grid").width(640/x);
            $(".grid").height(640/x);
        };

        // function clears grid
        function clearGrid(){
            $(".grid").remove();
            createGrid(z);
            
            $(".grid").mouseover(function() {
                $(this).css("background-color", "grey");
                });

            $(".newGrid").click(function() {
                
                $(".grid").mouseover(function() {
                $(this).css("background-color", "grey");
                });
            });
        };  

        // function prompts user to select the number of boxes for new grid
        function refreshGrid(){
            z = prompt("Enter a new grid size");
            clearGrid();
            createGrid(z);
        };

        // create a 16x16 grid when page loads
        // hover effect used to draw on grid
        $(document).ready(function() {
            
            createGrid(16);

            $(".grid").mouseover(function() {
                $(this).css("background-color", "grey");
                });

            $(".newGrid").click(function() {
                refreshGrid();

                $(".grid").mouseover(function() {
                $(this).css("background-color", "grey");
                });
            });
        });
