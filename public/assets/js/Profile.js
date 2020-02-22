var Profile = (function() {
    'use strict';
  
    var _profile = {};
  
    return {
        async  loadProfile() {
            // Default options are marked with *
            const response = await fetch("/edit_profile/current", {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'include', // include, *same-origin, omit
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+window.localStorage.getItem("uid"), 
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrer: 'no-referrer' // no-referrer, *client
            });
            return await response.json(); // parses JSON response into native JavaScript objects
        },
        async  updateProfilePhoto(url, data) {
            // Default options are marked with *
            const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'include', // include, *same-origin, omit
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+window.localStorage.getItem("uid"), 
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrer: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            return await response.json(); // parses JSON response into native JavaScript objects
        },        
    }
  }());
