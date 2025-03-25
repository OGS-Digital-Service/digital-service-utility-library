const feedbackText = document.getElementById('nysds-feedback-helpful');
const feedbackArea = document.getElementById('nysds-feedback-options-area');
const feedbackLink = document.getElementsByClassName('nysds-feedback-link');
const linkArr = Array.from(feedbackLink);
const referrerURL = window.location.href;
const fragmentPath = window.location.pathname;
const searchTerm = referrerURL.match(/search_api_fulltext=(.*?)&/);

const slugTerm = fragmentPath + "-->" + searchTerm[1]
const thumbsDown = document.getElementById('nysds-feedback-no');
const thumbsUp = document.getElementById('nysds-feedback-yes');
const feedbackForm = "https://forms.ny.gov/s3/Thank-you-for-your-Feedback"
const fragmentUp = "?thumbs=Up&referrerUrl="
const fragmentDown = "?thumbs=Down&referrerUrl="
const urlUp = feedbackForm + fragmentUp + slugTerm
const urlDown = feedbackForm + fragmentDown + slugTerm



console.log(referrerURL)
console.log(searchTerm[1])
console.log(slugTerm)



for (let i = 0; i < linkArr.length; i++) {
    linkArr[i].addEventListener("click", feedbackChange) // change area on click
        function feedbackChange () {
            feedbackArea.setAttribute("style", "display:none;");
            feedbackText.innerText = "Thank you for your feedback!"
        }
}  

function replaceUrl () {
    thumbsUp.href = urlUp;
    thumbsDown.href = urlDown;
}
document.addEventListener('DOMContentLoaded', replaceUrl)