Design Game or Quiz

Create metadata that describes the adventures or questions that will be presented to the user. This data needs to be consistent, meaning each item needs to have the same information. Think about:

    Common descriptors like title, description, and image, audio, and/or video.
    What are the choices to be presented to the user, and what are the "consequences", or adjustments that are to be made to the user object

User Info Page

Goal of this page is to initialize a user object for tracking/scoring. Gather information from the user, like name and other starting choices.

    Testing: write a tested function that takes a FormData instance and pulls relevant information to add to a user object which represents initial state (initialize numbers, objects, and/or arrays). Use a completed: {} property and object to track which quests or quiz question the user has completed.
    Use this function in the submit handler from the form to create your user object
    Save object to local storage
    Redirect to next step in the game

List of Items Page

This page presents the available quests, questions, or tasks - which link to the Quest/Question Page with the corresponding id

    Import metadata
    Loop through items and create links for each one
        Use href like quest/id=dragon to "pass" the selected id to the quest page

Quest/Task/Question Page

Design your page for showing an item

    Import metadata
    Read the query parameter using UrlSearchParams built-in browser class
    Use your findById function to find the metadata item with that id
        redirect back to list page if id not found
    Update the dom:
        Static one-time things like title, image, etc.
        Loop through choices and create form input controls (like radio buttons) for each choice
