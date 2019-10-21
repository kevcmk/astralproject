# Astral Project files into your browser.

By 'astral projection', I mean run a filewatcher websocket (server w/ socket.io) and inject that file's contents into Coderpad (or any page that permits firepad.setText(...)).  

## Motivation 

Why confine yourself to online bare-bones text editors.  Spin up your IDE of choice, turn on a filewatcher, and use this browser extension to inject the files contents into the page.  

## Getting started

1. Add extension to Chrome.

2. Prepare server.
    npm install

3. Run server
    npm run server ~/workspace/test.py

4. Navigate to a coderpad.

5. Click extension icon.

6. Voila, any time the file's contents change, they'll be reflected in the browser.

## Known limitations!
Because injecting script ultimately involves rendering a file's contents in a `<script>firepad.setText(${fileContents})</script>`, tildes (`) terminate the string, in turn rendering a syntax error.  Nobody even uses tildes though... they are so 2018.

## Coderpad's Terms of Service
Relevant clauses of Coderpad's Terms of Service

### Subscriber shall:
...
9. not permit direct or indirect access to or use the Service in a way that circumvents a usage or capacity limit of the Service;
...
13. not reverse engineer, decompile, translate, disassemble or otherwise attempt to extract any or all of the source code of the Service, except as permitted by applicable laws or governmental regulations;

### A corresponding apology
Coderpad, I hereby apologize for reverse engineering your use firepad and, in turn, injecting script into my browser's representation of your web app.
