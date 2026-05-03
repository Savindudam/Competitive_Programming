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
{
    slug: "sorting-basics",
    title: "Sorting Algorithms in CP",
    topic: "Sorting",
    difficulty: "Easy",
    readMinutes: 10,
    date: "2026-05-05",
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
    slug: "binary-search-explained",
    title: "Binary Search in C++",
    topic: "Searching",
    difficulty: "Easy",
    readMinutes: 10,
    date: "2026-05-05",
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
    title: "Using Vectors in C++",
    topic: "Data Structures",
    difficulty: "Easy",
    readMinutes: 8,
    date: "2026-05-06",
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
    title: "Sets and Maps in C++",
    topic: "Data Structures",
    difficulty: "Easy",
    readMinutes: 10,
    date: "2026-05-06",
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
 

 



]

