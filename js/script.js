const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question 1
const cat = {
    complain: function(){
        console.log("Meow!")
    }
};

//Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated Heading";

//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.className = "subheading";

//Question 5
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach(p => {
    p.style.color = "red";
});

//Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New Paragraph</p>";

//Question 7
function newList(list){
    for(let i = 0; i < list.length; i++)
        console.log(list[i].name)
};

//Question 8
const catContainer = document.querySelector(".cat-container")
function createCats(cats) {
    for (let i = 0; i < cats.length; i++){
        const age = cats[i].age ? cats[i].age : "Age unknown"
        catContainer.innerHTML += 
            `<div class="cats">
            <h5>${cats[i].name}</h5>
            <p>${age}</p>
            </div>`;
    }
};

createCats(cats);