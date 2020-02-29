var Languages = (function() {
    'use strict';
    var _template = `<tr>
                          <td class="count"></td>
                          <td class="name"></td>
                          <td class="country"></td>
                          <td class="date"></td>
                      </tr>`;
  
    return {
        getTamplate(){
          return _template;
        },
        async  createLanguage(url = '', data = {}) {  
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
          return await response.json(); // parses JSON response into native JavaScript objects
      },
      async  loadLanguages(url = '') {
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
    }
  }());
