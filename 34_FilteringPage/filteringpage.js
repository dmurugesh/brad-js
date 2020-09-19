const listing = document.querySelector('.project-cards-wrapper');
const value = document.querySelector('.noof-projects');
const sortPlace = document.getElementById('myDropdown1');
const sortSort = document.getElementById('myDropdown3');
const sortModel = document.getElementById('myDropdown2');
const checkBox = document.getElementById('myDropdown1');
const select = document.getElementById('checkbox');

//Dropdown Navigation 
function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
    document.getElementById("myDropdown2").classList.remove("show");
    document.getElementById("myDropdown3").classList.remove("show");
}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
    document.getElementById("myDropdown1").classList.remove("show");
    document.getElementById("myDropdown3").classList.remove("show");
}

function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
    document.getElementById("myDropdown2").classList.remove("show");
    document.getElementById("myDropdown1").classList.remove("show");
}

// Extract data from JSON
//  Elements in filter place
async function filterPlaces() {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
}

filterPlaces()
    .then(data => {
        // Function to print no. of properties in DOM
        let projectValue = [];
        data.listedProjects.forEach(project => {
            projectValue.push(project['property-id']);
        });
        value.innerHTML += `${projectValue.length} Projects`;
        //  Elements in filter place
        let projectPlace = [];
        let repeat = [];
        let count = 0;
        data.listedProjects.forEach(project => {
            projectPlace.push(project['property-place']);
        });
        //Taking uniques elements from array
        let unique = projectPlace.filter((item, i, ar) => ar.indexOf(item) === i);
        //Sort the array element in alphabetical order 
        let place = unique.sort();
        for (var j = 0; j < place.length; j++) {
            data.listedProjects.forEach(project => {
                if (project['property-place'] === place[j]) {
                    count++;
                }
            });
            let c = place[j];
            let b = count;
            c = b;
            repeat.push(c);
            count = 0;
        }
        for (let i = 0; i < place.length; i++) {
            for (let j = 0; j < repeat.length; j++) {
                if (i === j) {
                    sortPlace.innerHTML += `<a href="#"> <input type="checkbox" id="checkbox"><span>${place[i]}</span><span>(${repeat[j]})</span></a>`
                    
                }

            }
        }
        // Element in Filter Status
        //  Elements in filter place
        let projectSort = [];
        let repeatSort = [];
        let countsort = 0;
        data.listedProjects.forEach(project => {
            projectSort.push(project['current-project-status']);
        });

        //Taking uniques elements from array
        let uniqueSort = projectSort.filter((item, i, ar) => ar.indexOf(item) === i);
        //Sort the array element in alphabetical order 
        let placeSort = uniqueSort.sort();
        for (var j = 0; j < placeSort.length; j++) {
            data.listedProjects.forEach(project => {
                if (project['current-project-status'] === placeSort[j]) {
                    countsort++;
                }
            });
            let c = placeSort[j];
            let b = countsort;
            c = b;
            repeatSort.push(c);

            countsort = 0;
        }
        for (let i = 0; i < placeSort.length; i++) {
            for (let j = 0; j < repeatSort.length; j++) {
                if (i === j) {
                    sortSort.innerHTML += `<a href="#"> <input type="checkbox" id="checkbox"><span>${placeSort[i]}</span><span>(${repeatSort[j]})</span></a>`
                }
            }
        }
        //  Elements in filter Project Model
        let projectModel = [];
        let repeatModel = [];
        let countModel = 0;
        data.listedProjects.forEach(project => {
            projectModel.push(project['property-type']);
        });

        //Taking uniques elements from array
        let uniqueModel = projectModel.filter((item, i, ar) => ar.indexOf(item) === i);
        //Sort the array element in alphabetical order 
        let modelSort = uniqueModel.sort();
        for (var j = 0; j < modelSort.length; j++) {
            data.listedProjects.forEach(project => {
                if (project['property-type'] === modelSort[j]) {
                    countModel++;
                }
            });
            let c = modelSort[j];
            let b = countModel;
            c = b;
            repeatModel.push(c);

            countModel = 0;
        }
        for (let i = 0; i < modelSort.length; i++) {
            for (let j = 0; j < repeatModel.length; j++) {
                if (i === j) {
                    sortModel.innerHTML += `<a href="#"> <input type="checkbox" id="checkbox"><span>${modelSort[i]}</span><span>(${repeatModel[j]})</span></a>`
                }
            }
        }


    });

//function used to print all the elements to DOM from JSON
updateData();

