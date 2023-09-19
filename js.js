var t = []
sum = 0;
function Szamol()
{
    sum = 0;
    t.push (
        {
            sz : document.getElementById("szelesseg").value,
            h : document.getElementById("hosszusag").value
        }
    )
    for (let i = 0; i < t.length; i++) 
    {
        sum += t[i].sz * t[i].h
    }
    document.getElementById("ossz").innerText = sum
}