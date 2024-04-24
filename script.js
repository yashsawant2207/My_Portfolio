const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block";
        menu.style.display = "none";
        crossIcon.style.display = "none";
    } else {
        crossIcon.style.display = "inline-block";
        hamIcon.style.display = "none";
        menu.style.display = "block";
    }
});

document.getElementById('downloadButton').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = 'C:\\Users\\Pranali\\Desktop\\YASH\\Programming\\E-Portfolio\\Photos and documents\\Resume.pdf'; // Replace 'path_to_your_document' with the actual path to your document
    link.download = 'Yash Resume'; // Replace 'your_document_name' with the name you want the downloaded file to have
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
