# Prompt: Cows and Bulls

Design a simple ReactApp for the game of cows and bulls. Cows and Bulls is a double player game where the computer pulls a word from a collection -- let's call it the **original word**. The objective is for YOU to guess the original word based on a series of clues the computer gives you.

For further context:
Cows: Characters that are there in the original word that are in the incorrect position.
Bulls: Characters that are in the original word that are also in the correct position.

## Game Flow
 Context: In this specific case:
  - You will select `Start Game`
  - Pushing on `Start Game` triggers an event handler causing the React Server to pull a word from a set of words.  
  - Enter the first word you guess into a field.
  - React Server performs logic to determine how many cows and bulls the word has.
  - Enter the next word
  - After twenty tries, you are given the original word.
  - If you guess the word before twenty tries, you win!
```
Welcome to Cows and Bulls!
Please input a word

>> stew
Cows: 0
Bulls: 2

>> stop
cows: 0
bulls: 2

>> stir
cows: 0
bulls: 1

>> atom
cows: 0
bulls: 1

>> spit
cows: 0
bulls: 1

>> snow
You got it!  

```
