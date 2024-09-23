
function updateClock() 
{
    const now = new Date();
    const hours = now.getHours() % 12; 
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // calculez unghiurile pentru fiecare limba
    const u_hour = (hours * 30) + (minutes * 0.5); 
    const u_minute = (minutes * 6) + (seconds * 0.1); 
    const u_second = (seconds * 6);

    //preluam din arborele DOM obiectele cu atributele class respective
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    //aplicam rotatiile
    hourHand.style.transform = `rotate(${u_hour}deg)`;
    minuteHand.style.transform = `rotate(${u_minute}deg)`;
    secondHand.style.transform = `rotate(${u_second}deg)`;
}


setInterval(updateClock, 1*1000);//ceasul se actualizeaza la fiecare secunda
updateClock(); //apelez functia ca sa se initializeze ceasul la inceput
