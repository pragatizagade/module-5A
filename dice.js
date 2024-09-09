const rb = document.getElementById('rb');
rb.addEventListener('click', () => {
    const di = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6'
    ];

    const d1 = document.getElementById('d1');
    const d2 = document.getElementById('d2');
    const r = document.getElementById('r');
  

    function rollDice() {
        const dv1 = Math.floor(Math.random() * 6) ;
        const dv2 = Math.floor(Math.random() * 6) ;

        d1.textContent = `${di[dv1 ]}`;
        d2.textContent = `${di[dv2 ]}`;

        if (dv1 > dv2) {
            r.textContent = 'Player 1 Wins!';
        } else if (dv2 > dv1) {
            r.textContent = 'Player 2 Wins!';
        } else {
            r.textContent = "It's a Draw!";
        }
    }


});
