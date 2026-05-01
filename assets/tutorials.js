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
    
    
    
    `}



]

