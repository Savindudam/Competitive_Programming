window.TUTORIALS = [
  {
    slug: "vscode-setup-guide",
    title: "Setting Up VS Code for CP",
    topic: "Environment",
    difficulty: "Easy",
    readMinutes: 5,
    date: "2026-05-01",
    excerpt: "A complete guide to setting up Visual Studio Code with the best extensions and tools for competitive programming.",
    tags: ["vscode", "setup", "tools"],
    html: `
<p>Umm so as first of everything we need to make out the surrounding for our coding workspace I personally suggest you all to use VS code since it's much great and updated than any other code editor .</p>
<h2>How to install vs code</h2>
<ul>
  <li><strong>For Windows :</strong> <a target="_blank" href="https://code.visualstudio.com/thank-you?dv=win64user">Download here </a></li>
  <li><strong>For MAC :</strong> <a target="_blank" href="https://code.visualstudio.com/thank-you?dv=osx">Download here </a></li>
  <li><strong>For Linux :</strong> <a target="_blank" href="https://code.visualstudio.com/thank-you?dv=linux64_deb">Download here (.deb) </a>&nbsp;&nbsp; <a target="_blank" href="https://code.visualstudio.com/thank-you?dv=linux64_rpm">Download here (.rpm)</a></li>


</ul>
<h2>Installing C++</h2>
<p>For installing c++ to your machine follow the steps in below.</p>
<ul>
     <li><strong>Windows </strong>: 
         <ol>
             <li>Download Mingw : <a target="_blank" href="https://downloads.sourceforge.net/project/mingw/Other/Other-README?ts=gAAAAABp9N9f49NrmfQe_P3VtlrP7nbyQD7cOr5J2SAMXrjFvjd9jCqt7NQXneQ1IPGg8CEX_xjHOPvyLRFZvjoMkMGoZcHQZA%3D%3D&r=https%3A%2F%2Fsourceforge.net%2Fprojects%2Fmingw%2Ffiles%2Flatest%2Fdownload">Download here</a></li>
             <li>Install the Mingw package to your computer</li>
             <li>Save the location of your Mingw files</li>
             <li>Go to bin folder of Mingw and find the file <code> g++.exe</code>  &nbsp; and copy the path of it</li>
             <li>Search for <code>edit the system enviroment variables</code> in the windows search option </li>
             <li>Select <strong> Enviroment Variables </strong> click on the  <code>path</code>  option .</li>
             <li>Select new and paste the copied location of the <code>g++.exe</code> file and select ok .</li>
             <li>Open a new terminal and run <code>g++ --version</code> If it gives the version the installation is complete. </li>

         </ol></li>
    <li><strong>MAC </strong>:
        <ol>
             <li>Open the terminal and run the command <code>xcode-select --install</code> Click install when prompted.</li>
             <li>Try to use the command <code>g++ --version</code> If this gives the version as the output the installation is complete.

        </ol>
    <li><strong>Linux </strong>: 
        <ol>
             <li>Open a terminal and run the following commands <code>sudo apt update</code> &nbsp;&nbsp;<code>sudo apt install build-essential</code> Since cpp is an esssential pack for linux this command will install it correctly</li>
             <li>Try running <code>g++ --version</code> if this returns the version the installation is correct.
        </ol>

</ul>
<h2>Create the first cpp file with vs code</h2>
<ul>
    <li>Open vs code select open folder and open folder and then go to the sidebar and find the new file icon and create a new file named <code>new.cpp</code>.</li>
    <li>Inside that file write these lines</li>
    <pre><code>#include &ltbits/stdc++.h> 
using namespace std;

int main(){
   cout<<"Hello World"; 
   return 0;
   
}
</pre></code>
    <li>So as anyother language this is the basic command to print <code>Hello World </code> to run this open a new terminal in vs code and run <code> g++ new.cpp </code> and this will create a new executable file and then run the executable in the terminal by using the name of the executable such like if it's <code>a.exe</code> run this in the terminal <code>./a</code></li>
    
</ul>


<h2>Things to Remember</h2>
<ul>
    <li>Use the <strong>Bits</strong> library because it imports every essential module for competitive programming in beginner and intermidiate level</li>
    <li>Use the <strong>Namespace</strong> <code>std</code> to refrain from using the <strong>std::</strong> in every line.</li>
</ul>
&nbsp;
<blockquote>The best tool is the one you know how to use. Spend time mastering your editor!</blockquote>
`
  },


  {
    slug: "Introduction to Competitive programming",
    title: "Competitive programming Intro",
    topic: "Introduction",
    difficulty: "Easy",
    readMinutes: 5,
    date: "2026-05-02",
    excerpt: "A full intro about the section Competitive Programming.",
    tags: ["Intro","syllabus","Info"],
    html: `
    <h1>Introduction</h1>
    Competitive programming combines <strong>two topics</strong>: </br>
        &nbsp;&nbsp; &nbsp;&nbsp; 1. Designing the Algorithms.</br>
        &nbsp;&nbsp; &nbsp;&nbsp; 2. Implementation of the Algorithms.
    
    <h2>Designing the algorithms</h2>
    <ul><li>The design of algorithms consists of problem solving and mathematical
thinking. Skills for analyzing problems and solving them creatively are needed.
An algorithm for solving a problem has to be both correct and efficient, and the
core of the problem is often about inventing an efficient algorithm.</li>
        <li>Theoretical knowledge of algorithms is important to competitive programmers.
Typically, a solution to a problem is a combination of well-known techniques and
new insights. The techniques that appear in competitive programming also form
the basis for the scientific research of algorithms</li>
        <li>A good coding style in contests is straightfoward and concise. Since the
programs should be written quickly, because there is not much time available. Unlike in 
traditional software engineering, the programs are short (usually at most a few 
hudred lines of code), and they do not need to be maintained after the contest.
        <li> The get-to-gether or the collection of the such programmers happens once a 
year in name of <strong>IOI</strong> in various countries.( <a target="_blank" href="https://ioinformatics.org/">click to find out more</a> )
        <li> Through this blog service you will be able to learn the full thing into competitive programming and be a legend coder.

</ul>

    
    
    `
  },


  {
    slug: "Basics to remember in cpp",
    title: "Basics functions in c++",
    topic: "First step for coding",
    difficulty: "Easy",
    readMinutes: 10,
    date: "2026-05-02",
    excerpt: "Let's get into the beautiful world or maybe not beautiful but the world of coding .",
    tags: ["basics","syllabus","cpp"],
    html: `
    <h2>First ever thing to rememeber</h2>
    <ul><li>
    In any coding Language theres a main script that you will need to include to make the program work such like the modules we need to import to make a program work. So first of all let's remember the competitive programming basic coding template</li>
    <pre><code>#include &ltbits/stdc++.h>
using namespace std;

int main(){
 
 // space to write the code
 
return 0;

}</code></pre>
<li>So to make a simple code from cpp we need to know much more than the code snippet so let's learn about some functions we can use : </li>
<ol>
<li><strong>Data Types</strong> in c++ :
There are 5 basic types of Data Types in c++ and they are,
<ul><li><code>int</code> = This data type means any number without decimals.</li>
<li><code>float</code> = This data type is the numbers with any decimal values.</li>
<li><code>char</code> = In this data type we can store any kind of character once.</li>
<li><code>bool</code> = This holds the two values truth or false.</li>
<li><code>string</code> = This data type holds any kind of long word or a sentence</li>
</ul>

<li><code>std::cout</code> - so this is like the write function in the c++ programming so to use this we can do it like this :
<pre>#include <bits/stdc++.h> &ltbits/stdc++.h>
using namespace std;

int main(){
 
  cout<<"Hello World";
  return 0;

}</pre>
<ul><li>So now the output will be <code>Hello World</code> and now you might be wondering why didn't I use the full word <code>std::cout</code> to write this code the basic reason for this is because I already configured the std as a namespace so we won't need to write it over and over.</li>
<li>The main reason to add the namespace was to make the code smaller and easier to read and code it's because in competitive programming time is the most valuable thing to a contestant.</li></ul>
<li><code>std::cin</code> - And this function is clearly as you thought the input fuction for the c++ programming lets now learn to use it :
<pre>
#include &ltbits/stdc++.h>
using namespace std;

int main(){
  string name;
  cin>>name;
  cout&lt&ltname;
  return 0;

}</pre>
<ul>
<li>So for this code think we input the single word <code>Hello</code> this will output the name back but the problem hits when you need to input a full sentence by yourself for that you should use the getline function as below, </li></ul>
<pre>#include &ltbits/stdc++.h>
using namespace std;

int main(){
  string name;
  getline(cin,name);
  cout&lt&ltname;
  return 0;

}</pre>
<ul><li>So now you're able to fully input a sentence and get the same output using the getline and cout fuction.</li></ul> 
</br>
So that's all for the basic input and output functions of c++ language. Move along to learn more.
    
    
    
    `},

{
  slug: "working-with-numbers",
    title: "Working with Numbers in C++",
    topic: "Numbers & Mathematics",
    difficulty: "Easy",
    readMinutes: 15,
    date: "2026-05-03",
    excerpt: "Master integer types, modular arithmetic, and floating-point operations essential for competitive programming.  (This is gonna be a long tutorial)",
    tags: ["numbers", "math", "integers", "modulo"],
    html: `
<h2>Understanding Integer Types</h2>
<p>In competitive programming, choosing the right data type for numbers is crucial. Let's explore the different integer types available in C++.</p>
 
<h3>The int Type</h3>
<p>The most commonly used integer type is <code>int</code>, which is a 32-bit type.</p>
<ul>
    <li><strong>Range:</strong> −2<sup>31</sup> to 2<sup>31</sup> − 1</li>
    <li><strong>Approximately:</strong> −2 x 10<sup>9</sup> to 2 x 10<sup>9</sup></li>
    <li><strong>Use when:</strong> Your values are within ±2 billion</li>
</ul>
 
<pre><code>int x = 1000000;
int y = -500000;
cout << x + y << endl; // Output is : 500000
</code></pre>
 
<h3>The long long Type</h3>
<p>When <code>int</code> isn't enoug, use <code>long long</code> - a 64-bit type that can handle much larger numbers.</p>
<ul>
    <li><strong>Range:</strong> −2<sup>63</sup> to 2<sup>63</sup> − 1</li>
    <li><strong>Approximately:</strong> −9 x 10<sup>18</sup> to 9 x 10<sup>18</sup></li>
    <li><strong>Declaration tip:</strong> Use <code>LL</code> suffix for large literals</li>
</ul>
 
<pre><code>long long x = 123456789123456789LL;
long long y = 987654321987654321LL;
cout << x + y << endl;
</code></pre>
 
<h3>Common Mistake: Type Mixing</h3>
<p> <strong>Warning:</strong> Even if you store the result in <code>long long</code>, intermediate calculations use the type of the operands!</p>
 
<pre><code>// WRONG - This will overflow!
int a = 123456789;
long long b = a * a;  // a*a is calculated as int
cout << b << endl;     // Outputs: -1757895751 (wrong!)
 
// CORRECT - Cast to long long before multiplication
int a = 123456789;
long long b = (long long)a * a;
cout << b << endl;     // Outputs: 15241578750190521 (correct!)
</code></pre>
 
<h2>Modular Arithmetic</h2>
<p>Many competitive programming problems ask you to output answers "modulo M" (often modulo 10<sup>9</sup> + 7). This prevents numbers from becoming too large.</p>
 
<h3>Why Modular Arithmetic?</h3>
<ul>
    <li>Keeps numbers within manageable range</li>
    <li>Allows using <code>int</code> or <code>long long</code> instead of huge numbers</li>
    <li>Standard in competitive programming to avoid overflow</li>
</ul>
 
<h3>Key Properties</h3>
<p>The remainder can be taken before operations:</p>
<ul>
    <li>(a + b) mod m = ((a mod m) + (b mod m)) mod m</li>
    <li>(a − b) mod m = ((a mod m) − (b mod m)) mod m</li>
    <li>(a x b) mod m = ((a mod m) x (b mod m)) mod m</li>
</ul>
 
<h3>Example: Calculating Factorial Modulo M</h3>
<pre><code>#include &ltbits/stdc++.h>
using namespace std;
 
int main(){
    int n = 20;
    long long m = 1000000007;  // Common modulo value
    long long x = 1;
    
    for(int i = 2; i <= n; i++){
        x = (x * i) % m;  // Take modulo after each step
    }
    
    cout << x << endl;  // Factorial of 20 mod 10^9+7
    return 0;
}
</code></pre>
 
<h3>Handling Negative Remainders</h3>
<p>In C++, the remainder of a negative number can be negative. Here's how to fix it:</p>
 
<pre><code>int x = -10;
int m = 7;
 
x = x % m;        // x might be negative
if(x < 0) x += m; // Make sure x is positive
 
cout << x << endl; // Now x is between 0 and m-1
</code></pre>
 
<h2>Floating Point Numbers</h2>
<p>For problems requiring decimal values, C++ offers floating-point types.</p>
 
<h3>Types Available</h3>
<ul>
    <li><code>double</code> - 64-bit, sufficient for most contests</li>
    <li><code>long double</code> - 80-bit, more accurate (g++ extension)</li>
</ul>
 
<h3>Precision Control</h3>
<p>Use <code>printf</code> or <code>cout</code> with precision settings:</p>
 
<pre><code>double pi = 3.14159265358979;
 
// Using printf
printf("%.9f\\n", pi);  // 9 decimal places
 
// Using cout
cout << fixed << setprecision(9) << pi << endl;
</code></pre>
 
<h3>Comparing Floating Point Numbers</h3>
<p><strong>Never use == with floating point numbers!</strong> Due to precision errors, use epsilon comparison instead:</p>
 
<pre><code>#include &ltbits/stdc++.h>
using namespace std;
 
int main(){
    double a = 0.3 * 3 + 0.1;
    double b = 1.0;
    
    // WRONG way
    if(a == b){
        cout << "Equal" << endl;  // Might not print!
    }
    
    // CORRECT way
    double epsilon = 1e-9;
    if(abs(a - b) < epsilon){
        cout << "Equal" << endl;  // Will print
    }
    
    return 0;
}
</code></pre>
 
<h3>Exact Integer Representation</h3>
<p>Interesting fact: <code>double</code> can accurately represent all integers with absolute value up to 2<sup>53</sup>!</p>
 
<h2>Quick Reference</h2>
<table border="1" cellpadding="10">
<tr>
    <th>Type</th>
    <th>Size</th>
    <th>Range</th>
    <th>Use Case</th>
</tr>
<tr>
    <td><code>int</code></td>
    <td>32-bit</td>
    <td>±2 x 10<sup>9</sup></td>
    <td>Most problems</td>
</tr>
<tr>
    <td><code>long long</code></td>
    <td>64-bit</td>
    <td>±9 x 10<sup>18</sup></td>
    <td>Large numbers</td>
</tr>
<tr>
    <td><code>double</code></td>
    <td>64-bit</td>
    <td>Decimals</td>
    <td>Floating point</td>
</tr>
<tr>
    <td><code>long double</code></td>
    <td>80-bit</td>
    <td>Decimals</td>
    <td>High precision</td>
</tr>
</table>
 
<h2>Things to Remember</h2>
<ul>
    <li>If you ain't sure how much high the answer would be always use the answer with Mod 1000000007. 
    <li>Always use <code>long long</code> when dealing with products or large sums</li>
    <li>Take modulo after every operation to prevent overflow</li>
    <li>Never compare floating point numbers with <code>==</code></li>
    <li>Use <code>LL</code> suffix for large literal values</li>
    <li>Check problem constraints to choose appropriate data type</li>
</ul>
 
<blockquote>In competitive programming, one overflow bug can cost you the entire contest. Always think about number ranges before writing code .........!</blockquote>
`},


{
  slug: "Shortnening the code",
  title: "Making the code short in cp",
  topic: "shorting code",
  difficulty: "Easy",
  readMinutes: 10,
  date: "2026-05-03",
  excerpt: "Master the way of implmenting the code in a good way but short.",
  tags: ["Type names", "macros", "maths", "typedef"],
  html: `
  <h2>Implementing the answer in cp .</h2>
  So when it comes to competitive programming the solution for the question we get can be pretty long since it's the main reason we get 5 hours for like only 3 questions and now when it comes to shortening the code it can be done in few various ways.
  <ul>
     <li>Type names</li>
     <li>macros</li>
     <li>namespaces</li>
  </ul>
These 4 are the mostly used methods to shorten the code by many contestants since it works in much good way.
  <ol>
     <li><h3>Type names</h3></li>
     Using the command <code>typedef</code> it is possible to give a shorter name to a datatype. For example , the name <code>long long</code> is so much long. So the competitors shorten it to <code>ll</code> :
     <pre>typedef long long ll;</pre>
     After this , the code 
     <pre>long long a = 123456789;
long long b=987654321;
cout&lt&lta*b&lt&lt"\\n";</pre>
     can be shorten as
     <pre>typedef long long ll;
ll a=123456789;
ll b=987654321;
cout&lt&lta*b&lt&lt"\\n";</pre>
The command <code>typedef</code> can also be used with more complex type. For sample the following code gives the name vi for a vector of integers and the name pi for a pair that contains two integers.
<pre>typedef vector<int> vi;
typedef pair&ltint,int&gt pi ;</pre>
   <li><h3>Macros</h3></li>
   This is as same as the typedef but we use macros to define a fuction name in the normal coding manner. For this we use the following function <code>#define</code> . For example , we can define the following macros,
   <pre>#define F first 
#define S second 
#define PB push_back 
#define MP make_pair</pre>
   After this code we can just use this code , 
   <pre>v.push_back(make_pair(y1,x2));
int d = v[i].first + v[i].second;</pre>
   Like this ,
   <pre>v.PB(Mp(y1,x2));
int d = v[i].F + v[i].S;</pre>
   And a macro can also have parameters which makes it possible to shorten loops and structure like those,
  <pre>#define REP(i,a,b) for(int i=a;a&ltb;a++) 
  </pre>
  The this code 
   <pre>for(int i=0;i&ltn;i++){
  search(i);
}</pre>
   becomes, 
   <pre>REP(i,0,n){
   search(i);
}</pre>
   <li><h3>namespaces</h3></li>
   Namespaces are also as same as the things in the before hand because it can be used to reduce the usage of a main function everywhere such like,
   <pre> using namespace std;</pre>
   So this using these we can make the code much much smaller so it can be compilled much easily.
</ol>
   <h2>Things to remember</h2>
   So since we have learnt the usage of the code shortners we should update our code snipped like this.,
   <pre>#include &ltbits/stdc++.h&gt

using namespace std;
using ll= long long;
const ll MOD=1000000007;

int main(){
    cin.tie(0);
    ios::sync_with_stdio(0);
    
    // your code

    return 0;

}</pre>
Many competitors use this code snippet since it is the shortest and the most working one for the normal coding contests.
  
  
  `
},
{
    slug: "time-complexity-intro",
    title: "What is Time Complexity",
    topic: "Algorithm Analysis",
    difficulty: "Easy",
    readMinutes: 8,
    date: "2026-05-04",
    excerpt: "Understanding how we mesure the efficency of our algorithms and why it matters in competitive programming.",
    tags: ["time complexity", "Big O", "analysis"],
    html: `
<h2>So what even is Time Complexity ?</h2>
<p>When we write a solution for a problem the main thing that matters is not just if its correct , it also needs to be fast enough to pass the time limit. This is where time complexity comes in. Basically time complexity is a way we mesure how slow or fast our algorithm is depending on the input size.</p>
 
<h2>Big O Notation</h2>
<p>We use something called Big O notation to express the time complexity of a algorithm. The most common ones you'll see in competitive programming are :</p>
<ul>
  <li><code>O(1)</code> - Constant time , doesnt matter how big the input is the execution takes same amount of time.</li>
  <li><code>O(n)</code> - Linear time , if the input is n the algorithm runs roughly n steps.</li>
  <li><code>O(n^2)</code> - Quadratic time , usually comes from two nested loops.</li>
  <li><code>O(n log n)</code> - This is the sweet spot for most sorting algorithms.</li>
  <li><code>O(log n)</code> - Very efficent , seen in binary search.</li>
</ul>
 
<h2>A simple example</h2>
<p>Lets say you have an array of n elements and you want to find if a specific value exsists in it. The naive way is to loop through all elements one by one :</p>
<pre><code>#include &ltbits/stdc++.h>
using namespace std;
 
int main(){
  int n = 5;
  int arr[] = {3, 1, 4, 1, 5};
  int target = 4;
  
  for(int i = 0; i &lt n; i++){
    if(arr[i] == target){
      cout &lt&lt "Found at index " &lt&lt i;
    }
  }
  return 0;
}</code></pre>
<p>This loop runs n times in the worst case so the time complexity is <code>O(n)</code>. Now if you had two nested loops like this :</p>
<pre><code>for(int i = 0; i &lt n; i++){
  for(int j = 0; j &lt n; j++){
    // some operation
  }
}</code></pre>
<p>This would be <code>O(n^2)</code> since for every element we loop through all elements again.</p>
 
<h2>Why does this matter</h2>
<p>In competitive programming problems usually have a constraint like n &lt= 10^5 or n &lt= 10^6. If you use a O(n^2) solution for n = 10^5 that means 10^10 operations which is way too slow. A rough rule of thumb is that a modern computer can do around 10^8 to 10^9 simple operations per second. So always check your complexity before submitting!</p>
 
<h2>Things to remember</h2>
<ul>
  <li>Always think about the constraints before deciding which approach to use.</li>
  <li>Usually O(n log n) or better is acceptable for n up to 10^6.</li>
  <li>O(n^2) is ok when n is small, like n &lt= 1000 or less.</li>
  <li>We only care about the dominant term so O(n^2 + n) is just O(n^2).</li>
</ul>
 
<blockquote>A correct solution that is too slow is still a wrong solution in competitive programming. Always analyze the complexity first.</blockquote>
`
},
{
    slug: "calculating-complexity",
    title: "How to Calculate Complexity",
    topic: "Algorithm Analysis",
    difficulty: "Easy",
    readMinutes: 7,
    date: "2026-05-04",
    excerpt: "Learning the rules to figure out the time complexity of your own code.",
    tags: ["Big O", "analysis", "loops"],
    html: `
<h2>Calculation rules</h2>
<p>So after knowing what time complexity is the next thing is to actually know how to calculate it for your own code. Dont worry its not that hard once you get the hang of it.</p>
 
<h2>Single loops</h2>
<p>If your code has a single loop that runs from 0 to n the complexity is simply <code>O(n)</code>. For example :</p>
<pre><code>for(int i = 1; i &lt= n; i++){
  // O(1) operation
}</code></pre>
<p>Straight forward right ? The loop runs n times and each iteration does constant work.</p>
 
<h2>Nested loops</h2>
<p>When you have loops inside loops you multiply the complexities. Two nested loops each running n times gives you O(n * n) = <code>O(n^2)</code>.</p>
<pre><code>for(int i = 0; i &lt n; i++){
  for(int j = 0; j &lt n; j++){
    cout &lt&lt i + j; // still O(1)
  }
}</code></pre>
<p>But what if the inner loop depends on i ?</p>
<pre><code>for(int i = 0; i &lt n; i++){
  for(int j = 0; j &lt i; j++){
    cout &lt&lt j;
  }
}</code></pre>
<p>In this case the total operations are 0 + 1 + 2 + ... + (n-1) = n(n-1)/2 which is still <code>O(n^2)</code>.</p>
 
<h2>Consecutive blocks of code</h2>
<p>When you have multiple separate blocks of code you take the maximum of all of them. So if you have a O(n) block followed by a O(n^2) block the overall complexity is <code>O(n^2)</code>. We only care about the part that contributes the most.</p>
 
<h2>Recursive functions</h2>
<p>Recursive functions are a bit more tricky. For a function that calls itself once with half the input each time like binary search the complexity is <code>O(log n)</code>. For something like merge sort that splits in half but does O(n) work at each level its <code>O(n log n)</code>.</p>
 
<h2>Common complexties ordered from best to worst</h2>
<ul>
  <li><code>O(1)</code> - Best possible</li>
  <li><code>O(log n)</code> - Very good</li>
  <li><code>O(n)</code> - Good</li>
  <li><code>O(n log n)</code> - Pretty ok</li>
  <li><code>O(n^2)</code> - Acceptable for small n</li>
  <li><code>O(2^n)</code> - Only for very small inputs</li>
  <li><code>O(n!)</code> - Almost never usable</li>
</ul>
 
<blockquote>Getting good at estimating complexity comes with practice. After doing enough problems you'll start seeing the pattern instantly.</blockquote>
`
  },

 



]

