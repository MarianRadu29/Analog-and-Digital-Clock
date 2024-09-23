function updateClock()
{
    const now = new Date();
    const hours = now.getHours(); 
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const p = document.getElementById('text');
   // p.innerText = `${hours%12}:${minutes}:${seconds} ${hours>12?'PM':'AM'}`;
    p.innerText = hours%12+':'+String(minutes).padStart(2, '0')+':'+String(seconds).padStart(2, '0')+' ' + (hours>12?'PM':'AM');
}
setInterval(updateClock, 1*1000);//ceasul se actualizeaza la fiecare secunda
updateClock(); //apelez functia ca sa se initializeze ceasul la inceput