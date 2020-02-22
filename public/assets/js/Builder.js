var Builder = (function() {
    'use strict';
    var _template = `<div class="builder-card  col-sm-12  col-md-12  col-lg-6 mt-3">
                    <img class="imgSrc" src="" alt="photo" style="max-width:250px; max-height:250px; ">
                    <h3 class="fullname"></h3>
                    <p class="builder-title initials"></p>
                    <p class="position"></p>
                    <div style="margin: 24px 0;">
                            <a href="#"  target="_blank" class="btn btn-just-icon btn-link btn-facebook"><i class="fa fa-facebook"></i></a>
                            <a href="#"  target="_blank" class="btn btn-just-icon btn-link btn-twitter"><i class="fa fa-twitter"></i></a>
                            <a href="#"  target="_blank" class="btn btn-just-icon btn-link btn-linkedin"><i class="fa fa-linkedin"></i></a>
                    </div>
                    <button class="builder-button"></button> 
                  </div>`;
    var _profile = {};
  
    return {
        getBuilderProfile: function () {
            return _profile;
          },
        setBuilderProfile: function (data) {
             _profile = data;
          },
          getBuilderTemplate: function () {
            return _template;
          },
          async  getAllBuilders() {
            // Default options are marked with *
            const response = await fetch("/edit_profile/", {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+window.localStorage.getItem("uid")
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrer: 'no-referrer', // no-referrer, *client
            });
            return await response.json(); // parses JSON response into native JavaScript objects
        },
        async  createBuilder(url = '', data = {}) {  
          // Default options are marked with *
          const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+window.localStorage.getItem("uid")

              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
          return await response.text(); // parses JSON response into native JavaScript objects
      },

    }
  }());
