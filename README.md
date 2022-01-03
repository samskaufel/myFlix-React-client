# myFlix-client

# Objective
Using React, build the client-side for an application called myFlix based on
its existing server-side code (REST API and database).

# User Stories
<ul>
<li>As a user, I want to be able to access information on movies, directors, and genres so that I can learn more about movies I’ve watched or am interested in.</li>
<li>As a user, I want to be able to create a profile so I can save data about my favorite movies.</li>
</ul>

# Features
Main view
<ul>
<li>Returns a list of ALL movies to the user (each listed item with an image, title, and description)</li>
 <li>Sorting and filtering</li>
 <li>Ability to select a movie for more details</li>
</ul>
Single movie view
<ul>
 <li>Returns data (description, genre, director, image) about a single movie to the user</li>
 <li>Allows users to add a movie to their list of favorites</li>
 </ul>
Login view
<ul>
 <li>Allows users to log in with a username and password</li>
 <li> Registration view</li>
 <li>Allows new users to register (username, password, email, birthday)</li>
 </ul>
Genre view
<ul>
 <li>Returns data about a genre, with a name and description</li>
 <li>Displays example movies</li>
 </ul>
Director view
<ul>
 <li>Returns data about a director (name, bio, birth year, death year)</li>
 <li>Displays example movies</li>
 </ul>
Profile view
<ul>
 <li>Allows users to update their user info (username, password, email, date of birth)</li>
 <li>Allows existing users to deregister</li>
 <li>Displays favorite movies</li>
 <li>Allows users to remove a movie from their list of favorites</li>
 </ul>