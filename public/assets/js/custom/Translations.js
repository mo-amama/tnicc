var Translations = (function() {
    'use strict';
    var _template = `<tr>
                    <td class="count"></td>
                    <td class="language"></td>
                    <td class="month"></td>
                    <td class="year"></td>
                    <td class="type"></td>
                    <td class="url"></td>
                    <td class="dateCreated"></td>
                  </tr>`;
    var _translations = [];
  
    return {
      getTranslations: function () {
        return _translations;
      },
      setTranslations: function (data) {
        _translations = data;
      },
      getTamplate(){
        return _template;
      },
      async  loadTransaltions(url = '') {
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
        setConfigData: function (data) {
            _config = data;
          },
          async  getConfigData(url = '') {
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
            return await response.text(); // parses JSON response into native JavaScript objects
        },
        async  uploadTranslation(url = '', data = {}) {  
          // Default options are marked with *
          const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json',

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
