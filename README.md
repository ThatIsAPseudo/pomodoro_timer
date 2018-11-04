# Pomodoro.js
[Pomodoro.js](https://thatisapseudo.github.io/pomodoro_timer/) is a simple nice p5.js pomodoro timer to work more efficiently and gain productivity. Work duration is set to 25 minutes and break duration is set to 5 minutes.

At start, just hit the "START" button to launch the timer, *et voilà* ! To reset the timer, simply refresh the page.

Start page :
![start page image](images/start.png)

Pomodoro :
![pomodoro image](images/pomodoro.png)

Break :
![break image](images/break.png)


**/!\ Warning** : The timer MAY NOT work properly if the browser is out of focus when the timer reach 00:00 ; if this happens, the timer will simply wait until getting the focus back then start the next session. However, I'm planning on correcting this behaviour and add a sound to signal the end of a session.
Anyway, you can make anything else while the timer is running, just make sure to have it open when it's getting to 00:00.

Here is a list of behavior on different browsers/OS :

| OS | Browser | Works | Does NOT work |
|----|---------|---------------|-----------------------|
| macOS | Firefox | Pomodoro tab not in focus | Browser out of focus |
| macOS | Chrome | Pomodoro tab in focus | Pomodoro tab or browser out of focus |
| macOS | Safari | Not tested yet | Not tested yet |
| Windows | Firefox | Not tested yet | Not tested yet |
| Windows | Chrome | Not tested yet | Not tested yet |

Let me know of any issue, I did not test it on every browser so I'll welcome any feedback.
