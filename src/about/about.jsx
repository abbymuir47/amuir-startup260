import React from 'react';
import './about.css';

export function About() {
  return (
    <main>
        <p>
            My name is Abby Muir, and I am a native of Southern California, but I now live in Utah. I have always loved to go on adventures and learn new hobbies, and this portfolio is a creative outlet for me to put them on display.
        </p>
        <table>
            <tr>
                <td>
                    <div id="picture" className="picture-box">
                        <img width="350px" src="images/profile.jpg" alt="random" />
                    </div>
                </td>
                <td>
                    <div id="picture" className="picture-box">
                        <img width="350px" src="images/surfing.jpg" alt="random" />
                    </div>
                </td>
                <td>
                    <div id="picture" className="picture-box">
                        <img width="350px" src="images/skiing.jpg" alt="random" />
                    </div>
                </td>
            </tr>
        </table>
        <p>
            Feel free to leave likes or comments if you have any questions about different projects. You can also message me if you're wanting to know how I did or made something, I am happy to share the little knowledge that I have! You can create a profile to save your liked posts. Thanks for visiting my page!
        </p>

        <div id="quote">
            <div>Randomized quote to be added</div>
            <div> - 3rd party service placeholder</div>
        </div>
    </main>
  );
}