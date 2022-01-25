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

//Question 1 finished
const cat = {
    complain: function(){
        console.log("Meow!")
    }
};

//Question 2 Finished
const heading = document.querySelector("h3");
heading.innerHTML = "Updated Heading";

//Question 3 Finished
heading.style.fontSize = "2em";

//Question 4 Finished
heading.className = "subheading";

//Question 5  Finished
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach(p => {
    p.style.color = "red";
});

//Question 6 Finished
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New Paragraph</p>";

//Question 7 Finished
function newList(list){
    for(let i = 0; i < list.length; i++)
        console.log(list[i].name)
};

//Question 8 //not finished
const catContainer = document.querySelector(".cat-container")
function createCats(cats){
    catContainer.innerHTML = `<p>Testing</p`
};

createCats(cats);