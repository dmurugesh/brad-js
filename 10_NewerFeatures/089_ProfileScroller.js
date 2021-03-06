const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/lego/2.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'female',
        lookingfor: 'male',
        location: 'Kochi Kerala',
        image: 'https://randomuser.me/api/portraits/lego/4.jpg'
    },
    {
        name: 'William Johnson',
        age: 38,
        gender: 'male',
        lookingfor: 'female',
        location: 'Chennai India',
        image: 'https://randomuser.me/api/portraits/lego/5.jpg'
    },
];

const profiles = profileIterator(data);

//Call first Profile 
nextProfile();

//Next Event
document.getElementById('next').addEventListener('click', nextProfile);
// document.getElmentById('next').addEventListener('click', nextProfile);

//Next Profile Display
function nextProfile(){
    const currentProfile = profiles.next().value;
    
    console.log('1');
    
    if(currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      <li class="list-group-item">Preference: ${currentProfile.gender} Looking for: ${currentProfile.lookingfor}</li>

    </ul>
  `; 

  console.log('1');

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        //No more Profiles 
        window.location.reload(); 
    }
}

//Profile Iterator 
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next:function() {
            return nextIndex < profiles.length ? {value: profiles[nextIndex++], done: false} :
            { done : true}
        }
    };
}