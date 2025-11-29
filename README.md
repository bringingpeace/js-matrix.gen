# js-matrix.gen
Universal vanilla js matrix generator for background of any size.

<img width="492" height="422" alt="image" src="https://github.com/user-attachments/assets/0210fe27-03c3-40b7-a9cd-07710783fe5a" />
<img width="492" height="422" alt="image" src="https://github.com/user-attachments/assets/48bc5767-b1bc-41fc-8af2-aa2fa32f3b82" />


 <ol>
      <li>🥇 Goal</li>
      <ul>
        <li>
          Create quick and easy to use, "plug and play" reusable web effect,
          that will render matrix on selected area.
        </li>
        <li>Give option to input a color/array of colors.</li>
        <li>Give option to input an array of desired text content.</li>
        <li><i>~Future goals might be added here~</i></li>
      </ul>
      <li>🧠 Thought process</li>
      <ul>
        <li>
          Create black #000 background and a div with green #0f0 letters inside.
        </li>
        <li>
          Letters need to be randomised. It can also be a number or a sign.
        </li>
        <li>
          Create arrays of letters, numbers, signs and different shades of
          selected color.
          <ul>
            <li>
              Also create an array that contains all the arrays above, so that
              rendered content differs on each spot.
            </li>
          </ul>
        </li>
        <li>
          Create a simple function for chosing a single, random item from input
          of array.
        </li>
        <li>
          Render randomised content:
          <ul>
            <li>
              🌩 1st issue
              <ul>
                <li>
                  Rendering process needs to be looped to the point where
                  certain area is filled with array content.
                </li>
                <li>How do I define area size?</li>
                <li>
                  I need a width and a height. Then I can calculate how many
                  rows and columns can fit the screen, and then fill them with
                  randomised content.
                </li>
                <li>
                  After creating test container I experienced weird behaviour
                  between different fonts: all the letters, numbers and symbols
                  have different raw width, even after removing all inherited
                  spacing. This causes the matrix effect to be different size
                  every time. It's not wide enough, or it's too wide and expands
                  outside the area (which would be fine after using
                  overflow:hidden, but amount of hidden content is too big to
                  simply ignore it while considering site performance.)
                </li>
                <li>
                  Found out about <b>monospaced fonts</b> (each char. has
                  identical width). Chosing classic <i>monospace</i> font solved
                  the problem. Now every column has the same width, letters
                  don't occupy each other.
                </li>
              </ul>
              <li>🌩 2nd issue
                <ul><li>
                    Rendered columns are filled with raw text by creating document.createElement('pre') (1 per column). This makes randomising different color for each char. impossible.
                </li>
                <li>Changed the structure of code, so I can target each char. individually and change its style. Added <span> element for each char. and rendered different color for every <span>. This caused 10-15 seconds of loading content on 3440x1440 monitor and rendering on entire screen. Changed rendering area to 1920x1080 and got better, but still horrible results.</li>
            </ul>
              </li>
            </li>
          </ul>
        </li>
      </ul>
    </ol>
