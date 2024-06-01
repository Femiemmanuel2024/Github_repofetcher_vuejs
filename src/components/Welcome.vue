<template>
    <div id="navbar">
      <i class="fab fa-github fa-3x bounce" id="logo"></i>
      <h1>TheFemiOlaniyi</h1>
    </div>
    <div class="welcome">
    <div class="fa-3x">

        <i class="fa-solid fa-cog fa-spin"></i>
        <i class="fa-solid fa-cog fa-spin fa-spin-reverse"></i>
        </div>
      <h4>Welcome to my Webapp</h4>
      <p>My name is Olaniyi Olufemi.</p>
      <p>This webapp list the repos in my Github account and was done using vue.js</p>
       <p> Click below to proceed to the repositories.</p>

      

      <router-link to="/repositories">
        <button>Go to Repositories</button>
      </router-link>
    </div>
  </template>
  
  <script >
    
  export default {
    name: 'Welcome'
  };
  </script>
  
  <style scoped>
  .welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  button {
    margin-top: 20px; 
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .fad.fa-spinner {
    font-size: 2em; 
    margin-top: 20px; 
    animation: spin-pulse 2s infinite; 
  }
  
  @keyframes spin-pulse {
    0% {
      transform: scale(0.5) rotate(0deg);
    }
    50% {
      transform: scale(1) rotate(180deg);
    }
    100% {
      transform: scale(0.5) rotate(360deg);
    }
  }

  h4{
    margin-top: 10px;
  }
  </style>

    