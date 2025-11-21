async function loadHeader() {
    const res = await fetch("pages/header.html");
    const html = await res.text();
    document.getElementById("header").innerHTML = html;
}

loadHeader();

async function loadBio() {
    const res = await fetch("pages/home/bio.html");
    const html = await res.text();
    document.getElementById("bio").innerHTML = html;
}

loadBio();

async function loadNews() {
    const res = await fetch("pages/home/news.html");
    const html = await res.text();
    document.getElementById("news").innerHTML = html;
}

loadNews();

async function loadInterest() {
    const res = await fetch("pages/research/interest.html");
    const html = await res.text();
    document.getElementById("interest").innerHTML = html;
}

loadInterest();

async function loadPublications() {
    const res = await fetch("pages/research/publications.html");
    const html = await res.text();
    document.getElementById("publications").innerHTML = html;
}

loadPublications();


async function loadActivities() {
    const res = await fetch("pages/research/activities.html");
    const html = await res.text();
    document.getElementById("activities").innerHTML = html;
}

loadActivities();

async function loadInstructor() {
    const res = await fetch("pages/teaching/instructor.html");
    const html = await res.text();
    document.getElementById("instructor").innerHTML = html;
}

loadInstructor();

async function loadTA() {
    const res = await fetch("pages/teaching/ta.html");
    const html = await res.text();
    document.getElementById("ta").innerHTML = html;
}

loadTA();

async function loadFooter() {
    const res = await fetch("pages/footer.html");
    const html = await res.text();
    document.getElementById("footer").innerHTML = html;

    // footer visitor map
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "clustrmaps";
    script.src = "https://clustrmaps.com/map_v2.js?d=qwJIKzEGVprb6acrG3-5YBIZVN2flTcQhUCKBJzTLJk&cl=ffffff&w=a";

    const container = document.getElementById("visitor-map-container");
    if (container) {
        container.appendChild(script);
    }
}

loadFooter();