function updateData() {
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            let projectCards = '';
            let b = 0;
            data.listedProjects.forEach(project => {
                projectCards += `
                <div class="project-item project-item-card">
                    <div class="project-image">
                        <img src="${project['property-image']}">
                    </div>
                    <div class="project-details">
                        <h3 class="project-title">${project['property-name']}</h3>
                        <p class="project-location"><span class="project-place">${project['property-place']}</span>, <span
                                class="project-state">${project['property-state']}</span></p>
                        <p class="project-type">${project['property-type']}</p>
                        <div class="legal">
                        <div class="text">
                            Legal Process
                        </div>
                        <div class="bars">
                            <div class="bar1">
                                <img src="img/bar 1.png">
                            </div>
                            <div class="bar2">
                                <img src="img/bar 2.png">
                            </div>
                        </div>
                        </div>
                    <div class="plot">
                        Plot Availability
                        <div class="small-bars">
                            <img src="img/small bar 1.png">
                            <img src="img/small bar 1.png">
                            <img src="img/small bar 2.png">
                            <img src="img/small bar 2.png">
                            <img src="img/small bar 2.png">
                            <img src="img/small bar 2.png">
                            <img src="img/small bar 2.png">
                        </div>
                    </div>
                        <p class="project-status">Current project status: <span class="current-project-status">${project['current-project-status']}</span></p>
                        <div class="more-project-details"> 
                        <br>
                            <a href="#!" class="project-details-btn">PROJECT DETAILS<img src="img/down_arrow_project_details.png" alt="" class="margin"></a>
                            <a href="#!" class="project-enquire-btn">ENQUIRE</a>
                        </div>
    
                    </div>
                </div>
                
                `;
               
            });
            listing.innerHTML = projectCards;
        });
    }


//Filter Function
let filterInput = [];
let tap = 0;

const filter = (e) => {
    let temp = e.target.nextElementSibling.innerHTML;
    console.log(temp);
  
    if (tap === 0) {
        filterInput.push(temp);
        console.log(filterInput);
        filterfunction();
    } else {
        const index = filterInput.indexOf(temp);
        if (index > -1) {
            filterInput.splice(index, 1);
            console.log("remove", filterInput);
            
            if (filterInput.length === 0) {
                console.log('abc', filterInput.length === 0);
                updateData();
            } else {
                filterfunction();
            }
        } else {
            filterInput.push(temp);
            console.log("add", filterInput);
            filterfunction();
        }
        
    }
}

let statusInput = [];
const filterStatus = (e) => {
    console.log(tap);
    let temp = e.target.nextElementSibling.innerHTML;
    if (statusInput.length === 0 && filterInput.length === 0){
        tap = 0;
    } 
    console.log(temp);
    if (tap === 0) {
        console.log('if', tap);
        statusInput.push(temp);
        console.log(statusInput);
        filterfunctionStatus();
    } else {
        console.log('else')
        const index = statusInput.indexOf(temp);
        if (index > -1) {
            statusInput.splice(index, 1);
            console.log("remove", statusInput);
            
            if (statusInput.length === 0 && filterInput.length === 0 && modelInput.length === 0) {
                console.log('abc', statusInput.length === 0);
                updateData();
            } else if (statusInput.length === 0) {
                filterfunction();
            }
        } else {
            statusInput.push(temp);
            console.log("add", filterInput);
            crossFilter();
        }
    }
}

let modelInput = [];
const filterModel = (e) => {
    console.log(tap);
    let temp = e.target.nextElementSibling.innerHTML;
    if (statusInput.length === 0 && filterInput.length === 0 && modelInput.length === 0){
        tap = 0;
    } 
    console.log(temp);
    if (tap === 0) {
        console.log('if', tap);
        modelInput.push(temp);
        console.log(modelInput);
        filterfunctionStatus();
    } else {
        console.log('else')
        const index = modelInput.indexOf(temp);
        if (index > -1) {
            modelInput.splice(index, 1);
            console.log("remove", modelInput);
            if (statusInput.length === 0 && filterInput.length === 0 && modelInput.length === 0) {
                console.log('abc', modelInput.length === 0);
                updateData();
            } else if (modelInput.length === 0 && statusInput.length === 0) {
                console.log('qwe');
                filterfunction();
            } 
        } else {
            modelInput.push(temp);
            console.log("add", filterInput);
            crossFilter();
        }
    }
}


