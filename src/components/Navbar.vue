<script setup>
import { RouterLink } from 'vue-router';
</script>


<template>
<header>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link active">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
</template>