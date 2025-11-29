<h1>Enter into matrix</h1>

<!-- <img width="492" height="422" alt="image" src="https://github.com/user-attachments/assets/95e25219-7917-4af6-8310-aba732b431ab" /> -->
<img width="500px" alt="matrix.gif" src="matrix.gif"/>



<h3>Custom content:</h3>
<p>• Renders any text content from an input array.</p>
    
<h3>Adjustable:</h3> 
<p>• Change colors and animation speed with simple inputs.</p>
    
<h3>Pixel-perfect:</h3> 
<p>• Fits any screen or container thanks to precise and dynamic calculations.</p>   

<h3>Performance:</h3> 
<p>• Quick loading times without noticable delays thanks to light code and vanilla JS. (rendered and tested on ultrawide 3440x1440 display).</p>

<h3>Stack:</h3>
<p>• CSS & Vanilla JS</p>



<hr>
<h3>🙋 How to use</h3>
<p><i>coming soon</i></p>

<hr>

<h3>🧠 Thought proccess and challenges</h3>

Goal was to create customizable matrix animation that fills selected area using vanilla CSS and JS.

<h3>⚡ Main issues I faced:</h3>
        
<p>• Defining exact area to which content is rendered</p>
            
<p>Idea was to split a screen into identical columns based on font-size and container-width. Unfortunately most symbols in each font don't have same fixed width which makes columns render in different result and matrix effect appearing too small or too big depending on font-size. Tried working with different line-height, white-space, overflow also with display:flex. The best solution was to pick so called <i>monospaced font</i> which has fixed width of every character. Calculated size of target area using CanvasAPI(discovered it while looking for a solution to this), character width and window.innerWidth/Height. </p>
     
            
<p>• Creating proper loop that fills entire area while keeping great performance</p>
                
<p>Could choose between creating entire structure the way so I can later adjust each individual character or individual column of characters. Main problem here was the performance on bigger screens (rendering over 25.000 <span> elements, lol). Page needed over 15 seconds to either load and lag for another 30 seconds or crash. The best workaround was to render less content = increase font-size from 16px to 36px. No noticable lag after that change while animating by entire column or by each character individually. </p>
                
            
       
    



<hr>

<h3>Future improvements</h3>
<p>• Randomise rendered content again after first render and loop infinitely for better immersion.</p>
<p>• Add sliders to demo page, for live preview of desired settings.</p>
<p>• Add option to overlay gradient over all columns/selected column.</p>
<p>• Look for more performance boost.</p>


<hr>
<h3>🦗 Bugs</h3>
<p>• Fixed css bug that prevented from refreshing on mobile devices</p>
