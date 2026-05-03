window.TUTORIALS = [
  {
    slug: "vscode-setup-guide",
    title: "Setting Up VS Code For CP",
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
    title: "Competitive Programming Intro",
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
    title: "Basics Functions In C++",
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
`
},

{
  slug: "working-with-numbers",
    title: "Working With Numbers In C++",
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
`
},

{
  slug: "Shortnening the code",
  title: "Shortnening The Code In CP",
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
    title: "What Is Time Complexity",
    topic: "Algorithm Analysis",
    difficulty: "Easy",
    readMinutes: 8,
    date: "2026-05-03",
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
    difficulty: "Medium",
    readMinutes: 7,
    date: "2026-05-03",
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

{
    slug: "time-complexity-loops-and-phases",
    title: "Time Complexity Part 1 — Loops & Phases",
    topic: "Time Complexity",
    difficulty: "Easy",
    readMinutes: 7,
    date: "2026-05-03",
    excerpt: "Understanding how to calculate time complexity from loops and consecutive phases of code.",
    tags: ["time complexity", "big O", "loops", "analysis"],
    html: `
<p>Okay so we touched on time complexity earlier but now its time to go deeper. Time complexity is one of the most importent skills in cp because it lets u know if ur solution is fast enough before u even submit. Lets break it down properly.</p>

<h2>What is time complexity</h2>
<p>Time complexity is a way to describe how the running time of ur algorithm grows as the input size n grows. We write it as O(...) and inside the brackets we put a function of n. The key insight is that we only care about the <strong>order of magnitude</strong>, not the exact count.</p>
<p>So if a loop runs exactly 3n times, or n+5 times, or n/2 times — all of these are O(n). We drop constants and lower order terms.</p>

<h2>Single loop = O(n)</h2>
<pre><code>for(int i = 1; i &lt= n; i++){
  // code here runs n times
}</code></pre>
<p>Simple. One loop through n elements = O(n).</p>

<h2>Nested loops = O(n^k)</h2>
<p>If u have k nested loops each going up to n, the complexity is O(n^k) :</p>
<pre><code>// Two nested loops = O(n^2)
for(int i = 1; i &lt= n; i++){
  for(int j = 1; j &lt= n; j++){
    // runs n*n times
  }
}</code></pre>
<pre><code>// Three nested loops = O(n^3)
for(int i = 1; i &lt= n; i++){
  for(int j = 1; j &lt= n; j++){
    for(int k = 1; k &lt= n; k++){
      // runs n*n*n times
    }
  }
}</code></pre>
<p>A tricky example — even if the inner loop doesnt start from 1 every time, the total is still O(n^2) :</p>
<pre><code>for(int i = 1; i &lt= n; i++){
  for(int j = i+1; j &lt= n; j++){
    // total iterations ≈ n^2/2 = O(n^2)
  }
}</code></pre>

<h2>Consecutive phases</h2>
<p>If ur code has multiple phases one after another, the total complexity is just the <strong>slowest phase</strong> :</p>
<pre><code>// Phase 1: O(n)
for(int i = 1; i &lt= n; i++){ ... }

// Phase 2: O(n^2)  
for(int i = 1; i &lt= n; i++){
  for(int j = 1; j &lt= n; j++){ ... }
}

// Phase 3: O(n)
for(int i = 1; i &lt= n; i++){ ... }

// Total = O(n^2) because the slowest phase dominates</code></pre>
<p>This makes intuitive sense — the bottleneck determines the overall speed.</p>

<h2>Multiple variables</h2>
<p>Sometimes complexity depends on more than one variable. If u have nested loops one going to n and one going to m :</p>
<pre><code>for(int i = 1; i &lt= n; i++){
  for(int j = 1; j &lt= m; j++){
    // O(n*m)
  }
}</code></pre>
<p>This is O(nm) not O(n^2) because n and m might be very diferent values.</p>

<h2>Things to remember</h2>
<ul>
  <li>O(1) = constant, doesnt depend on n at all.</li>
  <li>One loop = O(n), two nested loops = O(n^2), three = O(n^3).</li>
  <li>Consecutive phases — take the worst (slowest) one.</li>
  <li>Always drop constants and lower order terms in big O notation.</li>
</ul>

<blockquote>Analyzing time complexity before coding is a habbit that seperates good cp programmers from great ones. Get comfortable with it and it becomes second nature.</blockquote>
`
  },

{
    slug: "time-complexity-recursion",
    title: "Time Complexity Part 2 — Recursion",
    topic: "Time Complexity",
    difficulty: "Easy",
    readMinutes: 6,
    date: "2026-05-04",
    excerpt: "How to figure out the time complexity of recursive functions with examples.",
    tags: ["time complexity", "big O", "recursion", "analysis"],
    html: `
<p>Recursion complexity is a bit trickier than loop complexity but once u get the hang of it its actualy pretty logical. Lets work through it.</p>

<h2>The basic idea</h2>
<p>For a recursive funtion the time complexity = (number of function calls) * (work done per call). So u need to figure out both of these.</p>

<h2>Example 1 — Linear recursion</h2>
<pre><code>void f(int n){
  if(n == 1) return;
  f(n - 1);
}</code></pre>
<p>How many times does f get called? f(n) calls f(n-1) which calls f(n-2) ... all the way down to f(1). Thats n calls total. Each call does O(1) work. So total = n * O(1) = <strong>O(n)</strong>.</p>

<h2>Example 2 — Exponential recursion</h2>
<pre><code>void g(int n){
  if(n == 1) return;
  g(n - 1);
  g(n - 1);
}</code></pre>
<p>This one is scarier. Each call makes TWO recursive calls. Lets count how many calls happen at each level :</p>
<ul>
  <li>Level 0 (n): 1 call</li>
  <li>Level 1 (n-1): 2 calls</li>
  <li>Level 2 (n-2): 4 calls</li>
  <li>...</li>
  <li>Level n-1 (1): 2^(n-1) calls</li>
</ul>
<p>Total = 1 + 2 + 4 + ... + 2^(n-1) = 2^n - 1 = <strong>O(2^n)</strong>. This is exponential and very slow for large n.</p>

<h2>Binary search recursion</h2>
<p>Binary search is a clasic example of O(log n) recursion :</p>
<pre><code>// each call searches half the array
void binarySearch(int arr[], int lo, int hi, int target){
  if(lo > hi) return;
  int mid = (lo + hi) / 2;
  if(arr[mid] == target) return; // found
  if(arr[mid] > target) binarySearch(arr, lo, mid-1, target);
  else binarySearch(arr, mid+1, hi, target);
}</code></pre>
<p>Each call halvs the search range. Starting from n, after k steps we have n / 2^k elements. We stop when this reaches 1, so n / 2^k = 1 means k = log_2(n). So its O(log n) calls, each doing O(1) work = <strong>O(log n)</strong> total.</p>

<h2>Merge sort recursion</h2>
<p>Merge sort is O(n log n). Heres the intuition :</p>
<ul>
  <li>The recursion has O(log n) levels (it halves each time).</li>
  <li>At each level, the total work done across all calls at that level is O(n).</li>
  <li>So total = O(log n) levels * O(n) per level = <strong>O(n log n)</strong>.</li>
</ul>

<h2>Things to remember</h2>
<ul>
  <li>Recursion complexity = number of calls * work per call.</li>
  <li>One recursive call per level → O(n).</li>
  <li>Two recursive calls per level → O(2^n). Extremly dangerous, avoid unless nessasary.</li>
  <li>Halving each call → O(log n).</li>
  <li>Halving but processing all elements at each level → O(n log n).</li>
</ul>

<blockquote>When u write a recursive function always ask urself: how many times does it get called? If ur not sure, draw the call tree. It makes everything much clearer.</blockquote>
`
  },

{
    slug: "sorting-basics",
    title: "Sorting Algorithms In CP",
    topic: "Sorting",
    difficulty: "Easy",
    readMinutes: 10,
    date: "2026-05-03",
    excerpt: "Understanding sorting and why its one of the most important topics in competitive programming.",
    tags: ["sorting", "algorithms", "arrays"],
    html: `
<h2>Why sorting is so importent</h2>
<p>Sorting is literally everywhere in competitive programming. Like a huge chunk of the problems you'll solve will involve sorting in someway. It's becuase when data is sorted alot of operations become much much easier. For example if you want to find duplicate elements in an array , sort it first and then just check adjacent elements.</p>
 
<h2>Bubble Sort (the one we learn first but never use)</h2>
<p>Bubble sort is the simplest sorting algorithm and its the one almost everyone learns first. The idea is to go through the array and swap adjacent elements if they are in the wrong order. You repeat this n times.</p>
<pre><code>#include &ltbits/stdc++.h>
using namespace std;
 
int main(){
  int n = 6;
  int arr[] = {5, 3, 8, 1, 9, 2};
  
  for(int i = 0; i &lt n; i++){
    for(int j = 0; j &lt n-1; j++){
      if(arr[j] > arr[j+1]){
        swap(arr[j], arr[j+1]);
      }
    }
  }
  
  for(int i = 0; i &lt n; i++){
    cout &lt&lt arr[i] &lt&lt " ";
  }
  return 0;
}</code></pre>
<p>This works but the problem is its <code>O(n^2)</code> so for large inputs its completly useless. Please don't use this in actual contests lol.</p>
 
<h2>The real deal - merge sort</h2>
<p>Merge sort is one of the most efficent general sorting algorithms with a time complexity of <code>O(n log n)</code>. The idea behind it is divide and conquer. Split the array in half , sort each half recurcively , then merge them back together.</p>
<p>The key insight is that merging two already sorted arrays can be done in linear time. And since we only have O(log n) levels of recursion the total work is O(n log n).</p>
 
<h2>Just use sort() from STL</h2>
<p>In actual competitive programming almost nobody implements sorting from scratch. C++ has a built in sort function that works in O(n log n) and its really easy to use :</p>
<pre><code>#include &ltbits/stdc++.h>
using namespace std;
 
int main(){
  int arr[] = {5, 3, 8, 1, 9, 2};
  int n = 6;
  
  sort(arr, arr + n);
  
  for(int i = 0; i &lt n; i++){
    cout &lt&lt arr[i] &lt&lt " ";
  }
  return 0;
}</code></pre>
<p>For vectors its even easier :</p>
<pre><code>vector&ltint> v = {5, 3, 8, 1, 9, 2};
sort(v.begin(), v.end());</code></pre>
 
<h2>Sorting in reverse order</h2>
<p>Sometimes you need to sort in descening order. You can do this easily by adding a comparator :</p>
<pre><code>sort(v.begin(), v.end(), greater&ltint>());</code></pre>
 
<h2>Things to remember</h2>
<ul>
  <li>Always use the built in sort() function from STL.</li>
  <li>sort() runs in O(n log n) which is good for most problems.</li>
  <li>Bubble sort is only good for learning , never use it in contests.</li>
  <li>Sorting often simplifies other problems so always think if sorting helps first.</li>
</ul>
 
<blockquote>When stuck on a problem , try sorting the input first. You'll be surprised how many problems become trivial after that.</blockquote>
`
},
 
{
    slug: "complexity-classes-explained",
    title: "Complexity Classes Explained — O(1) To O(n!)",
    topic: "Time Complexity",
    difficulty: "Easy",
    readMinutes: 8,
    date: "2026-05-03",
    excerpt: "A complete walkthrough of all the common time complexity classes in cp from constant time to factorial time.",
    tags: ["time complexity", "big O", "complexity classes"],
    html: `
<p>In cp there are about 8-9 time complexity classes that u'll encounter regulerly. Knowing what each one means in practise — like what algorithm typicaly has that complexity and what input sizes it can handle — is absolutley essential. Lets go through all of them.</p>

<h2>O(1) — Constant time</h2>
<p>The fastest possible. The running time doesnt depend on the input size at all. Typicaly this is a formula or direct lookup. Example : computing n*(n+1)/2 is O(1) regardless of how large n is.</p>

<h2>O(log n) — Logarithmic</h2>
<p>Very fast. These algorithms halve the problem at each step. Binary search, balanced BST lookups, and anything that divides the input in half repeatadly. Can handle n up to 10^18 easily.</p>

<h2>O(√n) — Square root</h2>
<p>Slower than log n but faster than linear. Shows up in prime checking (check divisors up to √n) and some number theory algorithms. Can handle n up to about 10^12 in a second.</p>

<h2>O(n) — Linear</h2>
<p>Goes through the input a constant number of times. A single loop through the array. This is often the best u can hope for since u need to look at each element at least once. Handles n up to about 10^8 in a second.</p>

<h2>O(n log n) — Linearithmic</h2>
<p>The complexity of efficient sorting (merge sort, quicksort). Also appears when u use a sorted data structure (like set or map) inside a loop. Handles n up to about 10^6 comfortably.</p>

<h2>O(n^2) — Quadratic</h2>
<p>Two nested loops. Works fine for n up to about 5000. Bubble sort and insertion sort are O(n^2). For n = 10^4 its getting slow and for n = 10^5 its way too slow.</p>

<h2>O(n^3) — Cubic</h2>
<p>Three nested loops. Only feasible for small n (up to about 500). Floyd-Warshall all-pairs shortest path is a clasic O(n^3) algorithm.</p>

<h2>O(2^n) — Exponential</h2>
<p>Generates all subsets of the input. Only feasible for very small n (up to about 20-25). Brute force subset enumeration.</p>

<h2>O(n!) — Factorial</h2>
<p>Generates all permutations. Even slower than exponential. Only feasible for n up to about 10-12. Brute force permutation check.</p>

<h2>The cheat sheet — input size vs what complexity u need</h2>
<ul>
  <li>n ≤ 10 → O(n!) is ok</li>
  <li>n ≤ 20 → O(2^n) is ok</li>
  <li>n ≤ 500 → O(n^3) is ok</li>
  <li>n ≤ 5000 → O(n^2) is ok</li>
  <li>n ≤ 10^6 → O(n log n) or O(n) needed</li>
  <li>n is huge → O(log n) or O(1) needed</li>
</ul>
<p>This table is extremly usefull in contests. When u see the input constraints u can immediately narrow down what complexities are acceptable and work backwards to find the algorithm.</p>

<h2>Things to remember</h2>
<ul>
  <li>Always check input constraints first and figure out what complexity u can afford.</li>
  <li>A morden computer does about 10^8 to 10^9 simple operations per second.</li>
  <li>When u have a O(n log n) and a O(n^2) solution and n = 10^5, the O(n^2) will TLE.</li>
  <li>O(2^n) and O(n!) are only for tiny inputs, never forget that.</li>
</ul>

<blockquote>The input constraints in a cp problem are basically a hint from the problem setter about what complexity they expect. Learn to read them that way and ur problem solving will get much better.</blockquote>
`
  },

{
    slug: "binary-search-explained",
    title: "Binary Search in C++",
    topic: "Searching",
    difficulty: "Easy",
    readMinutes: 10,
    date: "2026-05-03",
    excerpt: "How to search for elements in a sorted array extremly fast using binary search.",
    tags: ["binary search", "searching", "arrays"],
    html: `
<h2>The problem with linear search</h2>
<p>Imagine you have a sorted array of one million elements and you want to find if a specific number exists. The naive approch is to check every single element one by one which takes O(n) time. For n = 10^6 thats a million operations. Thats not terrible but we can do way better.</p>
 
<h2>How binary search works</h2>
<p>Binary search works only on sorted arrays. The idea is pretty clever. Instead of checking every element we check the middle element first. If the target is smaller than the middle we search the left half, if its bigger we search the right half. Each step we eliminate half the remaining elements.</p>
<p>This means for an array of 1 million elements we only need about 20 steps (log2 of 1 million is around 20). Thats insane compared to a million steps!</p>
 
<h2>Implementing binary search</h2>
<pre><code>#include &ltbits/stdc++.h>
using namespace std;
 
int main(){
  vector&ltint> arr = {1, 3, 5, 7, 9, 11, 13, 15};
  int target = 7;
  
  int left = 0, right = arr.size() - 1;
  
  while(left &lt= right){
    int mid = left + (right - left) / 2; // this way of calculating mid avoids overflow
    
    if(arr[mid] == target){
      cout &lt&lt "Found at index " &lt&lt mid;
      break;
    } else if(arr[mid] &lt target){
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return 0;
}</code></pre>
<p>Note : always use <code>mid = left + (right - left) / 2</code> instead of <code>(left + right) / 2</code>. The second one can cause integer overflow if left and right are both very large!</p>
 
<h2>Using STL binary search</h2>
<p>C++ has built in functions for binary search that work on sorted arrays or vectors :</p>
<pre><code>vector&ltint> v = {1, 3, 5, 7, 9, 11};
sort(v.begin(), v.end()); // make sure its sorted first
 
// check if element exists
bool exists = binary_search(v.begin(), v.end(), 7); // returns true
 
// find first element >= target
auto it = lower_bound(v.begin(), v.end(), 6); // points to 7
 
// find first element > target
auto it2 = upper_bound(v.begin(), v.end(), 7); // points to 9</code></pre>
 
<h2>lower_bound and upper_bound</h2>
<p>These two are super useful in contests. <code>lower_bound</code> gives you an iterator to the first element that is greater than or equal to the target. <code>upper_bound</code> gives the first element that is strictly greater. To get the actual index just subtract v.begin() :</p>
<pre><code>int idx = lower_bound(v.begin(), v.end(), 7) - v.begin();</code></pre>
 
<h2>Things to remember</h2>
<ul>
  <li>Binary search only works on sorted data.</li>
  <li>Time complexity is O(log n) which is extremly fast.</li>
  <li>Use lower_bound and upper_bound from STL instead of writing your own.</li>
  <li>Always calculate mid as left + (right - left) / 2 to avoid overflow.</li>
</ul>
 
<blockquote>Binary search is one of those things that looks simple but has alot of tricky edge cases. Practice implementing it from scratch atleast a few times before relying on the STL version.</blockquote>
`
},

 {
    slug: "vectors-in-cpp",
    title: "Using Vectors In C++",
    topic: "Data Structures",
    difficulty: "Easy",
    readMinutes: 8,
    date: "2026-05-03",
    excerpt: "Everything you need to know about vectors which is probaly the most used data structre in cp.",
    tags: ["vectors", "arrays", "STL", "data structures"],
    html: `
<h2>What is a vector</h2>
<p>A vector is basically a dynamic array. Unlike normal arrays in c++ where you have to know the size beforehand, vectors can grow and shrink as you add or remove elements. This makes them way more flexible and honestly in competitive programming you'll be using vectors almost all the time.</p>
 
<h2>Declaring vectors</h2>
<pre><code>#include &ltbits/stdc++.h>
using namespace std;
 
int main(){
  vector&ltint> v; // empty vector
  vector&ltint> v2(5); // vector of size 5 , all zeros
  vector&ltint> v3(5, 10); // vector of size 5 , all values are 10
  vector&ltint> v4 = {1, 2, 3, 4, 5}; // initialized with values
  
  return 0;
}</code></pre>
 
<h2>Common operations</h2>
<ul>
  <li><code>v.push_back(x)</code> - add element x to the end</li>
  <li><code>v.pop_back()</code> - remove last element</li>
  <li><code>v.size()</code> - returns the number of elements</li>
  <li><code>v[i]</code> - access element at index i</li>
  <li><code>v.front()</code> - first element</li>
  <li><code>v.back()</code> - last element</li>
  <li><code>v.clear()</code> - removes all elements</li>
  <li><code>v.empty()</code> - returns true if vector has no elements</li>
</ul>
 
<pre><code>vector&ltint> v;
v.push_back(3);
v.push_back(7);
v.push_back(1);
 
cout &lt&lt v.size() &lt&lt endl; // 3
cout &lt&lt v[0] &lt&lt endl;    // 3
cout &lt&lt v.back() &lt&lt endl; // 1
 
v.pop_back(); // removes 1
cout &lt&lt v.size() &lt&lt endl; // 2</code></pre>
 
<h2>Iterating through a vector</h2>
<p>There are few ways to loop through a vector :</p>
<pre><code>vector&ltint> v = {1, 2, 3, 4, 5};
 
// Normal loop
for(int i = 0; i &lt v.size(); i++){
  cout &lt&lt v[i] &lt&lt " ";
}
 
// Range based loop (much cleaner)
for(int x : v){
  cout &lt&lt x &lt&lt " ";
}</code></pre>
<p>The range based loop is honestly much cleaner and I personally perfer it when I dont need the index.</p>
 
<h2>2D vectors</h2>
<p>You can also have vectors of vectors which acts like a 2D array :</p>
<pre><code>vector&ltvector&ltint>> grid(3, vector&ltint>(3, 0));
// This creates a 3x3 grid filled with zeros
 
grid[1][2] = 5; // set element at row 1 , col 2</code></pre>
 
<h2>Things to remember</h2>
<ul>
  <li>Always use vectors instead of normal arrays unless you have a specific reason not to.</li>
  <li>push_back is O(1) amortized , so adding elements is fast.</li>
  <li>Accessing by index with v[i] does not do bounds checking , use v.at(i) if you want that (but its slower).</li>
  <li>When passing vectors to functions pass by reference to avoid copying : <code>void func(vector&ltint>& v)</code></li>
</ul>
 
<blockquote>Master vectors and you've already mastered like 60% of what you'll need for data structures in CP.</blockquote>
`
},

  {
    slug: "sets-and-maps",
    title: "Sets And Maps In C++",
    topic: "Data Structures",
    difficulty: "Easy",
    readMinutes: 10,
    date: "2026-05-03",
    excerpt: "Understanding set and map data structures and when to use them in your solutions.",
    tags: ["set", "map", "STL", "data structures"],
    html: `
<h2>Set structures</h2>
<p>A set is a data structure that stores a collection of elements but with one big difference from a vector - it doesn't allow duplicates and it keeps elements in sorted order automatically. All the main operations (inserting, finding, deleting) are done in O(log n) time.</p>
 
<pre><code>#include &ltbits/stdc++.h>
using namespace std;
 
int main(){
  set&ltint> s;
  s.insert(3);
  s.insert(7);
  s.insert(3); // duplicate , wont be added
  s.insert(1);
  
  cout &lt&lt s.size() &lt&lt endl; // 3
  
  // check if element exists
  if(s.count(7)){
    cout &lt&lt "7 is in the set" &lt&lt endl;
  }
  
  s.erase(3); // removes 3
  
  for(int x : s){
    cout &lt&lt x &lt&lt " "; // outputs : 1 7
  }
  return 0;
}</code></pre>
 
<h2>When to use set vs vector</h2>
<p>Use a set when you need to:</p>
<ul>
  <li>Store unique elements only</li>
  <li>Frequently check if an element exists (O(log n) vs O(n) for vector)</li>
  <li>Keep elements in sorted order automatically</li>
</ul>
<p>Use a vector when you need to:</p>
<ul>
  <li>Access elements by index</li>
  <li>Allow duplicates</li>
  <li>Need O(1) access time</li>
</ul>
 
<h2>Map structures</h2>
<p>A map stores key-value pairs where each key is unique. Think of it like a dictionary. You can map any type to any other type. Just like set it keeps keys in sorted order and all main operations are O(log n).</p>
 
<pre><code>#include &ltbits/stdc++.h>
using namespace std;
 
int main(){
  map&ltstring, int> wordCount;
  
  wordCount["hello"] = 1;
  wordCount["world"] = 3;
  wordCount["hello"]++; // now hello = 2
  
  cout &lt&lt wordCount["hello"] &lt&lt endl; // 2
  cout &lt&lt wordCount.size() &lt&lt endl;  // 2
  
  // check if key exists
  if(wordCount.count("hello")){
    cout &lt&lt "hello exists" &lt&lt endl;
  }
  
  // iterate through map
  for(auto p : wordCount){
    cout &lt&lt p.first &lt&lt " : " &lt&lt p.second &lt&lt endl;
  }
  return 0;
}</code></pre>
 
<h2>Unordered versions for speed</h2>
<p>C++ also has <code>unordered_set</code> and <code>unordered_map</code> which use hashing internally and give O(1) average time for operations instead of O(log n). But they dont keep elements in sorted order. Use these when order doesn't matter and you need maximum speed.</p>
<pre><code>unordered_map&ltstring, int> um;
um["hello"] = 5;
cout &lt&lt um["hello"]; // 5 , accessed in O(1) average</code></pre>
<p>Warning : in worst case unordered containers can be O(n) due to hash collisions. In most contest problems this doesnt happen but something to keep in mind.</p>
 
<h2>Things to remember</h2>
<ul>
  <li>Set automatically removes duplicates and keeps sorted order.</li>
  <li>Map is perfect for counting frequencies or storing associations.</li>
  <li>Use unordered versions if you need faster access and don't need ordering.</li>
  <li>All set and map operations are O(log n) for ordered versions.</li>
</ul>
 
<blockquote>Maps and sets are your best friends when solving problems that involve frequency counting or membership queries.</blockquote>
`
},

{
    slug: "iterators-and-ranges",
    title: "Iterators And Ranges In C++",
    topic: "Data Structures",
    difficulty: "Easy",
    readMinutes: 5-7,
    date: "2026-05-03",
    excerpt: "Understanding what iterators are and how u use them to work with STL containers in cp.",
    tags: ["iterators", "STL", "ranges", "data structures"],
    html: `
<p>Umm so if u have been using vectors and sets for a while u have probaly seen words like <code>v.begin()</code> and <code>v.end()</code> and wondered what those actualy are. Well those are iterators and they are actually a pretty importent concept to understand if u want to use STL properly.</p>
 
<h2>So what is an iterator</h2>
<p>An iterator is basically like a pointer that points to an element inside a container. U can think of it like an index but more generalized so it works with any STL container not just arrays. Every STL container like vector, set, map etc has iterators.</p>
 
<p>The two most importent iterators every container has are :</p>
<ul>
    <li><code>begin()</code> - points to the first element of the container</li>
    <li><code>end()</code> - points to one position past the last element (not the last element itself, the position after it)</li>
</ul>
 
<h2>Using iterators with a vector</h2>
<pre><code>#include &ltbits/stdc++.h>
using namespace std;
 
int main(){
    vector&ltint> v = {3, 1, 4, 1, 5};
 
    vector&ltint>::iterator it = v.begin();
    cout &lt&lt *it &lt&lt "\n";
 
    it++;
    cout &lt&lt *it &lt&lt "\n";
 
    return 0;
}</code></pre>
<p>So here <code>it</code> is an iterator, <code>*it</code> gives u the value it points to (just like dereferencing a pointer), and <code>it++</code> moves it to the next element. Writing the full type <code>vector&ltint>::iterator</code> is honestly annoying so most people just use <code>auto</code> :</p>
<pre><code>auto it = v.begin();
cout &lt&lt *it &lt&lt "\n";</code></pre>
 
<h2>Iterating through a container using iterators</h2>
<pre><code>vector&ltint> v = {3, 1, 4, 1, 5};
 
for(auto it = v.begin(); it != v.end(); it++){
    cout &lt&lt *it &lt&lt " ";
}</code></pre>
<p>This is the explicit iterator loop. Most of the time u'll just use the range based for loop which is cleaner but its good to know this way too becuase sometimes u actualy need the iterator itself not just the value.</p>
 
<h2>Why iterators matter in cp</h2>
<p>Iterators are needed whenever u use STL functions like <code>sort</code>, <code>lower_bound</code>, <code>upper_bound</code> etc. These functions all take iterators as arguements. For example :</p>
<pre><code>vector&ltint> v = {5, 2, 8, 1, 9};
sort(v.begin(), v.end());
 
auto it = lower_bound(v.begin(), v.end(), 5);
cout &lt&lt *it &lt&lt "\n";</code></pre>
<p>Also when u want to erase a specific element from a vector u need an iterator :</p>
<pre><code>v.erase(v.begin() + 2);</code></pre>
<p>This erases the element at index 2. The <code>v.begin() + 2</code> part is doing pointer arithmetic on the iterator to get to posistion 2.</p>
 
<h2>Things to remember</h2>
<ul>
    <li><code>begin()</code> points to first element, <code>end()</code> points past the last one.</li>
    <li>Use <code>auto</code> instead of writing the full iterator type, its much shorter.</li>
    <li>Dereference an iterator with <code>*it</code> to get the value.</li>
    <li>Most STL algorithmns take iterators so u need to understand this.</li>
</ul>
 
<blockquote>Iterators are one of those things that feel wierd at first but become second nature after using them enough.</blockquote>
`
  },
 
 {
    slug: "stack-in-cpp",
    title: "Stack In C++",
    topic: "Data Structures",
    difficulty: "Easy",
    readMinutes: 6,
    date: "2026-05-03",
    excerpt: "Learning about the stack data structure and when to use it in your cp solutions.",
    tags: ["stack", "STL", "data structures"],
    html: `
<p>Alright so after vectors, sets and maps lets talk about some other data structures that come up quite often in cp. First up is the stack. A stack is one of those structures that sounds simple but is actually used in alot of suprising places once u get into more advanced problems.</p>
 
<h2>What is a stack</h2>
<p>A stack follows the LIFO principle which stands for Last In First Out. Think of it like a stack of plates. The last plate u put on top is the first one u take off. U can only add or remove from the top, u cant access elements in the middle.</p>
 
<p>The main operations on a stack are :</p>
<ul>
    <li><code>push(x)</code> - add element x to the top</li>
    <li><code>pop()</code> - remove the top element</li>
    <li><code>top()</code> - see the top element without removing it</li>
    <li><code>empty()</code> - check if stack is emptey</li>
    <li><code>size()</code> - number of elements in the stack</li>
</ul>
 
<h2>Using stack in c++</h2>
<pre><code>#include &ltbits/stdc++.h>
using namespace std;
 
int main(){
    stack&ltint> s;
 
    s.push(3);
    s.push(7);
    s.push(1);
 
    cout &lt&lt s.top() &lt&lt "\n";
 
    s.pop();
 
    cout &lt&lt s.top() &lt&lt "\n";
    cout &lt&lt s.size() &lt&lt "\n";
 
    return 0;
}</code></pre>
<p>So the output here would be 1 then 7 then 2. Because 1 was the last thing pushed so its on top. After popping 1, now 7 is on top.</p>
 
<h2>One importent thing about pop()</h2>
<p>In c++ <code>pop()</code> removes the top element but it does NOT return it. This suprises alot of people. So if u want to use the top element before removing it u have to do it in two steps :</p>
<pre><code>int val = s.top();
s.pop();
</code></pre>
<p>Dont try to do <code>int val = s.pop()</code> it wont work.</p>
 
<h2>When is a stack useful</h2>
<p>Stacks are used in alot of classic problems like :</p>
<ul>
    <li>Checking if brackets are balanced in an expression</li>
    <li>Converting infix expressions to postfix</li>
    <li>Implementing depth first search iterativly</li>
    <li>Finding the nearest smaller or larger element problems</li>
</ul>
<p>The brackt balancing problem is a super classic one. U push opening brackets onto the stack and when u see a closing bracket u check if the top of the stack has the matching opening bracket. If at the end the stack is empty the brackets are balanced.</p>
 
<h2>Things to remember</h2>
<ul>
    <li>Stack is LIFO - last in first out.</li>
    <li>Use <code>top()</code> to see the top element before using <code>pop()</code>.</li>
    <li><code>pop()</code> does not return the value, it just removes it.</li>
    <li>Always check <code>empty()</code> before calling <code>top()</code> or <code>pop()</code> to avoid crashing.</li>
</ul>
 
<blockquote>The stack is deceptivly simple but it shows up in so many problems. Once u start recognizing the pattern u'll see it everywhere.</blockquote>
`
  },

{
    slug: "queue-in-cpp",
    title: "Queue In C++",
    topic: "Data Structures",
    difficulty: "Easy",
    readMinutes: 6,
    date: "2026-05-03",
    excerpt: "Understanding the queue data structure in c++ and where u will use it in competitive programming.",
    tags: ["queue", "STL", "data structures", "BFS"],
    html: `
<p>So we just covered the stack and now lets talk about its cousin the queue. While stack is LIFO, a queue is the opposite. It follows FIFO which stands for First In First Out. Think of it like a line of people waiting , the first person who joined the line is the first one to leave.</p>
 
<h2>Basic queue operations</h2>
<ul>
    <li><code>push(x)</code> - add element x to the back of the queue</li>
    <li><code>pop()</code> - remove the element from the front</li>
    <li><code>front()</code> - see the front element without removing it</li>
    <li><code>back()</code> - see the last element</li>
    <li><code>empty()</code> - check if queue is emptey</li>
    <li><code>size()</code> - number of elements</li>
</ul>
 
<h2>Using queue in c++</h2>
<pre><code>#include &ltbits/stdc++.h>
using namespace std;
 
int main(){
    queue&ltint> q;
 
    q.push(3);
    q.push(7);
    q.push(1);
 
    cout &lt&lt q.front() &lt&lt "\n";
 
    q.pop();
 
    cout &lt&lt q.front() &lt&lt "\n";
    cout &lt&lt q.size() &lt&lt "\n";
 
    return 0;
}</code></pre>
<p>Output here is 3 then 7 then 2. Because 3 was pushed first so its at the front. After popping 3, now 7 is at the front.</p>
 
<h2>Same issue as stack - pop() doesnt return</h2>
<p>Just like stack, <code>pop()</code> in queue also does NOT return the value. So same pattern applies :</p>
<pre><code>int val = q.front();
q.pop();
</code></pre>
 
<h2>Where u actually use queues in cp</h2>
<p>The most importent use of queue in competitive programing is in BFS which stands for Breadth First Search. BFS is a graph traversal algorithm and the queue is essentialy what makes it work. U add nodes to the queue, process the front one, add its unvisited neighbors to the back, and repeat until the queue is emptey.</p>
<pre><code>queue&ltint> q;
q.push(startNode);
 
while(!q.empty()){
    int node = q.front();
    q.pop();
 
    for(int neighbor : graph[node]){
        if(!visited[neighbor]){
            visited[neighbor] = true;
            q.push(neighbor);
        }
    }
}</code></pre>
<p>We'll get into BFS in detail in its own tutorial but just know that queue is absolutly essential for it.</p>
 
<h2>Things to remember</h2>
<ul>
    <li>Queue is FIFO - first in first out.</li>
    <li>Use <code>front()</code> to see the front element before <code>pop()</code>.</li>
    <li>Queue is the backbone of BFS so learn it well.</li>
    <li>Always check <code>empty()</code> before accessing front or popping.</li>
</ul>
 
<blockquote>Queue might seem simple right now but when u get to graph problems u'll realise how cruicial it is. Make sure u know it cold.</blockquote>
`
  },

{
    slug: "priority-queue-in-cpp",
    title: "Priority Queue In C++",
    topic: "Data Structures",
    difficulty: "Easy",
    readMinutes: 8,
    date: "2026-05-03",
    excerpt: "Learning about priority queue which is basically a heap and is one of the most usefull structures in cp.",
    tags: ["priority queue", "heap", "STL", "data structures"],
    html: `
<p>Okay so we did stack and queue now lets talk about one of the most usefull data structres in competitive programming which is the priority queue. This one is a bit different from the normal queue. Instead of FIFO, a priority queue always gives u the largest (or smallest) element first regardless of the order u inserted them.</p>
 
<h2>What is a priority queue</h2>
<p>A priority queue is internally implemented as a heap data structure. The default priority queue in c++ is a max heap which means the largest element is always at the top. All insertions and removals are done in O(log n) time which is pretty efficeint.</p>
 
<h2>Basic operations</h2>
<ul>
    <li><code>push(x)</code> - add element x</li>
    <li><code>pop()</code> - remove the top (largest) element</li>
    <li><code>top()</code> - see the top element without removing</li>
    <li><code>empty()</code> - check if emptey</li>
    <li><code>size()</code> - number of elements</li>
</ul>
 
<h2>Max heap example</h2>
<pre><code>#include &ltbits/stdc++.h>
using namespace std;
 
int main(){
    priority_queue&ltint> pq;
 
    pq.push(3);
    pq.push(7);
    pq.push(1);
    pq.push(9);
    pq.push(2);
 
    while(!pq.empty()){
        cout &lt&lt pq.top() &lt&lt " ";
        pq.pop();
    }
 
    return 0;
}</code></pre>
<p>Output : 9 7 3 2 1. So no matter what order we inserted the elements, they always come out largest first. Pretty cool right.</p>
 
<h2>Min heap - getting smallest first</h2>
<p>In cp u often need the smallest element first instead of the largest. To make a min heap in c++ u do this :</p>
<pre><code>priority_queue&ltint, vector&ltint>, greater&ltint>> minpq;
 
minpq.push(3);
minpq.push(7);
minpq.push(1);
 
cout &lt&lt minpq.top() &lt&lt "\n";</code></pre>
<p>The output is 1 because its the smallest. The syntax looks a bit wierd with the three template arguements but just memorize it, u'll use it alot.</p>
 
<h2>When to use priority queue in cp</h2>
<p>The main place priority queue shows up is in Dijkstra's algorithm for finding shortest paths in a graph. But it also comes up whenever u need to repeatedly get the minimum or maximum element from a changing collection. For example :</p>
<ul>
    <li>Scheduling tasks by priority</li>
    <li>Finding the k largest or k smallest elements</li>
    <li>Greedy algorithms where u always pick the best availible option</li>
    <li>Dijkstra's shortest path algorithm</li>
</ul>
 
<h2>Things to remember</h2>
<ul>
    <li>Default priority_queue is a max heap, largest element at top.</li>
    <li>For min heap use <code>priority_queue&ltint, vector&ltint>, greater&ltint>></code>.</li>
    <li>push and pop are O(log n).</li>
    <li>pop() does not return the value, use top() first then pop().</li>
</ul>
 
<blockquote>Priority queue is one of those structres that once u learn it u'll keep finding new uses for. Especialy once u start doing graph problems.</blockquote>
`
  },
 
  {
    slug: "deque-in-cpp",
    title: "Deque In C++",
    topic: "Data Structures",
    difficulty: "Easy",
    readMinutes: 6,
    date: "2026-05-03",
    excerpt: "What is a deque and why its useful when u need to add or remove elements from both ends efficently.",
    tags: ["deque", "STL", "data structures"],
    html: `
<p>So we covered stack, queue and priority queue. Now theres one more structure worth knowing called the deque. The name stands for double ended queue and as u can guess it lets u add and remove elements from both the front and the back. This makes it more flexible than a regular queue where u can only add to back and remove from front.</p>
 
<h2>Operations on deque</h2>
<ul>
    <li><code>push_back(x)</code> - add to the back</li>
    <li><code>push_front(x)</code> - add to the front</li>
    <li><code>pop_back()</code> - remove from the back</li>
    <li><code>pop_front()</code> - remove from the front</li>
    <li><code>front()</code> - see the front element</li>
    <li><code>back()</code> - see the back element</li>
    <li><code>size()</code> and <code>empty()</code> work the same as other containers</li>
</ul>
<p>And unlike a regular queue u can also acess elements by index with <code>dq[i]</code> which is nice.</p>
 
<h2>Using deque in c++</h2>
<pre><code>#include &ltbits/stdc++.h>
using namespace std;
 
int main(){
    deque&ltint> dq;
 
    dq.push_back(5);
    dq.push_back(6);
    dq.push_front(3);
    dq.push_front(1);
 
    for(int x : dq){
        cout &lt&lt x &lt&lt " ";
    }
    cout &lt&lt "\n";
 
    dq.pop_front();
    dq.pop_back();
 
    cout &lt&lt dq.front() &lt&lt " " &lt&lt dq.back() &lt&lt "\n";
 
    return 0;
}</code></pre>
<p>So after the pushes the deque contains 1 3 5 6. After popping from front and back we're left with 3 5.</p>
 
<h2>When would u use a deque</h2>
<p>Deque is honestly not used as often as vector or stack in basic cp but it becomes really importent in a specific technique called the sliding window minimum problem. The idea is u use a deque to keep track of the minimum element in a window of size k as the window slides across the array. This gives u an O(n) solution for a problem that would otherwise be O(nk).</p>
<p>Also deque is used internally in the implementation of BFS in some cases, and whenever u genuinly need efficient operations at both ends of a sequence.</p>
 
<h2>Deque vs vector</h2>
<p>Vector is good for adding to the back but adding to the front is O(n) because it needs to shift all elements. Deque does both front and back operations in O(1). But deque uses a bit more memory and is slightly slower to access by index than vector so use vector when u only need back operations.</p>
 
<h2>Things to remember</h2>
<ul>
    <li>Deque = double ended queue, efficient at both front and back.</li>
    <li>push_front and pop_front are O(1) unlike vector.</li>
    <li>U can still access by index with dq[i].</li>
    <li>Main use case in cp is the sliding window minimum pattern.</li>
</ul>
 
<blockquote>Deque is one of those structures that u won't use every day but when u need it there is realy no substitute. Keep it in ur toolkit.</blockquote>
`
  },

{
    slug: "sum-formulas-in-cp",
    title: "Sum Formulas You Need To Know In CP",
    topic: "Mathematics",
    difficulty: "Easy",
    readMinutes: 6,
    date: "2026-05-03",
    excerpt: "Learning the basic sum formulas that show up again and again in competitive programming problems.",
    tags: ["math", "sums", "formulas", "basics"],
    html: `
<p>Okay so math is a huge part of competitive programming and theres no way around it. U dont need to be a math genius but u do need to know some basic formulas and concepts realy well. Lets start with sum formulas because these come up all the time.</p>

<h2>Sum of 1 to N</h2>
<p>The most classic formula u'll ever see in cp is the sum of all integers from 1 to n :</p>
<pre><code>1 + 2 + 3 + ... + n = n * (n + 1) / 2</code></pre>
<p>For example the sum of 1 to 100 is 100 * 101 / 2 = 5050. This formula was famously discoverd by Gauss when he was like 10 years old so theres no excuse not to know it. U'll use this so many times in cp.</p>
<p>In c++ u can compute this in O(1) :</p>
<pre><code>#include &ltbits/stdc++.h>
using namespace std;

int main(){
  long long n;
  cin >> n;
  cout &lt&lt n * (n + 1) / 2 &lt&lt "\n";
  return 0;
}</code></pre>
<p>Notice I used long long here because n * (n+1) can overflow int if n is large.</p>

<h2>Sum of squares</h2>
<p>Sometimes u need the sum of squares from 1 to n :</p>
<pre><code>1^2 + 2^2 + 3^2 + ... + n^2 = n * (n + 1) * (2n + 1) / 6</code></pre>
<p>This one is less common than the basic sum but it does show up ocasionaly in math problems so its good to have it memorised.</p>

<h2>Arithmetic progression sum</h2>
<p>An arithmetic progression is just a sequence where the difference between any two consecutive numbers is constant. Like 3, 7, 11, 15 has a constant differance of 4. The sum of an arithematic progression is :</p>
<pre><code>sum = n * (first + last) / 2</code></pre>
<p>Where n is the count of numbers, first is the first number and last is the last number. So for 3 + 7 + 11 + 15 we have 4 numbers, first = 3, last = 15, so sum = 4 * (3 + 15) / 2 = 36. Pretty straitforward.</p>

<h2>Geometric progression sum</h2>
<p>A geometric progression is a sequence where consecutive numbers have a constant ratio. Like 3, 6, 12, 24 has a ratio of 2. The sum formula is :</p>
<pre><code>sum = (last * ratio - first) / (ratio - 1)</code></pre>
<p>So for 3 + 6 + 12 + 24 with ratio 2 the sum is (24 * 2 - 3) / (2 - 1) = 45. A speciel case that comes up alot is :</p>
<pre><code>1 + 2 + 4 + 8 + ... + 2^(n-1) = 2^n - 1</code></pre>
<p>This shows up constanty in bit manipulation and subset problems so definitly memorize it.</p>

<h2>Things to remember</h2>
<ul>
  <li>Sum 1 to n = n*(n+1)/2. Always use long long for this.</li>
  <li>Arithmetic progression sum = count * (first + last) / 2.</li>
  <li>Geometric sum formula is useful but less common than the others.</li>
  <li>The formula 1+2+4+...+2^(n-1) = 2^n - 1 is extreamly useful in bit problems.</li>
</ul>

<blockquote>Memorizing these formulas is non-negotiable. At some point in a contest u'll see a problem where recognizing one of these instantly saves u 20 minutes.</blockquote>
`
  },

{
    slug: "set-theory-basics-for-cp",
    title: "Set Theory Basics For CP",
    topic: "Mathematics",
    difficulty: "Easy",
    readMinutes: 6,
    date: "2026-05-03",
    excerpt: "Understanding sets, unions, intersections and why this stuff actualy matters in competitive programming.",
    tags: ["math", "sets", "theory", "basics"],
    html: `
<p>Set theory might sound like boring pure math stuff but its actualy realy usefull for understanding problems in cp. Lets go through the basic concepts.</p>

<h2>What is a set</h2>
<p>A set is just a collection of distinct elements. For example X = {2, 4, 7} is a set with three elements. The importent thing is that sets dont have duplicates and the order doesnt matter. So {2, 4, 7} and {7, 2, 4} are the same set.</p>
<p>Some notation u need to know :</p>
<ul>
  <li><code>x ∈ S</code> means x is in set S. Example: 4 ∈ {2, 4, 7} is true.</li>
  <li><code>x ∉ S</code> means x is not in set S. Example: 5 ∉ {2, 4, 7} is true.</li>
  <li><code>|S|</code> means the size of the set. Example: |{2, 4, 7}| = 3.</li>
  <li><code>∅</code> is the empty set with no elements.</li>
</ul>

<h2>Set operations</h2>
<p>There are four main operations u can do with sets :</p>
<ul>
  <li><strong>Intersection A ∩ B</strong> : elements that are in BOTH A and B. Like if A = {1, 2, 5} and B = {2, 4} then A ∩ B = {2}.</li>
  <li><strong>Union A ∪ B</strong> : elements that are in A OR B or both. Like if A = {3, 7} and B = {2, 3, 8} then A ∪ B = {2, 3, 7, 8}.</li>
  <li><strong>Complement Ā</strong> : elements that are NOT in A (from some universal set).</li>
  <li><strong>Difference A \ B</strong> : elements in A but not in B. Like if A = {2, 3, 7, 8} and B = {3, 5, 8} then A \ B = {2, 7}.</li>
</ul>
<p>These opperations directly corresspond to the c++ set operations we already covered. Intersection is like checking membership in both sets, union is combining two sets etc.</p>

<h2>Subsets</h2>
<p>A is a subset of S (written A ⊂ S) if every element of A is also in S. An importent fact is that a set with n elements has exactly <strong>2^n subsets</strong>. For example {2, 4, 7} has 2^3 = 8 subsets :</p>
<ul>
  <li>∅, {2}, {4}, {7}, {2,4}, {2,7}, {4,7}, {2,4,7}</li>
</ul>
<p>This 2^n fact is extreamly importent in cp especially in complete search and bit manipulation problems. Whenever u see a problem asking u to consider all posible subsets u know the search space is 2^n.</p>

<h2>Common number sets</h2>
<p>Theres some standerd notation for common sets of numbers :</p>
<ul>
  <li><strong>N</strong> = natural numbers (0, 1, 2, 3, ...)</li>
  <li><strong>Z</strong> = integers (..., -2, -1, 0, 1, 2, ...)</li>
  <li><strong>Q</strong> = rational numbers (fractions like 1/2, 3/4)</li>
  <li><strong>R</strong> = real numbers (including irrationals like π)</li>
</ul>
<p>U'll see this notation in problem statments sometimes, especially in more math-heavy problems.</p>

<h2>Things to remember</h2>
<ul>
  <li>A set has no duplicates and order doesnt matter.</li>
  <li>Know the four operations: union, intersection, complement, differance.</li>
  <li>A set with n elements has exactly 2^n subsets - this is cruciel for cp.</li>
  <li>∅ is the empty set and it is a subset of every set.</li>
</ul>

<blockquote>Set theory is the language that algorithms are described in. The better u understand it the easier it is to read and understand new algoritms when u encounter them.</blockquote>
`
  },
 
{
    slug: "logic-and-quantifiers-for-cp",
    title: "Logic & Quantifiers — The Language Of Algorithms",
    topic: "Mathematics",
    difficulty: "Easy",
    readMinutes: 5,
    date: "2026-05-03",
    excerpt: "Understanding basic logic operators and quantifiers which are used to describe algorithms and problem conditions.",
    tags: ["math", "logic", "quantifiers", "basics"],
    html: `
<p>So logic is basicaly the foundation of all of computer science. When u read a problem statement u are esentialy parsing a bunch of logical conditions. Lets learn the basic stuff.</p>

<h2>Logical operators</h2>
<p>A logical expression is either true (1) or false (0). The main operators are :</p>
<ul>
  <li><strong>NOT (¬)</strong> : flips the value. ¬true = false, ¬false = true. In c++ this is <code>!</code></li>
  <li><strong>AND (∧)</strong> : true only if BOTH sides are true. In c++ this is <code>&&</code></li>
  <li><strong>OR (∨)</strong> : true if at LEAST ONE side is true. In c++ this is <code>||</code></li>
  <li><strong>Implication (⇒)</strong> : "A implies B" means if A is true then B must be true. A⇒B is only false when A is true and B is false.</li>
  <li><strong>Equivalence (⇔)</strong> : true when both sides have the same value. In c++ this is <code>==</code> for booleans.</li>
</ul>
<p>These map directly to c++ boolean operaters. So understanding this math notation makes reading algorithm descriptons much easier.</p>

<h2>Quantifiers</h2>
<p>Quantifiers are words that say "for all" or "there exists". In math notation :</p>
<ul>
  <li><strong>∀ (for all)</strong> : the condition holds for every element. Like "∀x, x*2 is even" means for all numbers x, x*2 is even.</li>
  <li><strong>∃ (there exists)</strong> : at least one element satisfies the condition. Like "∃x such that x^2 = 4" means there exists a number x where x squared equals 4 (which is true, x = 2).</li>
</ul>
<p>In c++ code ∀ is basically a for loop that checks all elements, and ∃ is a for loop that looks for at least one element :</p>
<pre><code>// ∀x in array: x > 0 (all elements positive)
bool allPositive = true;
for(int x : arr){
  if(x &lt= 0){ allPositive = false; break; }
}

// ∃x in array: x > 0 (some element positive)
bool somePositive = false;
for(int x : arr){
  if(x > 0){ somePositive = true; break; }
}</code></pre>

<h2>Predicates</h2>
<p>A predicate is just a funtion that returns true or false depending on its input. For example P(x) = "x is a prime number" is a predicate. P(7) is true, P(8) is false. U use predicates all the time when writing conditions in ur code even if u dont call them that.</p>

<h2>Things to remember</h2>
<ul>
  <li>AND = &&, OR = ||, NOT = ! in c++.</li>
  <li>∀ means "for all" — implemented as a loop that checks everything.</li>
  <li>∃ means "there exists" — implemented as a loop that can stop early.</li>
  <li>Implication A⇒B is only false when A is true and B is false, not the otherway around.</li>
</ul>

<blockquote>Once u start reading algorithm proofs and problem editorals u'll see this notation constanty. Dont let it scare u — its just a precise way to say things that u already understand intuitevly.</blockquote>
`
  },

{
    slug: "logarithms-for-cp",
    title: "Logarithms — Why They Matter In CP",
    topic: "Mathematics",
    difficulty: "Easy",
    readMinutes: 6,
    date: "2026-05-03",
    excerpt: "Understanding logarithms intuitively and why O(log n) algorithms are so powerfull in competitive programming.",
    tags: ["math", "logarithms", "complexity", "basics"],
    html: `
<p>Logarithms are one of those things that confuse people in school but in cp they become realy natural once u see how they connect to algorithms. Lets understand them properly.</p>

<h2>What is a logarithm</h2>
<p>The logarithm log_k(x) answers the question : how many times do u need to divide x by k before u reach 1? For example log_2(32) = 5 because :</p>
<pre><code>32 → 16 → 8 → 4 → 2 → 1 (5 divisions by 2)</code></pre>
<p>Another way to think about it : log_k(x) = a means k^a = x. So log_2(8) = 3 because 2^3 = 8. Pretty simle once u see it that way.</p>

<h2>Why logarithms appear in algorithms</h2>
<p>Logarithms show up in algorithm analysis because many efficent algorithms cut the problem size in half at each step. If u start with n elements and keep halving, u need about log_2(n) steps to get down to 1 element. This is exacty why binary search is O(log n) — it halvs the search space each time.</p>
<p>This is also why balanced tree operations like insert and search in a <code>set</code> are O(log n). The tree has about log_2(n) levels and u only traverse one path from root to leaf.</p>

<h2>Important log properties</h2>
<p>U dont need to derive these just know them :</p>
<ul>
  <li>log(a * b) = log(a) + log(b)</li>
  <li>log(a^n) = n * log(a)</li>
  <li>log(a / b) = log(a) - log(b)</li>
  <li>log base change: log_u(x) = log_k(x) / log_k(u)</li>
</ul>
<p>The base change formula is usefull because computers usualy calculate natural log (base e) or log base 10, but u might need log base 2. In c++ u can use <code>log2(x)</code> directly from the cmath library.</p>

<h2>Logarithms in c++</h2>
<pre><code>#include &ltbits/stdc++.h>
using namespace std;

int main(){
  double x = 32;
  cout &lt&lt log2(x) &lt&lt "\n";   // 5 (log base 2)
  cout &lt&lt log10(x) &lt&lt "\n";  // ~1.505 (log base 10)
  cout &lt&lt log(x) &lt&lt "\n";    // ~3.465 (natural log, base e)
  return 0;
}</code></pre>
<p>In cp u often use log2 to figure out how many bits a number needs or how deep a recursion tree will go.</p>

<h2>How many digits does a number have</h2>
<p>A usefull formula : the number of digits of x in base b is floor(log_b(x)) + 1. So the number of digits of 123 in base 10 is floor(log_10(123)) + 1 = floor(2.089) + 1 = 2 + 1 = 3. Which is corect, 123 has 3 digits.</p>

<h2>Things to remember</h2>
<ul>
  <li>log_2(n) = how many times u can halve n before reaching 1.</li>
  <li>Any algorithm that halves the input each step is O(log n).</li>
  <li>log_2(1000) ≈ 10, log_2(10^6) ≈ 20, log_2(10^9) ≈ 30. These are usefull to know.</li>
  <li>Use <code>log2(x)</code> in c++ for base 2 logarithms.</li>
</ul>

<blockquote>When u see O(log n) in complexity analysis, think "this algorithm is dividing the problem in half over and over". That intuition will serve u well across hundreds of problems.</blockquote>
`
  },

{
    slug: "fibonacci-and-factorial",
    title: "Fibonacci Numbers & Factorials In CP",
    topic: "Mathematics",
    difficulty: "Easy",
    readMinutes: 6,
    date: "2026-05-03",
    excerpt: "Two of the most common mathematical sequences in cp — fibonacci numbers and factorials and how to compute them efficently.",
    tags: ["math", "fibonacci", "factorial", "recursion"],
    html: `
<p>Two sequences come up absolutley constanty in cp — fibonacci numbers and factorials. Lets look at both and how to handle them efficently in c++.</p>

<h2>Factorials</h2>
<p>The factorial of n (written n!) is the product of all integers from 1 to n :</p>
<pre><code>n! = 1 * 2 * 3 * ... * n</code></pre>
<p>And the special case is 0! = 1. Factorials grow extreamely fast. 20! is already about 2.4 * 10^18 which barely fits in a long long. So u almost always compute factorials modulo some number in cp.</p>
<pre><code>#include &ltbits/stdc++.h>
using namespace std;

int main(){
  int n;
  cin >> n;
  long long mod = 1e9 + 7;
  long long fact = 1;
  for(int i = 2; i &lt= n; i++){
    fact = (fact * i) % mod;
  }
  cout &lt&lt fact &lt&lt "\n";
  return 0;
}</code></pre>
<p>This computes n! mod 10^9+7 efficently in O(n) time. Precomputing factorials into an array is also very usefull if u need factorials for multiple queries.</p>

<h2>Fibonacci numbers</h2>
<p>Fibonacci numbers are defined by this recursion :</p>
<pre><code>f(0) = 0
f(1) = 1
f(n) = f(n-1) + f(n-2)</code></pre>
<p>So the sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ... Each number is the sum of the two before it.</p>
<p>The naive recursive way to compute fib(n) is O(2^n) which is horibley slow. The correct way is to use a simple loop :</p>
<pre><code>#include &ltbits/stdc++.h>
using namespace std;

int main(){
  int n;
  cin >> n;
  long long a = 0, b = 1;
  for(int i = 2; i &lt= n; i++){
    long long c = a + b;
    a = b;
    b = c;
  }
  cout &lt&lt b &lt&lt "\n";
  return 0;
}</code></pre>
<p>This is O(n) and uses O(1) memory which is perfect.</p>

<h2>Fibonacci grows fast too</h2>
<p>Fibonacci numbers also grow very quickly. fib(93) is already larger than what fits in a long long. So again u'll often compute fibonacci numbers modulo some value. Just add % mod inside the loop.</p>

<h2>Binets formula</h2>
<p>There actualy is a closed-form formula for fibonacci called Binet's formula but it involves square roots and floating point which makes it tricky in cp due to precision issues. The iterative loop approach is almost always better and more reliable.</p>

<h2>Things to remember</h2>
<ul>
  <li>Always compute factorials with modulo since they grow extremly fast.</li>
  <li>Precompute factorials into an array if u need them repeatadly.</li>
  <li>Use the iterative approach for fibonacci, not naive recursion.</li>
  <li>fib and factorial both exceed long long very quickly so always think about overflow.</li>
</ul>

<blockquote>Fibonacci and factorial are everywhere in combinatorics, dp and math problems. Knowing how to compute them fast and correctly is just a basic tool u need in ur kit.</blockquote>
`
  },
 




]