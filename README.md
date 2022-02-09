# War Game

![war-game](https://user-images.githubusercontent.com/78716708/153265771-b63066ea-06a9-445f-bd08-bc97f0ecb4b1.gif)

[Live Demo](https://war-game-01.herokuapp.com/)

## About
War is a 2-player card game with the objective of collecting all the cards in play. Each person will draw a card and whoever has a card of higher rank will obtain both cards. If the cards have the same rank (ex. 8 of clubs and 8 of spades), players will "declare war" and place down 4 cards. On the 4th card, whoever has the card of higher rank will obtain all the cards placed down. The winner is determined when a player obtains all of the cards.

This version will have a player against a computer opponent. Overall scores between player 1 and the computer (player 2) are tracked in the database. Due to the potential length of the game, the number of cards in each deck was reduced to 10 cards.

## Technologies
* Javascript
* React/Redux
* Ruby on Rails
* Node.js
* HTML5/SCSS
* PostgreSQL

## Further Implementation
With more time, I would have added timing for the "I Declare War" portion of the game so that the three facedown cards are more distinct from the fourth face up card. I would also have added card images in place of text for the ranks and suits.
