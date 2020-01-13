// CREATE DATA
const data = [
    {
        name: 'Johe Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'friends',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/74.jpg'
    },
    {
        name: 'Jen Smith',
        age: 29,
        gender: 'female',
        lookingfor: 'hangout',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/33.jpg'
    },
    {
        name: 'Jill Doe',
        age: 33,
        gender: 'female',
        lookingfor: 'friends',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/women/24.jpg'
    }
];

// CREATE A VAR TO INIT PROFILE ITERATOR
const profiles = profileIterator(data);

// CALLING FIRST PROFILE
nextProfile();

// EVENT LISTERNET TO ACTIVATE ITERATOR FUNCTION
document.querySelector('#next').addEventListener('click', nextProfile);

// NEXT PROFILE FUNCTION
function nextProfile() {
    // WE NEED TO CALL NEXT
    const currentProfile = profiles.next().value;
    if (currentProfile !== undefined) {
        document.querySelector('#profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item">Looking For: ${currentProfile.lookingfor}</li>
        </ul>`;

        document.querySelector('#imageDisplay').innerHTML = `
        <img src=${currentProfile.image}>`;
    } else {
        window.location.reload();
    }
}

// PROFILE ITERATOR FUNCTION
function profileIterator(profiles) {
    // CREATE A VAR NEXT INDEX
    let nextIndex = 0;
    // RETURN A OBJECT WITH NEXT FUCTION
    return {
        next: function() {
            // RETURN EITHER THE VALUE OR DONE USING A TERNARY OPERATOR
            return nextIndex < profiles.length
                ? { value: profiles[nextIndex++], done: false }
                : { done: true };
        }
    };
}
