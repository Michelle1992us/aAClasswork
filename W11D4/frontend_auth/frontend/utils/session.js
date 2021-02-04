//creating a user. post-request to user's controller
//takes in a user object + returns ajax request
export const postUser = user => (
    .ajax({
        url: '/api/users',
        method: 'POST',
        data: {user}, //user object nested under keyword of 'user'
    })
)

//logging in user. post-request to session controller
export const postSession = user => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: {user},
    })
)

//logging out user
export const deleteSession = () => {
    return $.ajax({
      url: '/api/session',
      method: 'DELETE'
    });
  };
  