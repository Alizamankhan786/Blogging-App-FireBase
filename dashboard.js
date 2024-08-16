import { addDoc, collection ,getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { db } from "./config.js"


const logoutbtn = document.querySelector(`#logout`);
const publishblog = document.querySelector(`#publish-btn`);
const blogtitle = document.querySelector(`#blog-title`);
const blogtext = document.querySelector(`#blog-text`);
const form = document.querySelector(`#form`);
const blogcard = document.querySelector(`#blogs-card-cont`);


let array = [];


async function  renderBlogs() {

    try {
        blogcard.innerHTML = ``

        for (let i = 0; i < array.length; i++) {
            console.log(i);
        
        blogcard.innerHTML += `

         <div class=" p-5 rounded-2xl w-[50vw] shadow-2xl mt-5">
            <div class="flex gap-2">
                <div class="avatar">
                    <div class="w-14 rounded">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="Tailwind-CSS-Avatar-component" />
                    </div>
                  </div>
                  <div>
                    <h1 class="font-sans text-md text-black font-semibold">${blogtitle.value}</h1>
                    <p class="text-gray-400 font-medium">Hasan raza-August 16</p>
                  </div>  
            </div>
            <div class="mt-3">
                <p class="text-gray-500 font-medium">${blogtext.value} </p>
            </div>
            <div class="mt-5 flex gap-4">
                <button class="border-none text-blue-500">Delete</button>
                <button class="border-none text-blue-500">Edit</button>
            </div>
            </div>
        
    
        `
            
            
        }
        
    } catch (error) {
        
    }
}


form.addEventListener((`submit`) , async (event) =>{
    event.preventDefault();
    console.log(blogtitle.value);
    console.log(blogtext.value);
    

    try {
        const docRef = await addDoc(collection(db, "users"), {

        title : blogtitle.value,
        text : blogtext.value,

        });
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      

});



const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
    array.push({
        
    title : blogtitle.value,
    text : blogtext.value,


    });

    renderBlogs();
});
