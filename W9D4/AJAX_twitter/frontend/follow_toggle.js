const APIUtil = require("./api_util");

class FollowToggle {
    constructor(el){
        this.$el = $(el) ; 
        this.userId = this.$el.attr('data-user-id');
        this.followState = this.$el.attr('data-initial-follow-state');
        this.render();
        this.$el.on('click', this.handleClick.bind(this))
    }

    render() {
        if (this.followState === "unfollowed"){
            this.$el.text('Follow!'); //.text sets/returns text content of selected elements
        } else {
            // console.log('in render')
            this.$el.text('Unfollow!');
        }
    }

    handleClick(e) {
        console.log('in handle click')
        e.preventDefault();
        if (this.followState === "unfollowed") {
            let that = this;
            APIUtil.followUser(that.userId).then(() => {
                    console.log(that.followState);
                    that.followState = "followed";
                    console.log(that.followState);
                    that.render();
                });
        } else {
            let that = this;
            APIUtil.unfollowUser(that.userId).then(() => {
                    console.log(that.followState);
                    that.followState = "unfollowed";
                    console.log(that.followState);
                    that.render();
                });
        }

        /*if (this.followState === "unfollowed") {
            $.ajax({
                method: 'POST',
                url: `/users/${this.userId}/follow`,
                dataType: 'json',
                //data: stuff,
                success: () => {
                    // console.log(this.followState)
                    this.followState = "followed";
                    // console.log(this.followState)

                    this.render();
                }
            }) 
        } else {
            $.ajax({
                method: 'DELETE',
                url: `/users/${this.userId}/follow`,
                dataType: 'json', 
                success: () => {
                    this.followState = "unfollowed";
                    this.render();
                }
            })
        }*/
    }
}

module.exports = FollowToggle; 