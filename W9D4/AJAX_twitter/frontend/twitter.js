const FollowToggle = require('./follow_toggle');

$(function() {
    $('button.follow-toggle').each(function(index, button) {
        const followTog = new FollowToggle(button);
    })
})

//The callback should call your constructor once for each button.follow-toggle element.
//You can use jQuery#each for this, but beware: the DOM element is the second callback argument; index comes first.