checkBox.addEventListener("click", filter);
sortSort.addEventListener("click", filterStatus);
sortModel.addEventListener("click", filterModel);


function crossFilter() {
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            let projectCards = '';
            let b = 0;

            data.listedProjects.forEach(project => {
                for (let i = 0; i < filterInput.length; i++) {
                    for (let j = 0; j < statusInput.length; j++){
                        for (let k = 0; k < modelInput.length; k++) {
                            if (project['property-place'] == filterInput[i] && project['current-project-status'] == statusInput[j] && project['property-type'] == modelInput[k]) {
                                projectCards += `
                                <div class="project-item project-item-card">
                                    <div class="project-image">
                                        <img src="${project['property-image']}">
                                    </div>
                                    <div class="project-details">
                                        <h3 class="project-title">${project['property-name']}</h3>
                                        <p class="project-location"><span class="project-place">${project['property-place']}</span>, <span
                                                class="project-state">${project['property-state']}</span></p>
                                        <p class="project-type">${project['property-type']}</p>
                                        <div class="legal">
                                        <div class="text">
                                            Legal Process
                                        </div>
                                        <div class="bars">
                                            <div class="bar1">
                                                <img src="img/bar 1.png">
                                            </div>
                                            <div class="bar2">
                                                <img src="img/bar 2.png">
                                            </div>
                                        </div>
                                        </div>
                                    <div class="plot">
                                        Plot Availability
                                        <div class="small-bars">
                                            <img src="img/small bar 1.png">
                                            <img src="img/small bar 1.png">
                                            <img src="img/small bar 2.png">
                                            <img src="img/small bar 2.png">
                                            <img src="img/small bar 2.png">
                                            <img src="img/small bar 2.png">
                                            <img src="img/small bar 2.png">
                                        </div>
                                    </div>
                                        <p class="project-status">Current project status: <span class="current-project-status">${project['current-project-status']}</span></p>
                                        <div class="more-project-details"> 
                                        <br>
                                            <a href="#!" class="project-details-btn">PROJECT DETAILS<img src="img/down_arrow_project_details.png" alt="" class="margin"></a>
                                            <a href="#!" class="project-enquire-btn">ENQUIRE</a>
                                        </div>
                    
                                    </div>
                                </div>
                                
                                `;
                            }
                        }
                    }
                }
            });



            data.listedProjects.forEach(project => {
                for (let i = 0; i < filterInput.length; i++) {
                    for (let j = 0; j < statusInput.length; j++){
                        if (project['property-place'] == filterInput[i] && project['current-project-status'] == statusInput[j]) {
                            projectCards += `
                            <div class="project-item project-item-card">
                                <div class="project-image">
                                    <img src="${project['property-image']}">
                                </div>
                                <div class="project-details">
                                    <h3 class="project-title">${project['property-name']}</h3>
                                    <p class="project-location"><span class="project-place">${project['property-place']}</span>, <span
                                            class="project-state">${project['property-state']}</span></p>
                                    <p class="project-type">${project['property-type']}</p>
                                    <div class="legal">
                                    <div class="text">
                                        Legal Process
                                    </div>
                                    <div class="bars">
                                        <div class="bar1">
                                            <img src="img/bar 1.png">
                                        </div>
                                        <div class="bar2">
                                            <img src="img/bar 2.png">
                                        </div>
                                    </div>
                                    </div>
                                <div class="plot">
                                    Plot Availability
                                    <div class="small-bars">
                                        <img src="img/small bar 1.png">
                                        <img src="img/small bar 1.png">
                                        <img src="img/small bar 2.png">
                                        <img src="img/small bar 2.png">
                                        <img src="img/small bar 2.png">
                                        <img src="img/small bar 2.png">
                                        <img src="img/small bar 2.png">
                                    </div>
                                </div>
                                    <p class="project-status">Current project status: <span class="current-project-status">${project['current-project-status']}</span></p>
                                    <div class="more-project-details"> 
                                    <br>
                                        <a href="#!" class="project-details-btn">PROJECT DETAILS<img src="img/down_arrow_project_details.png" alt="" class="margin"></a>
                                        <a href="#!" class="project-enquire-btn">ENQUIRE</a>
                                    </div>
                
                                </div>
                            </div>
                            
                            `;
                        }
                    }
                }
            });

            data.listedProjects.forEach(project => {
                for (let i = 0; i < filterInput.length; i++) {
                    for (let j = 0; j < modelInput.length; j++){
                        if (project['property-place'] == filterInput[i] && project['property-type'] == modelInput[j]) {
                            projectCards += `
                            <div class="project-item project-item-card">
                                <div class="project-image">
                                    <img src="${project['property-image']}">
                                </div>
                                <div class="project-details">
                                    <h3 class="project-title">${project['property-name']}</h3>
                                    <p class="project-location"><span class="project-place">${project['property-place']}</span>, <span
                                            class="project-state">${project['property-state']}</span></p>
                                    <p class="project-type">${project['property-type']}</p>
                                    <div class="legal">
                                    <div class="text">
                                        Legal Process
                                    </div>
                                    <div class="bars">
                                        <div class="bar1">
                                            <img src="img/bar 1.png">
                                        </div>
                                        <div class="bar2">
                                            <img src="img/bar 2.png">
                                        </div>
                                    </div>
                                    </div>
                                <div class="plot">
                                    Plot Availability
                                    <div class="small-bars">
                                        <img src="img/small bar 1.png">
                                        <img src="img/small bar 1.png">
                                        <img src="img/small bar 2.png">
                                        <img src="img/small bar 2.png">
                                        <img src="img/small bar 2.png">
                                        <img src="img/small bar 2.png">
                                        <img src="img/small bar 2.png">
                                    </div>
                                </div>
                                    <p class="project-status">Current project status: <span class="current-project-status">${project['current-project-status']}</span></p>
                                    <div class="more-project-details"> 
                                    <br>
                                        <a href="#!" class="project-details-btn">PROJECT DETAILS<img src="img/down_arrow_project_details.png" alt="" class="margin"></a>
                                        <a href="#!" class="project-enquire-btn">ENQUIRE</a>
                                    </div>
                
                                </div>
                            </div>
                            
                            `;
                        }
                    }
                }
            });

            data.listedProjects.forEach(project => {
                for (let i = 0; i < statusInput.length; i++) {
                    for (let j = 0; j < modelInput.length; j++){
                        if (project['property-type'] == statusInput[i] && project['current-project-status'] == modelInput[j]) {
                            projectCards += `
                            <div class="project-item project-item-card">
                                <div class="project-image">
                                    <img src="${project['property-image']}">
                                </div>
                                <div class="project-details">
                                    <h3 class="project-title">${project['property-name']}</h3>
                                    <p class="project-location"><span class="project-place">${project['property-place']}</span>, <span
                                            class="project-state">${project['property-state']}</span></p>
                                    <p class="project-type">${project['property-type']}</p>
                                    <div class="legal">
                                    <div class="text">
                                        Legal Process
                                    </div>
                                    <div class="bars">
                                        <div class="bar1">
                                            <img src="img/bar 1.png">
                                        </div>
                                        <div class="bar2">
                                            <img src="img/bar 2.png">
                                        </div>
                                    </div>
                                    </div>
                                <div class="plot">
                                    Plot Availability
                                    <div class="small-bars">
                                        <img src="img/small bar 1.png">
                                        <img src="img/small bar 1.png">
                                        <img src="img/small bar 2.png">
                                        <img src="img/small bar 2.png">
                                        <img src="img/small bar 2.png">
                                        <img src="img/small bar 2.png">
                                        <img src="img/small bar 2.png">
                                    </div>
                                </div>
                                    <p class="project-status">Current project status: <span class="current-project-status">${project['current-project-status']}</span></p>
                                    <div class="more-project-details"> 
                                    <br>
                                        <a href="#!" class="project-details-btn">PROJECT DETAILS<img src="img/down_arrow_project_details.png" alt="" class="margin"></a>
                                        <a href="#!" class="project-enquire-btn">ENQUIRE</a>
                                    </div>
                
                                </div>
                            </div>
                            
                            `;
                        }
                    }
                }
            });

           


            listing.innerHTML = projectCards;
            tap = 1;
        });
    }

