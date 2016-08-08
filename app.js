$(document).ready(function() {
    $(".alg").click(function() {
        var algorithm = $(this).text();
        $.ajax({
            url : "simple/"+algorithm,
            dataType: "text",
            success : function (data) {
                $(".algorithm").html(data);
                var $runButton = $('<button class="btn btn-success runButton">Run</button>')
                $runButton.appendTo($(".subAlg"));
            }
        });
    });
    $(".runButton").click(function(){
        
    })
});