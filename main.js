var Grades = [];

var Update_Scores = function () {
    var Val = get_item_list(Grades);
    document.getElementById("Scores").value = Val;
    document.getElementById("Student_Name").value = "";
    document.getElementById("Scores").value = "";
    document.getElementById("Student_Name").focus();
}

var Student_Grade_Add_Click = function() {
    var Last = document.getElementById("Student_Name").value;
    var Score = parseFloat(document.getElementById('Scores').value);
    Grades.push([Last, Score]);
    Update_Scores();
    document.getElementById("Average_Score").value = getAverageScore(Grades);
}

var Get_Item_List = function(item_list) {
    if (item_list.length == 0){
        return "";
    }
    var List = "";
    for (var x = 0; x <item_list.length; x++ ) {
        var Current = item_list[x];
        for ( var attribute in Current) {
            List += Current[attribute] + ","
        }
        List += "\n" ;
    }
    return List;
}

function getAverageScore(Grades)  {
    var Number_Of_Students = Grades.length;
    var Sum = 0;
    if (Number_Of_Students > 0) {
   for (var t = 0; t < Number_Of_Students; t++) {
    Sum += Grades[t] [1];
   }
   return Sum/Number_Of_Students;
}
return 0;
}

function Clear_Click() {
    document.getElementById("Form").reset();
    document.getElementById("Average_Score").value = "";
    Grades.splice(0, Grades.length);
}

var Sort_Click = function() {
    Grades.sort();
    Update_Scores();
}