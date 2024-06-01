<template>
    <div class="not-found">
        <div class="fa-3x">
  <i class="fa-solid fa-sync fa-spin"></i>
        </div>
      <h5>404 Not Found</h5>
      <p>The page you are looking for does not exist.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  };
  </script>
  
  <style scoped>
  .not-found {
    height: 100vh; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: red;
    color: white;
    padding: 20px;
    animation: flash 1s infinite alternate;
  }
  
  h5{
    font-size: 70px;
  }
  @keyframes flash {
    0% {
      background-color: red;
    }
    100% {
      background-color: #ff3333; 
    }
  }
  </style>
  