function filterfunction() {
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data.listedProjects)
            let projectCards = '';
            let b = 0;
            data.listedProjects.forEach(project => {
                for (i = 0; i < filterInput.length; i++ ) {
                    // console.log('ab', typeof(toString(filterInput[i])), project['property-place']);
                    // let c = toString(filterInput[i]);
                if (project['property-place'] == filterInput[i]) {
                    console.log('a');
                    projectCards += `
                <div class="project-item project-item-card">
                    <div class="project-image">
                        <img src="${project['property-image']}">
                    </div>
                    <div class="project-details">
                        <h3 class="project-title">${project['property-name']}</h3>
                        <p class="project-location"><span class="project-place">${project['property-place']}</span>, <span
                                class="project-state">${project['property-state']}</span></p>
                        <p class="project-type">${project['property-type']}</p>
                        <div class="legal">
                        <div class="text">
                            Legal Process
                        </div>
                        <div class="bars">
                            <div class="bar1">
                                <img src="img/bar 1.png">
                            </div>
                            <div class="bar2">
                                <img src="img/bar 2.png">
                            </div>
                        </div>
                        </div>
                    <div class="plot">
                        Plot Availability
                        <div class="small-bars">
                            <img src="img/small bar 1.png">
                            <img src="img/small bar 1.png">
                            <img src="img/small bar 2.png">
                            <img src="img/small bar 2.png">
                            <img src="img/small bar 2.png">
                            <img src="img/small bar 2.png">
                            <img src="img/small bar 2.png">
                        </div>
                    </div>
                        <p class="project-status">Current project status: <span class="current-project-status">${project['current-project-status']}</span></p>
                        <div class="more-project-details"> 
                        <br>
                            <a href="#!" class="project-details-btn">PROJECT DETAILS<img src="img/down_arrow_project_details.png" alt="" class="margin"></a>
                            <a href="#!" class="project-enquire-btn">ENQUIRE</a>
                        </div>

                    </div>
                </div>
                `;
                } else if (project['current-project-status'] == filterInput[i]){
                    projectCards += `
                    <div class="project-item project-item-card">
                        <div class="project-image">
                            <img src="${project['property-image']}">
                        </div>
                        <div class="project-details">
                            <h3 class="project-title">${project['property-name']}</h3>
                            <p class="project-location"><span class="project-place">${project['property-place']}</span>, <span
                                    class="project-state">${project['property-state']}</span></p>
                            <p class="project-type">${project['property-type']}</p>
                            <div class="legal">
                            <div class="text">
                                Legal Process
                            </div>
                            <div class="bars">
                                <div class="bar1">
                                    <img src="img/bar 1.png">
                                </div>
                                <div class="bar2">
                                    <img src="img/bar 2.png">
                                </div>
                            </div>
                            </div>
                        <div class="plot">
                            Plot Availability
                            <div class="small-bars">
                                <img src="img/small bar 1.png">
                                <img src="img/small bar 1.png">
                                <img src="img/small bar 2.png">
                                <img src="img/small bar 2.png">
                                <img src="img/small bar 2.png">
                                <img src="img/small bar 2.png">
                                <img src="img/small bar 2.png">
                            </div>
                        </div>
                            <p class="project-status">Current project status: <span class="current-project-status">${project['current-project-status']}</span></p>
                            <div class="more-project-details"> 
                            <br>
                                <a href="#!" class="project-details-btn">PROJECT DETAILS<img src="img/down_arrow_project_details.png" alt="" class="margin"></a>
                                <a href="#!" class="project-enquire-btn">ENQUIRE</a>
                            </div>
    
                        </div>
                    </div>
                    `;
                    
                } else if (project['property-type'] == filterInput[i]){
                    projectCards += `
                    <div class="project-item project-item-card">
                        <div class="project-image">
                            <img src="${project['property-image']}">
                        </div>
                        <div class="project-details">
                            <h3 class="project-title">${project['property-name']}</h3>
                            <p class="project-location"><span class="project-place">${project['property-place']}</span>, <span
                                    class="project-state">${project['property-state']}</span></p>
                            <p class="project-type">${project['property-type']}</p>
                            <div class="legal">
                            <div class="text">
                                Legal Process
                            </div>
                            <div class="bars">
                                <div class="bar1">
                                    <img src="img/bar 1.png">
                                </div>
                                <div class="bar2">
                                    <img src="img/bar 2.png">
                                </div>
                            </div>
                            </div>
                        <div class="plot">
                            Plot Availability
                            <div class="small-bars">
                                <img src="img/small bar 1.png">
                                <img src="img/small bar 1.png">
                                <img src="img/small bar 2.png">
                                <img src="img/small bar 2.png">
                                <img src="img/small bar 2.png">
                                <img src="img/small bar 2.png">
                                <img src="img/small bar 2.png">
                            </div>
                        </div>
                            <p class="project-status">Current project status: <span class="current-project-status">${project['current-project-status']}</span></p>
                            <div class="more-project-details"> 
                            <br>
                                <a href="#!" class="project-details-btn">PROJECT DETAILS<img src="img/down_arrow_project_details.png" alt="" class="margin"></a>
                                <a href="#!" class="project-enquire-btn">ENQUIRE</a>
                            </div>
    
                        </div>
                    </div>
                    `;
                    
                }
                listing.innerHTML = projectCards;
                tap = 1;
            }
            });
            // a = [];
            // console.log(projectCards);
        });

    }



