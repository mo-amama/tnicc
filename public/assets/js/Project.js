var Project = (function() {
    'use strict';
    var _template = `<div class="card col-sm-12  col-md-12  col-lg-6 mt-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 col-lg-8 col-md-6">
                                <h5 class="mb-0 text-truncated project_title" style="text-transform: uppercase;"></h5>
                                <p class="project_desc shorten">
                                   
                                </p>
                                <p class="lead"></p>

                    
                            </div>
                            <div class="col-12 col-lg-4 col-md-6 text-center">
                                    <img alt="qrcode" class="mx-auto  img-fluid qrcodeSrc"/>
                                <br>
                            
                            </div>
                            <div class="col-12 col-lg-6">
                                <a href="#" target="_blank" class="btn btn-block btn-outline-success project_download"><span class="fa fa-file-download"></span> Download Project</a>
                            </div>
                            <div class="col-12 col-lg-6">
                                <button type="button" class="btn btn-outline-primary btn-block project_print"><span class="fa fa-print"></span> Print Slip</button>
                            </div>
                            <!--/col-->
                        </div>
                        <!--/row-->
                    </div>
                    <!--/card-block-->
                </div>`;
    var _profile = {};
  
    return {
        getProjectTemplate: function () {
            return _template;
          },
          async  getProjectDetails(id) {
            // Default options are marked with *
            const response = await fetch("/bulder/project/"+id, {
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
        async  loadBuildersProject() {
            // Default options are marked with *
            const response = await fetch("/bulder/project/current", {
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

        async  loadProjects() {
            // Default options are marked with *
            const response = await fetch("/bulder/project", {
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
        async  createProject(data) {
            // Default options are marked with *
            const response = await fetch("/bulder/project/create", {
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
