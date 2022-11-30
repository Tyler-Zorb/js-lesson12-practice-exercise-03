const notRegistered = document.querySelector(".not-registered");

const getRegistrationData = async function () {
    const request = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json")
    const data = await request.json(); //this is parsing the json data from the request and saving it to a var named data
    displayContactList(data);   //as one of the last steps it has me call displayContactList and provide it data as an argument.
};

const displayContactList = function (data) {
    for (const student of data) {    //this loops over the data (so data is 2nd) and it's for every student who hasn't registered so student is whats first. But for every student who hasn't registered it creates a new list element that will contain their name.
        if (student.registered === "no") {
            const li = document.createElement("li");
            li.innerText = student.name;
            notRegistered.append(li);   //then I append the list item to the notRegistered element.
        }
    }
};

getRegistrationData();