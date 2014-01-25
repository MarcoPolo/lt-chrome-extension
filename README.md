# Motivation

I really enjoy connecting to a real browser, but having to keep a dev specific script tag in my html always seemed odd. So I made an extension that prompts for the port that LT connects to, and will inject the script tag for you. This will persists across refresh in the same tab, until you hit disconnect.

This also give you the ability to connect your editor to any arbitrary site, easily!

# Installation
To install, fetch the .crx from the repo here. Go to your extensions page in chrome (chrome://extensions), and drag the .crx in.

# Usage
To use, there is one input called port number, but the port number LT expects, and hit connect. When done press disconnect.

The port number is the number `46928` in  ```
<script type='text/javascript' id='lt_ws' src='http://localhost:46928/socket.io/lighttable/ws.js'></script> ```

This isn't on the chrome webstore because I'm lazy. If there is enough desire I can put it up.

# License
EPL
