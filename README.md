Youtube App

Concepts Used

Challenges
1 While showing search suggestion when I was clicking suggestion onBlur event was firing before
onClick event which made navigation impossible.

So I used onMouseDown event which will fire before even onBlur

2 Live Chat >>>> Infinite Scroll >>>> Pagination

Challenges :-

- Get Data Live
- Update the UI

DATA (Live)

1st Option

-> Handle Data using Web Sockets
-> Websocket is a 2 way connection or a handshake
-> One handshake is made we can send data quickly from either side whenever you want to
-> Bi directional
-> No regular Interval
-> Initial handshake takes time
-> Zerodha(Stock Market) , Whatsapp
-> Time Critical Application or which needs very real time

2nd Option

-> Handle Data using API Polling
-> Data is sent from server to UI
-> Data is Unidrectional or Single Directional
-> Intervals are there
-> Gmail - UI can make call to backend every 10s to check is there any new mail
-> Cricbuzz uses API Polling after every 25s data is fetched from backend
-> Don't need real time data

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
