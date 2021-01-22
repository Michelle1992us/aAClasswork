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