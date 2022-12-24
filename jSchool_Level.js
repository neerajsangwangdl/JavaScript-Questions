/*
Q1 Check for Binary
Given a non-empty sequence of characters str, return true if sequence is Binary, else return false
 <script>
   function isArrayBool(array) {
    for (var i of array) {
         if (i !== 0 && i !== 1) return false;
    }
    return true;
}

console.log(isArrayBool([ 101]));       // false
console.log(isArrayBool([1,0,0,0,1]));   // true
console.log(isArrayBool([1]));           // true

  </script>
--------------------------------------------------------------------------
Q2 Display longest name
Given a list of names, display the longest name.
 <script>
      var rivers = ["Delaware","Ohio","Sangamon","Black",
      "Current","rivergangaisthelargestriver"];
      var index = 0;
      var length = 0;
      var name = "";
      for(var i = 0; i < rivers.length; i++){
    if(rivers[i].length > length){
        length = rivers[i].length;
        index = i;
        name = rivers[i];
        console.log(name)
    }
}
      
    </script>
    --------------------------------------------------------------------
    Q 3 Remove Spaces
    Given a string, remove spaces from it. 

        <script>
    
    var str = "Visit Microsoft I am neeraj sangwan!";
    var res = str.replace(/\s+/g, "");
    console.log(res);
      
    </script>

    ---------------------------------------------------------------------

    Q4 Coverting string to lowercase

    <script>
   let convertinglowerCase = 'Neeraj Sangwan'
   console.log(convertinglowerCase.toLowerCase())
  </script>
  ---------------------------------------------------------------------
  Q 5 Reverse a string
   <script>
          let string = "!onaiP"
          string = [...string].reverse().join("");
          console.log(string);
   </script>

   ----------------------------------------------------------------------

   Q.6 Reversing the Vovels

     for(i=0; i<a.length; i++){
    if(a[i]=="a"||a[i]=="e"||a[i]=="i"||a[i]=="o"||a[i]=="u"){
      b[n]=a[i];
      n+=1;
    }
  }

  last = b.length-1;
  for(j=0; j<a.length; j++){
    if(a[j]=="a"||a[j]=="e"||a[j]=="i"||a[j]=="o"||a[j]=="u"){
      a[j]=b[last];
      last-=1;
    }
  } 
  console.log(a.join(''));  
}
--------------------------------------------------------------------

Q 7 
<script>
let text = "Hello World!";
let result = text.toUpperCase();

document.getElementById("demo").innerHTML = result;
</script>
------------------------------------------------------------------------
Q.8 conecate strings and reverse().join("")

   let s1 = 'geeks';
    let s2 = 'for';
    let s3 = s1+s2;
    let string = s3
          string = [...string].reverse().join("");
          console.log(string);
------------------------------------------------------------------------
Q.10 Delete alternate characters
Ans  <script>
    let str = "This is a test!",
    odd = [],
    even = [];

for (var i = 0; i < str.length; i++) {
  i % 2 === 0
    ? even.push(str[i]) 
    : odd.push(str[i])
}

console.log(odd.join(''))
console.log(even.join(''))
   </script>
   ---------------------------------------------------------------------
   Q.11 Count of CamelCase characters
    <script>
    let s = "ckjkUUYII"
    function camelcase(s) {
   let count = 0;
   for(let i in s){
    if(s.charAt(i) === s.charAt(i).toUpperCase()){
      count++
    }
   }
   return count
}

console.log(camelcase("ckjkUUYII"))

  </script>
  ---------------------------------------------------------------------
  Q.12 Remove vowel from strings/array
   var strings = ["bongo drums", "guitar", "flute", "double bass", "xylophone", "piano"];

        strings = strings.map(function (string) {
            return string.replace(/[aeiou]/g, '');
        });

        console.log(strings);
--------------------------------------------------------------------------
 Q.13
<script>
	// Javascript program to find whether the string
	// has all same characters or not.
	
	function allCharactersSame(s)
	{
		let n = s.length;
		for (let i = 1; i < n; i++)
			if (s[i] != s[0])
				return false;

		return true;
	}
	
	let s = "aaa";
	if (allCharactersSame(s))
		document.write("Yes");
	else
		document.write("No");
		
		// This code is contributed by suresh07.
</script>
-------------------------------------------------------------------------
Q.14 Convert a list of characters into a String

Given a list of characters, merge all of them into a string.

 <script>
    let arrays = "g e e k s f o r g e e k s"
    let arraystring = arrays.replace(/\s+/g, '');
    console.log([arraystring])

  </script>
  -------------------------------------------------------------------------------
  Q15
  LowerCase to UpperCase
  <script>
let text = "Hello World!";
let result = text.toUpperCase();

document.getElementById("demo").innerHTML = result;
</script>
---------------------------------------------------------------------------------------
Q.16 Count type of UpperCase
// JavaScript program to count the uppercase,
	// lowercase, special characters
	// and numeric values

	// Function to count uppercase, lowercase,
	// special characters and numbers
	function Count(str)
	{
		var upper = 0,
		lower = 0,
		number = 0,
		special = 0;
		for (var i = 0; i < str.length; i++)
		{
		if (str[i] >= "A" && str[i] <= "Z") upper++;
		else if (str[i] >= "a" && str[i] <= "z") lower++;
		else if (str[i] >= "0" && str[i] <= "9") number++;
		else special++;
		}
		document.write("Upper case letters: " + upper + "<br>");
		document.write("Lower case letters : " + lower + "<br>");
		document.write("Number : " + number + "<br>");
		document.write("Special characters : " + special + "<br>");
	}

	// Driver function
	var str = "#GeeKs01fOr@gEEks07";
	Count(str);
	
	// This code is contributed by rdtank.
	-----------------------------------------------------------------------------------------------------------------------
  Q.17 Substring in javaScript

            let text = "Hello world!";
            let result = text.substring(1, 4);
-----------------------------------------------------------------------------------------------------------------------

Q18 / Javascript program to remove all the characters
// other than alphabets

<script>
// Javascript program to remove all the characters
// other than alphabets
	
	// function to remove characters and
	// print new string
function removeSpecialCharacter(s)
{
	for (let i = 0; i < s.length; i++)
		{

			// Finding the character whose
			// ASCII value fall under this
			// range
			if (s[i] < 'A' || s[i] > 'Z' &&
					s[i] < 'a' || s[i] > 'z')
			{
				
				// erase function to erase
				// the character
				s = s.substring(0, i) + s.substring(i + 1);
				i--;
			}
		}
		document.write(s);
}
	
// Driver code
let s = "$Gee*k;s..fo, r'Ge^eks?";
removeSpecialCharacter(s);
	
	

// This code is contributed by unknown2108
</script>
-----------------------------------------------------------------------------------------------------------------

Q.19
<script>
		// JS code to implement the approach

		// Function to print the pattern
		function printPattern(s)
		{
		
			// Find the length of the given string
			let n = s.length;

			// Print string for n lines
			for (let i = 0; i < n; i++) {

				// Iterate over the string
				for (let j = 0; j < n - i; j++) {
					document.write(s[j]);
				}
				document.write('</br>');
			}
		}

		// Driver code

		let s = "GeeK";

		// Function call
		printPattern(s);

// This code is contributed by lokeshpotta20.
	</script>
---------------------------------------------------------------------------------------------------------------
Q 20

<script>
// Javascript program to split an alphanumeric
// string using stringbuffer
	
	function splitString(str)
	{
		let alpha = "";
		let num = "";
		let special = "";
		for (let i=0; i<str.length; i++)
		{
			if (!isNaN(String(str[i]) * 1))
				num+=str[i];
			else if((str[i] >= 'A' && str[i] <= 'Z') ||
			(str[i] >= 'a' && str[i] <= 'z'))
				alpha+=str[i];
			else
				special+=str[i];
		}
		
		document.write(alpha+"<br>");
		document.write(num+"<br>");
		document.write(special+"<br>");
	}
	
	// Driver method
	let str = "geeks01$$for02geeks03!@!!";
	splitString(str);
	
	// This code is contributed by avanitrachhadiya2155
</script>
-------------------------------------------------------------------------------------------------------------
Q 21  Extract a number from a string using JavaScript  (Extract the integers main question, integers means number)

<!DOCTYPE html>
<html>
<head>
	<title>
		Extract number from string
	</title>
</head>

<body >
	<div align="center" style="background-color: green;">
		
		<h1>GeeksforGeeks</h1>
		
		<p>String is "jhkj7682834"</p>
		
		<p id="GFG">
			Click the button to extract number
		</p>
		
		<input type="button" value="click " onclick="myGeeks()">
	</div>
	
	<script>
		function myGeeks() {
			var str = "jhkj7682834";
			var matches = str.match(/(\d+)/);
			
			if (matches) {
				document.getElementById('GFG').innerHTML
						= matches[0];
			}
		}
	</script>
</body>
</html>							
-----------------------------------------------------------------------------------------------------------------------











*/