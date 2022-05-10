# myFlix: React

## Description
Using React, I built the client-side for an application called "myFlix" based on
its existing server-side code (REST API and database).

## Objective
This project allowed me to practice full-stack web development by creating a SPA for the server-side code.

## Features
Main View
<ul>
<li>Returns a list of ALL movies to the user (each listed item with an image, title, and description)</li>
<li>Filtering by title</li>
<li>Ability to select a movie for more details</li>
</ul>
Movie View
<ul>
<li>Returns data (description, genre, director, image) about a single movie to the user</li>
<li>Allows users to add a movie to their list of favorites</li>
</ul>
Login View
<ul>
<li>Allows users to log in with a username and password</li>
<li>Access registration view</li>
<li>Allows new users to register (username, password, email, birthday)</li>
</ul>
Genre View
<ul>
<li>Returns data about a genre, with a name and description</li>
</ul>
Director View
<ul>
<li>Returns data about a director (name, bio, birth year, death year)</li>
</ul>
Profile View
<ul>
<li>Allows users to update their user info (username, password, email)</li>
<li>Allows existing users to deregister</li>
<li>Displays favorite movies</li>
<li>Allows users to remove a movie from their list of favorites</li>
</ul>

## Built Using
- MERN
- Parcel
- React-Redux
- Styled with Bootstrap

## How to Run
```
npm run start
```