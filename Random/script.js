
$(document).ready(function() {
    
    $.ajax({
        url: "https://usman-fake-api.herokuapp.com/api/recipes",
        method: "GET",
        success: function(data) {
            
            console.log(data);

        },
        error: function(error) {
            console.log("Error fetching data:", error);
        }
    });
});


$(document).ready(function() {
    
    var newRecipe = {
        title: "New Recipe",
        description: "This is a new recipe.",
        body:"this is the body of recipe"
    };


    $.ajax({
        url: "https://usman-fake-api.herokuapp.com/api/recipes",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(newRecipe),
        success: function(data) {
            console.log("Recipe created :", data);
        },
        error: function(error) {
            console.log("Error creating recipe:", error);
        }
    });
});


$(document).ready(function() {
    $.ajax({
        url: "https://usman-fake-api.herokuapp.com/api/recipes/65633ca01b11b3001493ed1b",
        method: "DELETE",
        success: function(data) {
            console.log("Recipe deleted:", data);
        },
        error: function(error) {
            console.log("Error deleting recipe:", error);
        }
    });
});

$(document).ready(function() {
    
    var updatedRecipe = {
        title: "Updated Recipe",
        description: "This recipe has been updated.",
        Body:"Updated recipe body is here."
    };

    $.ajax({
        url: "https://usman-fake-api.herokuapp.com/api/recipes/65633ca01b11b3001493ed17",
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(updatedRecipe),
        success: function(data) {
            console.log("Recipe updated:", data);
        },
        error: function(error) {
            console.log("Error updating recipe:", error);
        }
    });
});




