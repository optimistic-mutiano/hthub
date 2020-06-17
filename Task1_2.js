function sorted(){
    var nums = prompt("Enter some strings");
 alert("Before bubble sort: " + nums);
    for (var index = 0; index < nums.length; index++) {
        for (var j = nums.length - 1; j  > index; j--) {
            if (nums[j] < nums[j-1]) {
                var bubble = nums[j];
                nums[j] = nums[j -1];
                nums[j -1] = bubble;           }
        }
        
}
 alert ("After bubble sorted: " + nums);
}