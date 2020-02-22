    
function getCurrentUser(){ 
    let idToken = localStorage.getItem("idToken");
    if(idToken){
        User.verifyUser("/auth/verify", {idToken:idToken}).then(function(response){
            let uid = localStorage.getItem("uid");
            if(response.uid != uid){
                window.localStorage.removeItem("idToken");
                window.localStorage.removeItem("refreshToken");
                window.localStorage.removeItem("uid");
              //  window.location.replace("/");
            }
            console.log("status",JSON.stringify(response)); 
      }).catch(function(error) {
              // Handle error
              window.localStorage.removeItem("idToken");
              window.localStorage.removeItem("refreshToken");
              window.localStorage.removeItem("uid");
             // window.location.replace("/");
              // $(".loggedinmenus").html(User.getLoginTemplate());
            
            });

        }
    }
    $(document).ready(function(){
        getCurrentUser();
        User.fetchConfig("/auth/config").then(function(response){
            User.setConfigData(response);
            let uid = localStorage.getItem("uid");
            if(uid){
                $(".loggedinmenus").html(User.getLoggedInTemplate());
            }else{
                $(".loggedinmenus").html(User.getLoginTemplate());
            }
            let firebaseConfig = User.getConfigData(); 
            window.app = firebase.initializeApp(firebaseConfig);   
            });    
        $(document).on("click",'#logout',function(){
            firebase.auth(app).signOut().then(function() {
            // Sign-out successful.
            window.localStorage.removeItem("idToken");
            window.localStorage.removeItem("refreshToken");
            window.localStorage.removeItem("uid");
            $(".loggedinmenus").html(User.getLoginTemplate());
            }).catch(function(error) {
            // An error happened.
            console.log(error.message);
            });
        })
        $(document).on("click",'#profile_link',function(){
            
            window.location.href = "/user/profile/" +window.localStorage.getItem("uid");

        });

        $("#btnSubmit").click(function(event) {
        let self = this
        $(self).prop("disabled", true);
        // add spinner to button
        $(self).append(
            `<span class="fa fa-spinner fa-spin fa-2x" id="loader"></span>`
        );
        $("#login_error").text(""); 
        // Fetch form to apply custom Bootstrap validation
        var form = $("#loginForm")

        if (form[0].checkValidity() === false) { 
        event.preventDefault()
        event.stopPropagation()
        } 

        form.addClass('was-validated');
        // Perform ajax submit here...


        let credentials = {
            email: $("#user_email").val(),
            password: $("#user_password").val()
        }


        firebase.auth(app).signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(function(data) {
            User.setUserData(data);
        }).then(function(){ 
            
            firebase.auth(app).currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
                // Send token to your backend via HTTPS
                      let result =  User.getUserData();
                       window.localStorage.setItem("idToken", idToken);
                         window.localStorage.setItem("refreshToken", result.user.refreshToken);
                         window.localStorage.setItem("uid", result.user.uid);
                         window.location.href = "/user/profile/" +result.user.uid;  

/*                          User.getCustomClaims('/auth/claims/'+result.user.uid).then(function(claims){
                            if(claims.userRole[0] == "Super Admin"){
                             
                            }                        
                            console.log("Claims successful");
                        console.log("claims",JSON.stringify(claims));  */

                 //   });

                }).catch(function(error) {
                // Handle error
                });

        }).catch(function(error) {
            document.getElementById('btnSubmit').disabled  = false;
            document.getElementById("loader").remove()
            if(error.code == "auth/wrong-password"){
                document.getElementById("login_error").innerHTML = "Invalid password entered!"
            }
            if(error.code == "auth/user-not-found"){
                document.getElementById("login_error").innerHTML = "Invalid email entered!"
            }

        });



        });

        $("#recoveryBtn").click(function(event) {

        // Fetch form to apply custom Bootstrap validation
        var form = $("#recoveryForm")

        if (form[0].checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
        }

        form.addClass('was-validated');
        // Perform ajax submit here...
        console.log("credentials",JSON.stringify(form))

        });

    });

