Youtube App

Concepts Used

Challenges
While showing search suggestion when I was clicking suggestion onBlur event was firing before
onClick event which made navigation impossible.

So I used onMouseDown event which will fire before even onBlur

Debouncing:

typing slow = 200ms
typing fast = 30ms

Performance:

- iphone pro max = 14 letter x 1000 = 14000 API calls
- with debouncing = 3 API calls x 1000 = 3000

Debouncing with 200ms

- if difference between 2 key strokes is < 200ms - DECLINE API CALL
- For > 200ms make an API call

N-Level Nested Comments - Used UI knowledge, Tress and Recursion knowledge

- Head
- Body
  - Sidebar
    - MenuItems
  - MainContainer
    - ButtonsList
    - VideoContainer
    - VideoCard
