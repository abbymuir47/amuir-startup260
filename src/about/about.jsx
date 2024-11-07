import React from 'react';
import './about.css';

export function About(props) {
    const [profileUrl, setProfileUrl] = React.useState('');
    const [surfingUrl, setSurfingUrl] = React.useState('');
    const [skiingUrl, setSkiingUrl] = React.useState('');
    const [quote, setQuote] = React.useState('Loading...');
    const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');
    
    React.useEffect(() => {
        setProfileUrl(`/images/profile.jpg`);
        setSurfingUrl(`/images/surfing.jpg`);
        setSkiingUrl(`/images/skiing.jpg`);
        setQuote('Random quote');
        setQuoteAuthor('-3rd party database');
    }, []);

  return (
    <main>
        <p>
            My name is Abby Muir, and I am a native of Southern California, but I now live in Utah. I have always loved to go on adventures and learn new hobbies, and this portfolio is a creative outlet for me to put them on display.
        </p>
        <table>
            <tr>
                <td>
                    <div id="picture" className="picture-box">
                        <img width="350px" src={profileUrl} alt="random" />
                    </div>
                </td>
                <td>
                    <div id="picture" className="picture-box">
                        <img width="350px" src={surfingUrl} alt="random" />
                    </div>
                </td>
                <td>
                    <div id="picture" className="picture-box">
                        <img width="350px" src={skiingUrl} alt="random" />
                    </div>
                </td>
            </tr>
        </table>
        <p>
            Feel free to leave likes or comments if you have any questions about different projects. You can also message me if you're wanting to know how I did or made something, I am happy to share the little knowledge that I have! You can create a profile to save your liked posts. Thanks for visiting my page!
        </p>

        <div className='quote-box bg-light text-dark'>
          <p className='quote'>{quote}</p>
          <p className='author'>{quoteAuthor}</p>
        </div>
    </main>
  );
}