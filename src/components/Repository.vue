<template>
  <div id="container">

    <div id="navbar">
      <div class="left">
        <i class="fab fa-github fa-3x bounce" id="logo"></i>
      </div>

     <div class="right">
        <h1>TheFemiOlaniyi</h1>
    </div>
  

    <div class="center">
            <input type="text" v-model="githubUsername" placeholder="Enter GitHub Username..." class="user" />
            <button class="clicker" @click="fetchRepos">Fetch Repos</button>
    </div>


   
          
    </div>

    
     
    
    <h2>List of Available Repositories</h2>

    <div class="controls">
      <input type="text" v-model="searchQuery" placeholder="Search Repositories..." @input="searchRepos" />
      <button @click="createRepo">Create Repo</button>
    </div>

    <div class="repos">
      <div class="indirepos" v-for="(repo, index) in paginatedRepos" :key="index">
        <h3>{{ repo.name }}</h3>
        <p>Description: {{ repo.description }}</p>
        <p>Language: {{ repo.language }}</p>
        <a :href="repo.html_url" target="_blank" class="visit-button">VISIT GIT</a>
      </div>
    </div>
    
    <!-- Pagination -->
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 0">Prev</button>
      <button @click="nextPage" :disabled="currentPage === totalPages - 1">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Repository",
  data() {
    return {
      repos: [],
      searchQuery: '',
      githubUsername: 'femiemmanuel2024', // Default username
      currentPage: 0,
      perPage: 4
    };
  },
  computed: {
    filteredRepos() {
      return this.repos.filter(repo =>
        repo.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    paginatedRepos() {
      const start = this.currentPage * this.perPage;
      return this.filteredRepos.slice(start, start + this.perPage);
    },
    totalPages() {
      return Math.ceil(this.filteredRepos.length / this.perPage);
    }
  },
  methods: {
    async fetchRepos() {
      if (this.githubUsername.trim() === '') {
        alert("Please enter a GitHub username.");
        return;
      }
      const response = await fetch(`https://api.github.com/users/${this.githubUsername}/repos`);
      const data = await response.json();
      this.repos = data.map(repo => ({
        name: repo.name,
        description: repo.description,
        language: repo.language,
        html_url: repo.html_url,
        files: ['file1.js', 'file2.js', 'file3.js']
      }));
      this.currentPage = 0; 
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
    },
    searchRepos() {
      this.currentPage = 0; 
    },
    createRepo() {
      const createRepoUrl = "https://github.com/new";
      window.open(createRepoUrl, '_blank');
    }
  },
  mounted() {
    this.fetchRepos(); // Fetch repos for the default username
  }
};
</script>

