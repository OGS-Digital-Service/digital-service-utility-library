/* change feedback area on button click */
const feedbackText = document.getElementById('nysds-feedback-helpful');
const feedbackArea = document.getElementById('nysds-feedback-options-area');
const feedbackLink = document.getElementsByClassName('nysds-feedback-link');
const linkArr = Array.from(feedbackLink);
for (let i = 0; i < linkArr.length; i++) {
    linkArr[i].addEventListener("click", feedbackChange) // change area on click
        function feedbackChange () {
            feedbackArea.setAttribute("style", "display:none;");
            feedbackText.innerText = "Thank you for your feedback!"
        }
}  

/* append referrer url and search term if one exists */
const feedbackForm = "https://forms.ny.gov/s3/Thank-you-for-your-Feedback"
const fragmentPath = window.location.pathname;
const referrerURL = window.location.href;
function searchTerm () {
    var matchUrl = referrerURL.match(/search_api_fulltext=(.*?)&/);
    if (matchUrl !== null) {
        if (matchUrl[1].length > 0) {
            return "---" + matchUrl[1]
        }
        else {
            return ''
        }
    }
    else {
        return ''
    }
}
const thumbsDown = document.getElementById('nysds-feedback-no');
const thumbsUp = document.getElementById('nysds-feedback-yes');
const urlUp = feedbackForm + "?thumbs=Up&referrerUrl=" + fragmentPath + searchTerm()
const urlDown = feedbackForm + "?thumbs=Down&referrerUrl=" + fragmentPath + searchTerm()
function replaceUrl () {
    thumbsUp.href = urlUp;
    thumbsDown.href = urlDown;
}
document.addEventListener('DOMContentLoaded', replaceUrl)