function filterfunctionStatus() {
    fetch('data.json')
    .then(res => res.json())
    .then(data => {
        // console.log(data.listedProjects)
        let projectCards = '';
        let b = 0;
        data.listedProjects.forEach(project => {
            for (let i = 0; i < statusInput.length; i++ ) {
                // console.log('ab', typeof(toString(filterInput[i])), project['property-place']);
                // let c = toString(filterInput[i]);
            if (project['current-project-status'] === statusInput[i]) {
                console.log('a');
                projectCards += `
            <div class="project-item project-item-card">
                <div class="project-image">
                    <img src="${project['property-image']}">
                </div>
                <div class="project-details">
                    <h3 class="project-title">${project['property-name']}</h3>
                    <p class="project-location"><span class="project-place">${project['property-place']}</span>, <span
                            class="project-state">${project['property-state']}</span></p>
                    <p class="project-type">${project['property-type']}</p>
                    <div class="legal">
                    <div class="text">
                        Legal Process
                    </div>
                    <div class="bars">
                        <div class="bar1">
                            <img src="img/bar 1.png">
                        </div>
                        <div class="bar2">
                            <img src="img/bar 2.png">
                        </div>
                    </div>
                    </div>
                <div class="plot">
                    Plot Availability
                    <div class="small-bars">
                        <img src="img/small bar 1.png">
                        <img src="img/small bar 1.png">
                        <img src="img/small bar 2.png">
                        <img src="img/small bar 2.png">
                        <img src="img/small bar 2.png">
                        <img src="img/small bar 2.png">
                        <img src="img/small bar 2.png">
                    </div>
                </div>
                    <p class="project-status">Current project status: <span class="current-project-status">${project['current-project-status']}</span></p>
                    <div class="more-project-details"> 
                    <br>
                        <a href="#!" class="project-details-btn">PROJECT DETAILS<img src="img/down_arrow_project_details.png" alt="" class="margin"></a>
                        <a href="#!" class="project-enquire-btn">ENQUIRE</a>
                    </div>

                </div>
            </div>
            `;
            listing.innerHTML = projectCards;
            tap = 1; 
            } 
        }
        });
        data.listedProjects.forEach(project => {
            for (let i = 0; i < modelInput.length; i++ ) {
                // console.log('ab', typeof(toString(filterInput[i])), project['property-place']);
                // let c = toString(filterInput[i]);
            if (project['property-type'] === modelInput[i]) {
                console.log('a');
                projectCards += `
            <div class="project-item project-item-card">
                <div class="project-image">
                    <img src="${project['property-image']}">
                </div>
                <div class="project-details">
                    <h3 class="project-title">${project['property-name']}</h3>
                    <p class="project-location"><span class="project-place">${project['property-place']}</span>, <span
                            class="project-state">${project['property-state']}</span></p>
                    <p class="project-type">${project['property-type']}</p>
                    <div class="legal">
                    <div class="text">
                        Legal Process
                    </div>
                    <div class="bars">
                        <div class="bar1">
                            <img src="img/bar 1.png">
                        </div>
                        <div class="bar2">
                            <img src="img/bar 2.png">
                        </div>
                    </div>
                    </div>
                <div class="plot">
                    Plot Availability
                    <div class="small-bars">
                        <img src="img/small bar 1.png">
                        <img src="img/small bar 1.png">
                        <img src="img/small bar 2.png">
                        <img src="img/small bar 2.png">
                        <img src="img/small bar 2.png">
                        <img src="img/small bar 2.png">
                        <img src="img/small bar 2.png">
                    </div>
                </div>
                    <p class="project-status">Current project status: <span class="current-project-status">${project['current-project-status']}</span></p>
                    <div class="more-project-details"> 
                    <br>
                        <a href="#!" class="project-details-btn">PROJECT DETAILS<img src="img/down_arrow_project_details.png" alt="" class="margin"></a>
                        <a href="#!" class="project-enquire-btn">ENQUIRE</a>
                    </div>

                </div>
            </div>
            `;
            listing.innerHTML = projectCards;
            tap = 1; 
            } 
            // listing.innerHTML = projectCards;
            // tap = 1;
        }
        });
    });

}
    

