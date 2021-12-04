var infoDIV=document.getElementById("tribute-info");
var a=document.getElementById("event-list");

var c=document.getElementById("timeline-events");
var eventInfo=[
    {
        "heading":"Youth & Apple's early years",
        "dates":["February 24, 1955:","1968:","1970:","1974:","1976:","January 3, 1977:","June 5, 1977:","December 12, 1980:","September 12, 1985:","February 3, 1986:","1988","November 29, 1995:",
                 "December 10, 1996:","1997","1998","2001","2004","January 11, 2005:","January 13, 2006:","January 9, 2007:","January 14, 2009:","January 17, 2011:","June 6, 2011:","June 7, 2011:","August 24, 2011:","5 October 2011"],
        "what":["Steven Paul Jobs is born in San Francisco","Jobs calls Bill Hewlett, the co-founder and co-namesake of Hewlett-Packard, looking for spare parts to build a frequency counter. Hewlett gives Jobs the parts, as well as an internship with the company that summer.","Meets future Apple co-founder Steve Wozniak through a friend.",
                "Begins a brief stint as an engineer at Atari.","Co-founds Apple Computer with Wozniak and Ronald Wayne.","Apple incorporates.","Releases the Apple II, the first commercially available personal computer in a plastic case with color graphics--and Apple's first successful personal computer.",
                "Apple goes public, putting Jobs' net worth north of $200 million.","Jobs resigns as Apple chairman","For $10 million, buys the Graphics Group division of Lucasfilm that becomes Pixar Animation Studios.",
                "NeXT Computer releases its first computer.","Becomes Pixar's president and CEO. ","Returns to Apple, as an adviser, after it buys NeXT for $429 million.",
                "Becomes CEO","Introduces the iMac","Introduces iTunes","Jobs undergoes surgery to remove a cancerous tumor in his pancreas.","Apple introduces an iPod Shuffle.",
                "That year, Apple's market capitalization surpasses Dell's.","Introduces iPhone.","Jobs takes a 6-month leave of absence for medical reasons.","Goes on medical leave of absence from CEO post nearly two years after the six-month break he took to undergo a liver transplant.",
                "Gives a keynote speech at Apple's Worldwide Developers Conference, it's Jobs' last public appearance at an Apple event.","Pitches Cupertino on a new Apple campus.","Resigns from Apple CEO post; becomes chairman.","Died at the age of 56."]
    }
]


eventInfo.forEach(evenT=>{
    // var b=document.getElementById("timeline-info");
    // b.innerHTML=evenT.heading;
    // a.appendChild(b);
    var listOfEvents=document.createElement("ul");
    for (let index = 0; index < evenT.dates.length; index++) {
        const date = evenT.dates[index];
        const txt=evenT.what[index];
        // console.log(date);
        var listItems=document.createElement("li");
        var textNode=document.createTextNode(date);
        var aboutItem=document.createElement("p");
        var text=document.createTextNode(txt);
        listItems.appendChild(textNode);
        aboutItem.appendChild(text);
        listOfEvents.appendChild(listItems);
        listOfEvents.appendChild(aboutItem);
    }
    a.appendChild(listOfEvents);
})