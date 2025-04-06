# Diagram# Diagrams

This repository contains sequence diagrams illustrating the behavior of a notes application in different scenarios. Below is an explanation of each diagram:

## 1. **New Note (Traditional Web App)**

This diagram depicts the process of creating a new note in the traditional web app version of the notes application. It shows how the browser sends a POST request to the server to save the note, and the server responds with a redirect. The browser then reloads the updated notes page and fetches additional resources like CSS, JavaScript, and JSON data.

## 2. **Single Page App (SPA) Loading**

This diagram illustrates how the single-page app (SPA) version of the notes application is loaded. The browser fetches the minimal HTML document, CSS, and JavaScript files. The JavaScript then dynamically fetches the initial data (in JSON format) from the server and renders the app without requiring a full page reload.

## 3. **New Note on SPA**

This diagram shows the process of creating a new note in the SPA version of the notes application. When the user inputs a note and clicks the Save button, the browser sends a POST request to the server via an API call. The server processes the request and responds with a success message. The browser then updates the note list dynamically without reloading the page.

Each diagram provides a detailed view of the interactions between the browser and the server, highlighting the differences between traditional web apps and SPAs.