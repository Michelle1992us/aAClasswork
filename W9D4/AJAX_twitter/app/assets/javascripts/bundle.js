/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/***/ (function(module) {

const APIUtil = {
    followUser: id => {
      $.ajax({
        method: 'POST',
        url: `/users/${this.userId}/follow`,
        dataType: 'json'
      })
      
      
    },
  
    unfollowUser: id => {
      $.ajax({
        method: 'DELETE',
        url: `/users/${this.userId}/follow`,
        dataType: 'json'
      }) 
    }
  };
  
  module.exports = APIUtil;

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");

$(function() {
    $('button.follow-toggle').each(function(index, button) {
        const followTog = new FollowToggle(button);
    })
})

//The callback should call your constructor once for each button.follow-toggle element.
//You can use jQuery#each for this, but beware: the DOM element is the second callback argument; index comes first.
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map