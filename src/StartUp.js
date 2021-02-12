import React from 'react'
import Weather from './Weather'
import './style.css'

export default function StartUp() {
    return (
        <div>
            <div class="background">
                {/*
                <video autoplay muted loop id="my_video">
                    <source src="vid/chicago3.mp4" type="video/mp4"></source>
                </video>
                */}
                <img src="./img/summer.jpg"/>   
            </div>
            <div class="container">
                <div class="block">
                    <div class="image-container">
                        <img src="./img/snow.jpg"/>   
                        <div id="weather">
                        <h1 id="temp"></h1>
                        <h3 id="location"></h3>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <ul>
                        <li>news</li>
                        <li><a href="https://news.ycombinator.com/">hacker news</a></li>
                        <li><a href="https://medium.com">medium</a></li>
                    </ul>
                </div>
                <div class="block">
                    <ul>
                        <li>school</li>
                        <li><a href="https://www.overleaf.com">$\LaTeX$</a></li>
                        <li><a href="https://sts.is.depaul.edu/adfs/ls/?SAMLRequest=jdE9a8MwEAbgvdD%2fYLRbkhV%2fRMIOhHYJpEvSduhSJPmSGGzJ1cmlP792Q2jHbvfBCw939XaKF3eAjwkwJrvHhqAe%2bnDt340sSlOtcymNznXVmqLSpoBCWiOtzNckeYWAnXcNEZSTZIc4wc5h1C7OIy54yqtUlM%2fZWvGVyjIqJC9WRfZGki0ihDhnH7zDaYBwhPDZWXg57BtyiXFExVgretrCqKeeQjstLetHpmcz6%2f25c2zR7peKzjuSfA29w4ZMwSmvsUPl9ACoolXH7dNezUg1Bh%2b99T3Z3N8lSf1DDv8J6huYbG48vZLATxpSaXOR5jnXqclFlmZZyVtxqoq2BBrBzedAakJ3vkQctQVq%2ffBLr9kVMYNq9vcfm28%3d">d2l</a></li>
                        <li><a href="http://campusconnect.depaul.edu">campus connect</a></li>
                        <li><a href="https://www.wolframalpha.com">wolfram $\alpha$</a></li>
                        <li><a href="https://d2l.depaul.edu/d2l/home/791293">phy 411</a></li>
                    </ul>
                </div>
                <div class="block">
                    <ul>
                        <li>work</li>
                        <li><a href="https://stackoverflow.com">stackoverflow</a></li>
                        <li><a href="https://github.com">github</a></li>
                    </ul>
                </div>
                <div class="block">
                    <ul>
                        <li>finance</li>
                        <li><a href="https://secure.tdameritrade.com/">tdameritrade</a></li>
                        <li><a href="https://secure.tdameritrade.com/trade/options">options</a></li>
                        <li><a href="https://secure.tdameritrade.com/trade">stonks/etfs</a></li>
                        <li><a href="https://robinhood.com">fuck robinhood</a></li>
                        <li><a href="https://www.marketwatch.com">marketwatch</a></li>
                    </ul>
                </div>
                <div class="block">
                    <ul>
                        <li>social</li>
                        <li><a href="https://www.reddit.com">reddit</a></li>
                        <li><a href="https://www.youtube.com">youtube</a></li>
                        <li><a href="https://www.linkedin.com">linkedin</a></li>
                    </ul>
                </div>
                <div class="block">  
                    <ul>
                    <li>r/</li>
                    <li><a href="https://www.reddit.com/r/startpages/">r/startpages</a></li>
                    <li><a href="https://www.reddit.com/r/unixporn/">r/unixporn</a></li>
                    <li><a href="https://www.reddit.com/r/stocks/">r/stonks</a></li>
                    </ul>
                </div>
                <div class="block">  
                    <ul>
                    <li>home</li>
                    <li><a href="http://10.0.0.182:8581/login">homebridge</a></li>
                    <li><a href="https://pi-hole.net">pi-hole</a></li>
                    </ul>
                </div>
                <div class="block">  
                <ul>
                    <li>dev</li>
                    <li><a href="https://timothypholmes.github.io">personal website</a></li>
                    <li><a href="http://localhost:8000">test site</a></li>
                </ul>
                </div>
                <div class="block">
                    <div class="image-container">
                        <img src="./img/minimal.jpg" alt="A image" />
                    </div>
                </div>
            </div>  
        </div>
    )
}