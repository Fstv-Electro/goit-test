# React homework template

This project was created with
[Create React App](https://github.com/facebook/create-react-app). [mockapo.io]
(https://mockapi.io/) Backend. [@emotion/styled]
(https://emotion.sh/docs/styled) stylization. [axios] (https://axios-http.com/)
HTTP client.

The assembly template is taken from the [GoIT] (https://m.goit.global/ua/new/)
school with repository [Olexandr Repeta]
(https://github.com/goitacademy/react-homework-template#readme)

# Brief information about the process

1. The general task was performed according to the requirements of the technical
   task.
2. Checked by the validator for errors.
3. The value of "Followers" does not change on the backend, due to the fact that
   the application does not have authorization.
4. I did not start the additional task with routing, due to lack of work time,
   but I will do it sooner or later.
5. Dropdown was taken from "react-select" for convenience, as for the first
   acquaintance and easy transfer of filter data.

# Test task

Goal: Create tweet cards and add interactivity at the click of a button.
(https://textbook.edu.goit.global/lms-career-homework/uk/img/image-1.jpg)

The general appearance of the card in two states - Follow and Following.

# Performance criteria

1. The layout is fixed in px, semantic and valid.
2. There are no errors in the browser console.
3. The work is done on native JS using assemblers or on React.
4. Interactivity works according to the technical task.
5. The code is formatted and uncommented.
6. A README.md should be described in the repository.

# Technical task

1.  Implement user cards according to [layout]
    (https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0-1).
2.  When clicking on the Follow button, the text changes to Following. Also the
    color of the button changes. And your follow is added to the total number of
    followers. Thus, the initial number is 100,500 followers. When you click on
    the button it changes to 100,501.
3.  When the page is updated, the final result of the user's actions must be
    recorded. Thus, if you click on the button and refresh the page, the button
    remains the same in the Following state with the corresponding color, and
    the follower count does NOT decrease to the initial value.
4.  When you click the button again, its text and color change to the original
    state The number of followers also changes. It decreases by 1 (100,500).
5.  In the code, the number 100,500 must be written with one value (100500). In
    the UI - comma-delimited (100,500). Create your personal backend for
    development using UI service [mockapo.io] (https://mockapi.io/).

Create the "users" resource. Use the resource constructor and describe the user
object as described below.

# User

1. Create a user in Mockapi with the following fields: id, user, tweets,
   followers, avatar (see screenshot below).
2. Images of avatars must be registered фі separate urls in the "avatar"
   property. You can choose them yourself.
3. There should be p to 12 users with different values (at your discretion) in
   the database. Add pagination. One pagination page should display at least 3
   tweets, the rest to load when pressing Load More.
4. The rest of the requirements are similar to the technical task described
   above.

(https://textbook.edu.goit.global/lms-career-homework/uk/img/image-2.jpg)

# Additional task

You will be awarded additional points after completing these tasks! Without the
additional task you will not be able to get the maximum score.

Create routing using React Router.

The application must have the following routes. If the user entered using
non-existent route, it must be redirected to the home page. '/' is a component
Home, home page. Styling and design at your discretion. '/tweets' - component
tweets, a page displaying tweets. The tweets page should have the Back button,
which leads to the main page.

# Tasks with an asterisk

Add filtering. It should be a Dropdown with 3 options (design at your
discretion): show all, follow, followings show all - show all tweets. follow -
show tweets with the follow status. followings - show tweets with following
status.
