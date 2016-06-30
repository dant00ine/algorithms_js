$(document).ready(function() {
    $(".alg").click(function() {
        var algorithm = $(this).text();
        $.ajax({
            url : "simple/"+algorithm,
            dataType: "text",
            success : function (data) {
                $(".algorithm").html(data);
            }
        });
    });
});