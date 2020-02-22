var User = (function() {
    'use strict';
    var userData = {};
    let _config = {};
    let _loginTemplate = `<a href="#" title="" itemprop="url" class="login-pop-btn"><i class="fa fa-sign-in theme-clr"></i> Login</a>`;
    let loggedInTemplate = `   <div class="dropdown ">
                              <a class="dropdown-toggle text-white" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <i class="fa fa-user fa-2x text-white"></i>
                              </a>
                            
                              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="#" id="profile_link">Profile</a>
                                <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#" id="logout">Logout</a>
                              </div>
                          </div>`;
  
    return {
      getLoginTemplate: function () {
        return _loginTemplate;
      },
      getLoggedInTemplate: function () {
        return loggedInTemplate;
      },
      async  getCustomClaims(url = '') {
            // Default options are marked with *
            const response = await fetch(url, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrer: 'no-referrer', // no-referrer, *client
            });
            return await response.json(); // parses JSON response into native JavaScript objects
        },
         async  fetchConfig(url = '') {
            // Default options are marked with *
            const response = await fetch(url, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrer: 'no-referrer', // no-referrer, *client
            });
            return await response.json(); // parses JSON response into native JavaScript objects
        },
        async  verifyUser(url = '', data = {}) { 
                // Default options are marked with *
                const response = await fetch(url, {
                  method: 'POST', // *GET, POST, PUT, DELETE, etc.
                  mode: 'cors', // no-cors, *cors, same-origin
                  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                  credentials: 'same-origin', // include, *same-origin, omit
                  headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  redirect: 'follow', // manual, *follow, error
                  referrer: 'no-referrer', // no-referrer, *client
                  body: JSON.stringify(data) // body data type must match "Content-Type" header
                }).catch(console.error());
                return await response.json(); // parses JSON response into native JavaScript objects
          },
          async  logoutUser(url = '', data = {}) { 
            // Default options are marked with *
            const response = await fetch(url, {
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'same-origin', // include, *same-origin, omit
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: 'follow', // manual, *follow, error
              referrer: 'no-referrer', // no-referrer, *client
              body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            return await response.json(); // parses JSON response into native JavaScript objects
      },
      async  signUpUser(url = '', data = {}) { 
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrer: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
    },
      async  changeUserPassword(url = '', data = {}) { 
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrer: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
      },
      manageUserAccount: function (data) {
          let user = {
            displayName: data.user.displayName,
            uid: data.user.uid,
            email: data.user.email,
            photoURL: data.user.photoURL,
            apiKey: data.user.customClaims,
            accessToken: data.user.accessToken,
            refreshToken: data.user.refreshToken,
            phoneNumber: data.user.phoneNumber
          }

          window.localStorage.setItem("token", user.accessToken);
          window.localStorage.setItem("uid", user.uid);
          window.localStorage.setItem("user", user);

          window.location.href = "/profile"
      },
      setUserData: function (data) {
        userData = data;
      },
      getUserData: function () {
        return userData;
    },
    setConfigData: function (data) {
      _config = data;
    },
    getConfigData: function () {
    return _config;
    }

    }
  }());

/* _id
firstName
middleName
lastName
gender
phoneNumber
emailAddress
emailAddress
contactAddress
personalStatement
position
userRole
dateRegistered
photo
socials */