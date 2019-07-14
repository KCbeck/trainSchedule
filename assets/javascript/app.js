var firebaseConfig = {
  apiKey: "AIzaSyDyc8GieF_kYEm75PffRe0B6kCoJtgX99M",
  authDomain: "my-cool-project-1b045.firebaseapp.com",
  databaseURL: "https://my-cool-project-1b045.firebaseio.com",
  projectId: "my-cool-project-1b045",
  storageBucket: "",
  messagingSenderId: "1053665250853",
  appId: "1:1053665250853:web:9edeb9e983c2ed7a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// 2. Button for adding trains
$("#add-train-btn").on("click", function(event) {
event.preventDefault();
    // Storing and retreiving new train data
    name = $("#train-name").val().trim();
    destination = $("#train-destination").val().trim();
    oneTrain = $("#one-train").val().trim();
    frequency = $("#train-frequency").val().trim();
    timeAway =$("#timeLeft").val().trim();
    
 
    // Pushing to database
    database.ref().push({
        name: name,
        destination: destination,
        oneTrain: oneTrain,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
    $("form")[0].reset();
});

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
    var oneTrainNew;
    var timeAway;
   
    // Chang year so one train comes before now
    var oneTrainNew = moment(childSnapshot.val().oneTrain, "hh:mm").subtract(1, "years");
    console.log(oneTrainNew);
    // Difference between the current and oneTrain
    var diffTime = moment().diff(moment(oneTrainNew), "minutes");
    console.log(diffTime);
    
    var remainder = diffTime % childSnapshot.val().frequency;
    // Minutes until next train
    var timeAway = childSnapshot.val().frequency - remainder;
    // Next train time
    var nextTrain = moment().add(timeAway, "minutes");
    nextTrain = moment(nextTrain).format("hh:mm");

    $("tbody").append("<tr><td>" + childSnapshot.val().name +
            "</td><td>" + childSnapshot.val().destination +
            "</td><td>" + childSnapshot.val().frequency +
            "</td><td>" + oneTrainNew + 
            "</td><td>" + timeAway + "</td></tr>");

        // Handle the errors
    }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
});

database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
    // Change the HTML to reflect
    $("#name-display").html(snapshot.val().name);
    $("#email-display").html(snapshot.val().email);
    $("#age-display").html(snapshot.val().age);
    $("#comment-display").html(snapshot.val().comment);
});
var firebaseConfig = {
  apiKey: "AIzaSyDyc8GieF_kYEm75PffRe0B6kCoJtgX99M",
  authDomain: "my-cool-project-1b045.firebaseapp.com",
  databaseURL: "https://my-cool-project-1b045.firebaseio.com",
  projectId: "my-cool-project-1b045",
  storageBucket: "",
  messagingSenderId: "1053665250853",
  appId: "1:1053665250853:web:9edeb9e983c2ed7a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// 2. Button for adding trains
$("#add-train-btn").on("click", function(event) {
event.preventDefault();
    // Storing and retreiving new train data
    name = $("#train-name").val().trim();
    destination = $("#train-destination").val().trim();
    oneTrain = $("#one-train").val().trim();
    frequency = $("#train-frequency").val().trim();
    timeAway =$("#timeLeft").val().trim();
    
 
    // Pushing to database
    database.ref().push({
        name: name,
        destination: destination,
        oneTrain: oneTrain,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
    $("form")[0].reset();
});

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
    var oneTrainNew;
    var timeAway;
    var remainder = 0;
    // Chang year so one train comes before now
    var oneTrainNew = moment(childSnapshot.val().oneTrain, "hh:mm").subtract(1, "years");
    console.log(oneTrainNew);
    // Difference between the current and oneTrain
    var diffTime = moment().diff(moment(oneTrainNew), "minutes");
    console.log(diffTime);
    
    var remainder = diffTime % childSnapshot.val().frequency;
    // Minutes until next train
    var timeAway = childSnapshot.val().frequency - remainder;
    // Next train time
    var nextTrain = moment().add(timeAway, "00:00");
    nextTrain = moment(nextTrain).format("hh:mm");

    $("tbody").append("<tr><td>" + childSnapshot.val().name +
            "</td><td>" + childSnapshot.val().destination +
            "</td><td>" + childSnapshot.val().frequency +
            "</td><td>" + nextTrain + 
            "</td><td>" + timeAway + "</td></tr>");

        // Handle the errors
    }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
});

database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
    // Change the HTML to reflect
    $("#name-display").html(snapshot.val().name);
    $("#email-display").html(snapshot.val().email);
    $("#age-display").html(snapshot.val().age);
    $("#comment-display").html(snapshot.val().comment);
});
