
      function check(){
        var someStrings = prompt("Enter some words!");
        const checkStrings = someStrings.split('').reverse().join('');
        if (checkStrings === someStrings) {
            alert("True");     
        }
        else {
            alert("False");
        }
    }