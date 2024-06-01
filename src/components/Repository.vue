

<template>
  <div id="container">
    <div id="navbar">
      
      <i class="fab fa-github fa-3x bounce"></i>


      <h1>TheFemiOlaniyi</h1>
    </div>
    <h2>List of Available Repository</h2>
    <div class="repos">

      <div class="indirepos" v-for="(repo, index) in paginatedRepos" :key="index" >
      <h3>{{ repo.name }}</h3>
      <p>Description:{{ repo.description }}</p>
      <p>Language:{{ repo.language }}</p>
      <a :href="repo.html_url" target="_blank" class="visit-button">VISIT GIT</a>
    
      
    </div>
    

     

    </div>
    
    <!-- THE PAGINATION CODE -->

    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 0">Prev</button>
      <button @click="nextPage" :disabled="currentPage === totalPages - 1">Next</button>
    </div>
    

  </div>

  
</template>


<script >

// import axios from "axios";


export default {
  name: "Repository",
  data(){
    return {
      repos: [],
      currentPage: 0,
      perPage:4
    };  
  },

  computed: {
        paginatedRepos() {
          const start = this.currentPage * this.perPage;
          return this.repos.slice(start, start + this.perPage);
        },
        totalPages() {
          return Math.ceil(this.repos.length / this.perPage);
        }
      },

 methods: {
        async fetchRepos() {
          const response = await fetch("https://api.github.com/users/femiemmanuel2024/repos");
          const data = await response.json();
          this.repos = data.map(repo => ({
            name: repo.name,
            description: repo.description,
            language: repo.language,
            html_url: repo.html_url,
            files: ['file1.js', 'file2.js', 'file3.js'] 
          }));
        },
        nextPage() {
          if (this.currentPage < this.totalPages - 1) {
            this.currentPage++;
          }
        },
        prevPage() {
          if (this.currentPage > 0) {
            this.currentPage--;
          }
        }
      },
      mounted() {
        this.fetchRepos();
 }
  
};
</script>
